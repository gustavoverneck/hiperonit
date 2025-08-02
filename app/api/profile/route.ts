import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { formatPhone, formatCEP } from '@/app/utils/formatters';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function buildUpdateData(body: any): Record<string, any> {
  const updateData: Record<string, any> = {};
  if (body.name !== undefined && body.name.trim() !== '') {
    updateData.name = body.name.trim();
  }
  if (body.phone !== undefined) {
    updateData.phone = body.phone || null;
  }
  if (body.city !== undefined) {
    updateData.city = body.city || null;
  }
  if (body.address !== undefined) {
    updateData.address = body.address || null;
  }
  if (body.state !== undefined) {
    updateData.state = body.state || null;
  }
  if (body.postal_code !== undefined) {
    updateData.postal_code = body.postal_code || null;
  }
  if (body.country !== undefined) {
    updateData.country = body.country || null;
  }
  return updateData;
}

function validateUpdateData(updateData: Record<string, any>) {
  if (Object.keys(updateData).length === 0) {
    return { error: 'Nenhum dado fornecido para atualização', status: 400 };
  }
  if (updateData.name && updateData.name.length === 0) {
    return { error: 'Nome não pode estar vazio', status: 400 };
  }
  if (updateData.postal_code && updateData.postal_code.length !== 8) {
    return { error: 'CEP deve ter 8 dígitos', status: 400 };
  }
  if (updateData.phone && updateData.phone.length < 10) {
    return { error: 'Telefone deve ter pelo menos 10 dígitos', status: 400 };
  }
  return null;
}

// Função para formatar dados do perfil para exibição
function formatProfileForDisplay(profile: any) {
  if (!profile) return profile;
  
  return {
    ...profile,
    phone: profile.phone ? formatPhone(profile.phone) : '',
    postal_code: profile.postal_code ? formatCEP(profile.postal_code) : ''
  };
}

// Função para formatar nomes dos campos para exibição
function getFieldDisplayName(fieldName: string): string {
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
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, ...profileData } = body;
    
    // Validação rigorosa do userId
    if (!userId || userId === null || userId === undefined || userId === '') {
      return NextResponse.json(
        { error: 'userId é obrigatório e não pode ser nulo' },
        { status: 400 }
      );
    }
    
    const updateData = buildUpdateData(profileData);

    const validationError = validateUpdateData(updateData);
    if (validationError) {
      return NextResponse.json(
        { error: validationError.error },
        { status: validationError.status }
      );
    }

    updateData.updated_at = new Date().toISOString();
    
    const dataToUpsert = { ...updateData, id: userId };

    const { data, error } = await supabase
      .from('profiles')
      .upsert(dataToUpsert)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: `Erro ao salvar perfil: ${error.message}` },
        { status: 500 }
      );
    }

    // Formatar os campos atualizados para exibição
    const updatedFieldsFormatted = Object.keys(updateData)
      .filter(key => key !== 'updated_at')
      .map(getFieldDisplayName);

    return NextResponse.json({
      message: 'Perfil salvo com sucesso',
      profile: formatProfileForDisplay(data),
      updatedFields: updatedFieldsFormatted
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro interno do servidor';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId é obrigatório' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error && error.code === 'PGRST116') {
      return NextResponse.json({ 
        profile: formatProfileForDisplay({
          id: userId,
          name: '',
          phone: '',
          city: '',
          address: '',
          state: '',
          postal_code: '',
          country: 'BR'
        })
      });
    }

    if (error) {
      return NextResponse.json(
        { error: `Erro ao buscar perfil: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ profile: formatProfileForDisplay(data) });

  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}