'use client';

import { useState, useEffect } from 'react';
import { useUser } from '../../hooks/useUser';
import FormattedInput from '../FormattedInput';
import { cleanCEP, cleanPhone } from '../../utils/formatters';
import { BRAZILIAN_STATES, COUNTRIES } from '../../data/locations';

export default function DashboardProfile() {
  const { user, email } = useUser();
  const [loading, setLoading] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  // Estados para dados originais e modificados
  const [originalData, setOriginalData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    state: '',
    postal_code: '',
    country: 'BR'
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    state: '',
    postal_code: '',
    country: 'BR'
  });

  // Função para carregar dados do perfil da API
  const loadProfile = async () => {
    if (!user?.id) return;
    
    try {
      setLoadingProfile(true);
      
      const response = await fetch(`/api/profile?userId=${user.id}`);
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Erro ao carregar perfil');
      }
      
      const profileData = result.profile;
      
      // Garantir que todos os valores sejam strings (não null)
      const safeProfileData = {
        name: profileData.name || '',
        phone: profileData.phone || '',
        city: profileData.city || '',
        address: profileData.address || '',
        state: profileData.state || '',
        postal_code: profileData.postal_code || '',
        country: profileData.country || 'BR'
      };
      
      setOriginalData(safeProfileData);
      setFormData(safeProfileData);
      
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
      setMessage({ 
        type: 'error', 
        text: 'Erro ao carregar dados do perfil' 
      });
    } finally {
      setLoadingProfile(false);
    }
  };

  // Carrega dados do perfil quando o usuário está disponível
  useEffect(() => {
    if (user?.id) {
      loadProfile();
    }
  }, [user?.id]);

  // Função para detectar campos modificados
  const getModifiedFields = () => {
    const modifiedFields: Record<string, any> = {};
    
    Object.keys(formData).forEach(key => {
      const formKey = key as keyof typeof formData;
      let currentValue = formData[formKey];
      let originalValue = originalData[formKey];
      
      // Limpa formatação para campos especiais antes de comparar
      if (key === 'postal_code') {
        currentValue = cleanCEP(currentValue);
        originalValue = cleanCEP(originalValue);
      } else if (key === 'phone') {
        currentValue = cleanPhone(currentValue);
        originalValue = cleanPhone(originalValue);
      }

      // Extrai valor modificado em variável independente
      let modifiedValue = formData[formKey];
      if (key === 'postal_code') {
        modifiedValue = cleanCEP(formData[formKey]);
      } else if (key === 'phone') {
        modifiedValue = cleanPhone(formData[formKey]);
      }
      
      // Adiciona apenas se o valor foi modificado
      if (currentValue !== originalValue) {
        modifiedFields[key] = modifiedValue;
      }
    });
    
    return modifiedFields;
  };

  // Função para formatar nomes dos campos para exibição
  const getFieldDisplayName = (fieldName: string) => {
    const fieldMap: Record<string, string> = {
      name: 'Nome',
      phone: 'Telefone',
      city: 'Cidade',
      address: 'Endereço',
      state: 'Estado',
      postal_code: 'CEP',
      country: 'País'
    };
    return fieldMap[fieldName] || fieldName;
  };

  // Função para obter lista formatada dos campos modificados
  const getModifiedFieldsDisplay = () => {
    const modifiedFields = getModifiedFields();
    return Object.keys(modifiedFields).map(getFieldDisplayName);
  };

  // Handler para mudanças nos campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpa mensagem quando usuário começa a editar
    if (message) {
      setMessage(null);
    }
  };

  // Handler para salvar as alterações
  const handleSave = async () => {
    setLoading(true);
    setMessage(null);
    
    try {
      // Obtém apenas os campos modificados
      const modifiedFields = getModifiedFields();
      
      // Se não há modificações
      if (Object.keys(modifiedFields).length === 0) {
        setMessage({ type: 'error', text: 'Nenhuma alteração detectada' });
        return;
      }

      // Validação do lado do cliente para campos obrigatórios modificados
      if (modifiedFields.name !== undefined && !modifiedFields.name.trim()) {
        setMessage({ type: 'error', text: 'Nome não pode estar vazio' });
        return;
      }

      // Chama a API com PATCH para atualizar apenas campos modificados
      const response = await fetch('/api/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user?.id,
          ...modifiedFields
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao salvar dados');
      }

      // Garantir que todos os valores retornados sejam strings
      const safeProfileData = {
        name: result.profile.name || '',
        phone: result.profile.phone || '',
        city: result.profile.city || '',
        address: result.profile.address || '',
        state: result.profile.state || '',
        postal_code: result.profile.postal_code || '',
        country: result.profile.country || 'BR'
      };

      // Atualiza os dados originais com os dados formatados retornados pela API
      setOriginalData(safeProfileData);
      setFormData(safeProfileData);
      
      setMessage({ 
        type: 'success', 
        text: `Dados salvos com sucesso! Campos atualizados: ${result.updatedFields?.join(', ') || 'todos'}` 
      });
      
    } catch (error) {
      console.error('Erro ao salvar:', error);
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'Erro ao salvar os dados. Tente novamente.' 
      });
    } finally {
      setLoading(false);
    }
  };

  // Verifica se há mudanças pendentes
  const hasChanges = Object.keys(getModifiedFields()).length > 0;

  // Loading inicial
  if (loadingProfile) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-white">Carregando perfil...</div>
      </div>
    );
  }

  return (
    <>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Perfil</h1>
        <p className="text-gray-300">Gerencie suas informações pessoais</p>
      </div>

      {/* Message Alert */}
      {message && (
        <div className={`mb-6 p-4 rounded-lg border ${
          message.type === 'success' 
            ? 'bg-green-900/20 border-green-500/30 text-green-400' 
            : 'bg-red-900/20 border-red-500/30 text-red-400'
        }`}>
          {message.text}
        </div>
      )}

      {/* Changes Indicator */}
      {hasChanges && (
        <div className="mb-6 p-4 rounded-lg border border-yellow-500/30 bg-yellow-900/20 text-yellow-400">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">Alterações pendentes:</span>
          </div>
          <div className="text-sm">
            {getModifiedFieldsDisplay().join(', ')}
          </div>
          <div className="text-xs mt-1 opacity-75">
            Clique em "Salvar Alterações" para confirmar.
          </div>
        </div>
      )}

      {/* Profile content */}
      <div className="grid gap-6">
        <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-6">Informações Pessoais</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nome */}
            <FormattedInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              label="Nome Completo"
              placeholder="Digite seu nome"
              required
            />
            
            {/* Email (readonly) */}
            <FormattedInput
              type="email"
              name="email"
              value={email || ''}
              onChange={() => {}}
              label="Email"
              readOnly
            />
            
            {/* Telefone */}
            <FormattedInput
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              label="Telefone"
              placeholder="(00) 00000-0000"
            />
            
            {/* Cidade */}
            <FormattedInput
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              label="Cidade"
              placeholder="Sua cidade"
            />

            {/* Estado */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Estado
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
              >
                {BRAZILIAN_STATES.map(state => (
                  <option key={state.value} value={state.value} className="bg-gray-800">
                    {state.label}
                  </option>
                ))}
              </select>
            </div>

            {/* CEP */}
            <FormattedInput
              type="cep"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              label="CEP"
              placeholder="00000-000"
            />

            {/* Endereço */}
            <div className="md:col-span-2">
              <FormattedInput
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                label="Endereço"
                placeholder="Rua, número, bairro"
              />
            </div>

            {/* País */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                País
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-orange"
              >
                {COUNTRIES.map(country => (
                  <option key={country.value} value={country.value} className="bg-gray-800">
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <button 
              onClick={handleSave}
              disabled={loading || !hasChanges}
              className={`px-6 py-2 rounded-lg transition-colors font-medium ${
                loading || !hasChanges
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  : 'bg-accent-orange text-white hover:bg-accent-orange/90'
              }`}
            >
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </button>
            
            {hasChanges && (
              <button 
                onClick={() => {
                  setFormData(originalData);
                  setMessage(null);
                }}
                className="px-6 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors font-medium"
              >
                Cancelar
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}