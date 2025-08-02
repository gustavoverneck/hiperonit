export default function Privacy() {
  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: 'var(--color-primary-700)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-primary-50)' }}>
            Política de Privacidade
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-primary-200)' }}>
            Última atualização: 14 de julho de 2025
          </p>
        </div>

        <div className="space-y-8" style={{ color: 'var(--color-primary-300)' }}>
          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              1. Informações Coletadas
            </h2>
            <p className="mb-4">
              A Hiperon IT coleta informações que você nos fornece diretamente, como quando você:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Preenche formulários de contato em nosso site</li>
              <li>Se inscreve em nossa newsletter</li>
              <li>Solicita orçamentos ou consultorias</li>
              <li>Entra em contato conosco por email ou telefone</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              2. Como Utilizamos suas Informações
            </h2>
            <p className="mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responder às suas solicitações e fornecer suporte</li>
              <li>Enviar comunicações sobre nossos serviços</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Cumprir obrigações legais e regulamentares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              3. Compartilhamento de Informações
            </h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
              exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              4. Segurança dos Dados
            </h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
              suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              5. Seus Direitos
            </h2>
            <p className="mb-4">
              De acordo com a LGPD, você tem os seguintes direitos:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de dados incompletos ou inexatos</li>
              <li>Exclusão de dados desnecessários</li>
              <li>Portabilidade dos dados</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              6. Contato
            </h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
              entre em contato conosco através do email: contato@hiperonit.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
