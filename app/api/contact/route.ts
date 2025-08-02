import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    // Validação básica dos campos obrigatórios
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Template do email
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e1e1e 0%, #333333 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nova Mensagem de Contato</h1>
          <p style="color: #cccccc; margin: 10px 0 0 0;">Recebida através do site da Hiperon IT</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #007bff;">
          <h2 style="color: #333; margin-top: 0;">Informações do Cliente</h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Nome:</strong>
            <span style="color: #333; margin-left: 10px;">${name}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Email:</strong>
            <span style="color: #333; margin-left: 10px;">${email}</span>
          </div>
          
          ${company ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Empresa:</strong>
            <span style="color: #333; margin-left: 10px;">${company}</span>
          </div>
          ` : ''}
          
          ${phone ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Telefone:</strong>
            <span style="color: #333; margin-left: 10px;">${phone}</span>
          </div>
          ` : ''}
          
          ${service ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Serviço de Interesse:</strong>
            <span style="color: #333; margin-left: 10px;">${service}</span>
          </div>
          ` : ''}
        </div>
        
        <div style="background: #ffffff; padding: 25px; border-radius: 8px; margin-top: 20px; border: 1px solid #e9ecef;">
          <h3 style="color: #333; margin-top: 0;">Mensagem:</h3>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 3px solid #007bff;">
            <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
          <p style="color: #666; font-size: 14px; margin: 0;">
            Este email foi enviado automaticamente através do formulário de contato do site da Hiperon IT.
          </p>
          <p style="color: #666; font-size: 12px; margin: 10px 0 0 0;">
            Data: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
          </p>
        </div>
      </div>
    `;

    // Envio do email principal (para a empresa)
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'contato@hiperonit.com',
      to: process.env.RESEND_TO_EMAIL || 'contato@hiperonit.com',
      subject: `Nova mensagem de contato: ${name}`,
      html: emailTemplate,
      replyTo: email,
    });

    if (error) {
      console.error('Erro ao enviar email principal:', error);
      return NextResponse.json(
        { error: 'Erro interno do servidor ao enviar email' },
        { status: 500 }
      );
    }

    // Email de confirmação para o cliente
    const confirmationTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e1e1e 0%, #333333 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Obrigado pelo contato!</h1>
          <p style="color: #cccccc; margin: 15px 0 0 0; font-size: 16px;">Hiperon IT - Soluções em Tecnologia</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 8px;">
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Olá <strong>${name}</strong>,
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Recebemos sua mensagem e agradecemos seu interesse em nossos serviços! 
            Nossa equipe analisará sua solicitação e entraremos em contato em breve.
          </p>
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
            <h3 style="color: #1976d2; margin-top: 0;">Resumo da sua mensagem:</h3>
            <p style="color: #333; margin: 5px 0;"><strong>Serviço:</strong> ${service || 'Não especificado'}</p>
            <p style="color: #333; margin: 5px 0;"><strong>Empresa:</strong> ${company || 'Não informado'}</p>
            <div style="margin-top: 15px; padding: 10px; background: #ffffff; border-radius: 5px;">
              <p style="color: #666; font-size: 14px; margin: 0;"><strong>Sua mensagem:</strong></p>
              <p style="color: #333; margin: 10px 0 0 0; font-style: italic;">"${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"</p>
            </div>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0;">
            <h3 style="color: #333; margin-top: 0;">Próximos passos:</h3>
            <ul style="color: #333; line-height: 1.8; padding-left: 20px;">
              <li>Nossa equipe analisará sua solicitação</li>
              <li>Entraremos em contato em até 24 horas</li>
              <li>Agendaremos uma conversa para entender melhor suas necessidades</li>
              <li>Apresentaremos uma proposta personalizada</li>
            </ul>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 25px; background: #1e1e1e; border-radius: 8px;">
          <h3 style="color: #ffffff; margin-top: 0;">Contatos</h3>
          <p style="color: #cccccc; margin: 10px 0;">
            📞 <strong>Telefone:</strong> +55 (27) 9 9688-5857<br>
            📧 <strong>Email:</strong> contato@hiperonit.com<br>
            📍 <strong>Localização:</strong> Vila Velha-ES
          </p>
          
          <div style="margin-top: 20px;">
            <p style="color: #cccccc; font-size: 14px; margin: 0;">
              Siga-nos nas redes sociais:
            </p>
            <div style="margin-top: 10px;">
              <a href="https://instagram.com/hiperon.it" style="color: #007bff; text-decoration: none; margin: 0 10px;">Instagram</a>
              <a href="https://github.com/gustavoverneck" style="color: #007bff; text-decoration: none; margin: 0 10px;">GitHub</a>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
          <p style="color: #666; font-size: 12px; margin: 0;">
            Este é um email automático. Caso tenha alguma dúvida, responda este email ou entre em contato conosco.
          </p>
        </div>
      </div>
    `;

    // Enviar email de confirmação para o cliente
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'contato@hiperonit.com',
      to: email,
      subject: 'Confirmação: Recebemos sua mensagem - Hiperon IT',
      html: confirmationTemplate,
    });

    return NextResponse.json(
      { 
        message: 'Email enviado com sucesso!',
        id: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro no envio do email:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
