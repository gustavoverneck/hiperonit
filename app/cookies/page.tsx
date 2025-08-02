export default function Cookies() {
  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: 'var(--color-primary-700)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-primary-50)' }}>
            Política de Cookies
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-primary-200)' }}>
            Última atualização: 14 de julho de 2025
          </p>
        </div>

        <div className="space-y-8" style={{ color: 'var(--color-primary-300)' }}>
          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              O que são Cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo 
              quando você visita nosso site. Eles nos ajudam a melhorar sua experiência de 
              navegação e a entender como você interage com nosso conteúdo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              Tipos de Cookies Utilizados
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2" style={{ color: 'var(--color-accent-orange)' }}>
                  Cookies Essenciais
                </h3>
                <p>
                  Necessários para o funcionamento básico do site. Não podem ser desabilitados 
                  pois são fundamentais para a navegação e uso das funcionalidades.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2" style={{ color: 'var(--color-accent-orange)' }}>
                  Cookies de Desempenho
                </h3>
                <p>
                  Coletam informações sobre como você usa nosso site, ajudando-nos a melhorar 
                  o desempenho e a funcionalidade das páginas.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2" style={{ color: 'var(--color-accent-orange)' }}>
                  Cookies de Funcionalidade
                </h3>
                <p>
                  Permitem que o site lembre de suas preferências e personalize sua experiência 
                  de navegação.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2" style={{ color: 'var(--color-accent-orange)' }}>
                  Cookies Analíticos
                </h3>
                <p>
                  Utilizados para entender como os visitantes interagem com o site, fornecendo 
                  informações sobre páginas visitadas, tempo de permanência e origem do tráfego.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              Cookies de Terceiros
            </h2>
            <p className="mb-4">
              Nosso site pode utilizar cookies de terceiros para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Google Analytics - para análise de tráfego e comportamento</li>
              <li>Redes sociais - para integração com plataformas como LinkedIn e Twitter</li>
              <li>Ferramentas de chat - para suporte ao cliente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              Gerenciamento de Cookies
            </h2>
            <p className="mb-4">
              Você pode controlar e gerenciar cookies através das configurações do seu navegador:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Bloquear todos os cookies</li>
              <li>Aceitar apenas cookies essenciais</li>
              <li>Deletar cookies existentes</li>
              <li>Configurar notificações antes de aceitar cookies</li>
            </ul>
            <p className="mt-4">
              Note que desabilitar cookies pode afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              Atualizações desta Política
            </h2>
            <p>
              Esta política de cookies pode ser atualizada periodicamente. Recomendamos que 
              você a revise regularmente para se manter informado sobre como utilizamos cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-primary-50)' }}>
              Contato
            </h2>
            <p>
              Para dúvidas sobre nossa política de cookies, entre em contato conosco através 
              do email: contato@hiperonit.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
