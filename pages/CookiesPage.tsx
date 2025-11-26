import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: A real cookie banner would have state management and logic to set cookies.
// This is a visual placeholder.
const CookieConsentBanner: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
        <p className="text-sm">Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies.</p>
        <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Aceitar</button>
            <Link to="/politica-de-cookies" className="px-4 py-2 rounded text-sm hover:bg-neutral-700">Saber mais</Link>
        </div>
    </div>
);

const LegalPageLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-neutral-500 mb-6">Última atualização: {lastUpdated}</p>
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
                {children}
            </div>
        </div>
    </div>
);

const CookiesPage: React.FC = () => {
    return (
        <>
            <LegalPageLayout title="Política de Cookies" lastUpdated="1 de Janeiro de 2024">
                <h2>1. O que são cookies?</h2>
                <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, smartphone ou tablet) quando você visita um site. Eles permitem que o site reconheça o seu navegador e capture informações sobre como você interage com o conteúdo exibido.</p>

                <h2>2. Como usamos os cookies?</h2>
                <p>Na Academia Lendária, utilizamos cookies para melhorar a navegação, personalizar a experiência do usuário e entender como o site está sendo utilizado. Isso nos ajuda a oferecer conteúdos mais relevantes e otimizados para seu perfil e comportamento de navegação.</p>

                <h2>3. Tipos de cookies que utilizamos</h2>
                <ul>
                    <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento correto do site e para permitir o acesso a áreas seguras.</li>
                    <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como os visitantes utilizam o site, como páginas mais acessadas e possíveis erros encontrados.</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site lembre escolhas feitas por você (como nome de usuário, idioma e região).</li>
                    <li><strong>Cookies de Publicidade:</strong> Usados para entregar anúncios mais relevantes e medir a eficácia de campanhas publicitárias.</li>
                </ul>

                <h2>4. Por que usamos cookies?</h2>
                <p>Os cookies nos ajudam a oferecer uma experiência mais personalizada, entender o comportamento dos usuários, otimizar campanhas de marketing e garantir que o conteúdo exibido atenda aos seus interesses e necessidades.</p>

                <h2>5. Gerenciamento de cookies</h2>
                <p>Você pode controlar e/ou excluir cookies através das configurações do seu navegador. Lembre-se de que, ao desativar determinados cookies, partes do site podem não funcionar corretamente.</p>
                <p>Veja abaixo como gerenciar cookies nos principais navegadores:</p>
                <ul>
                    <li>Google Chrome</li>
                    <li>Mozilla Firefox</li>
                    <li>Safari</li>
                    <li>Microsoft Edge</li>
                </ul>

                <h2>6. Alterações nesta política</h2>
                <p>Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta página regularmente para se manter informado sobre nosso uso de cookies.</p>

                <h2>7. Contato</h2>
                <p>Se tiver dúvidas sobre nossa Política de Cookies ou sobre o uso de seus dados, entre em contato conosco pelo e-mail: <a href="mailto:contato@valoresdigitais.com" className="text-primary underline">contato@valoresdigitais.com</a>.</p>
            </LegalPageLayout>
            <CookieConsentBanner />
        </>
    );
};

export default CookiesPage;
