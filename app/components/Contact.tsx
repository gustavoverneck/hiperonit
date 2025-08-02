'use client';

import { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGithub,
  FaInstagram
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Obrigado pela sua mensagem! Entraremos em contato em breve.'
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Erro ao enviar mensagem. Tente novamente.'
        });
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Erro de conexão. Verifique sua internet e tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Telefone",
      details: ["+55 (27) 9 9688-5857"]
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      details: ["contato@hiperonit.com"]
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Endereço",
      details: ["Vila Velha-ES"]
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Horário de Funcionamento",
      details: ["Segunda - Sexta: 9:00 - 18:00", "Sábado: 10:00 - 16:00", "Domingo: Fechado"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-neutral-50">
            Entre em Contato
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-neutral-300">
            Pronto para transformar seu negócio com soluções de TI de ponta? Adoraríamos conversar com você. 
            Entre em contato e vamos discutir como podemos ajudar a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="rounded-2xl p-8 bg-neutral-800">
            <h3 className="text-2xl font-semibold mb-6 text-neutral-50">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`p-4 rounded-lg border ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-900/20 border-green-500 text-green-200' 
                    : 'bg-red-900/20 border-red-500 text-red-200'
                }`}>
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary-200">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border bg-neutral-300 text-neutral-800 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary-200">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border bg-neutral-300 text-neutral-800 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-primary-200">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border bg-neutral-300 text-neutral-800 transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-primary-200">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border  bg-neutral-300 text-neutral-800 transition-colors"
                    placeholder="Seu telefone"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-primary-200">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border bg-neutral-300 text-neutral-800 transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="desenvolvimento-web">Desenvolvimento Web</option>
                  <option value="apps-mobile">Apps Mobile</option>
                  <option value="solucoes-cloud">Soluções Cloud</option>
                  <option value="ciberseguranca">Cibersegurança</option>
                  <option value="analise-dados">Análise de Dados</option>
                  <option value="consultoria-ti">Consultoria em TI</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary-200">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border bg-neutral-300 text-neutral-800 transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-70' 
                    : 'bg-accent-500 text-primary-900 hover:bg-accent-400 hover:shadow-lg transform hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary-50">
                Informações de Contato
              </h3>
              <p className="mb-8 text-primary-300">
                Estamos aqui para ajudar e responder qualquer pergunta que você possa ter. 
                Aguardamos seu contato.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-neutral-800 text-accent-500">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-primary-50">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail) => (
                        <p key={detail} className="text-primary-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-primary-600">
              <h4 className="text-lg font-semibold mb-4 text-primary-50">
              Siga-nos
              </h4>
              <div className="flex space-x-4">
              <a
                href="https://instagram.com/hiperon.it"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-neutral-800 text-primary-400 hover:text-accent-500 hover:bg-primary-700"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/gustavoverneck"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-neutral-800 text-primary-400 hover:text-accent-500 hover:bg-primary-700"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
