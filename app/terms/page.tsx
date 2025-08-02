export default function Terms() {
  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: 'var(--color-primary-700)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-primary-50)' }}>
            Termos de Serviço
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-primary-200)' }}>
            Última atualização: 14 de julho de 2025
          </p>
        </div>

        <div className="space-y-8" style={{ color: 'var(--color-primary-300)' }}>
          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao utilizar os serviços da Hiperon IT, você concorda em estar vinculado a estes 
              Termos de Serviço. Se você não concordar com estes termos, não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              2. Descrição dos Serviços
            </h2>
            <p className="mb-4">
              A Hiperon IT oferece serviços de tecnologia da informação, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Desenvolvimento de aplicações web e mobile</li>
              <li>Soluções em nuvem (cloud computing)</li>
              <li>Consultoria em tecnologia</li>
              <li>Serviços de cibersegurança</li>
              <li>Análise e ciência de dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              3. Responsabilidades do Cliente
            </h2>
            <p className="mb-4">
              O cliente compromete-se a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornecer informações precisas e completas</li>
              <li>Cooperar durante o desenvolvimento dos projetos</li>
              <li>Efetuar pagamentos conforme acordado</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              4. Propriedade Intelectual
            </h2>
            <p>
              Todos os direitos de propriedade intelectual sobre as soluções desenvolvidas 
              serão definidos em contrato específico para cada projeto. O código fonte e 
              documentação customizados pertencem ao cliente após a conclusão e pagamento integral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              5. Limitação de Responsabilidade
            </h2>
            <p>
              A Hiperon IT não será responsável por danos indiretos, especiais, incidentais 
              ou consequenciais decorrentes do uso de nossos serviços. Nossa responsabilidade 
              total não excederá o valor pago pelos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              6. Rescisão
            </h2>
            <p>
              Qualquer das partes pode rescindir o contrato de serviços mediante aviso prévio 
              de 30 dias, exceto em casos de violação material destes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              7. Lei Aplicável
            </h2>
            <p>
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida 
              no foro da cidade de São Paulo, SP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              8. Contato
            </h2>
            <p>
              Para questões relacionadas a estes termos, entre em contato conosco através do 
              email: contato@hiperonit.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
