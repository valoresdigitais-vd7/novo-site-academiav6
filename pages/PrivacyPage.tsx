import React from 'react';

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

const PrivacyPage: React.FC = () => {
    return (
        <LegalPageLayout title="Política de Privacidade" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Introdução</h2>
            <p>
                A Academia Lendária (“nós”, “nosso” ou “academialendaria-v6.valoresdigitais.com”) valoriza sua privacidade
                e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade explica como coletamos,
                usamos e protegemos as informações que você fornece ao utilizar nossos sites, produtos e serviços.
            </p>

            <h2>2. Dados Coletados</h2>
            <p>
                Coletamos informações pessoais e não pessoais de forma transparente e conforme a Lei Geral de Proteção de
                Dados (Lei nº 13.709/2018 – LGPD). As informações podem incluir:
            </p>
            <ul>
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Dados de pagamento (quando aplicável)</li>
                <li>Informações de navegação, cookies e analytics</li>
                <li>Comunicações e interações com nossa equipe</li>
            </ul>

            <h2>3. Finalidade do Uso dos Dados</h2>
            <p>
                Utilizamos seus dados para:
            </p>
            <ul>
                <li>Fornecer acesso a treinamentos, cursos e conteúdos da Academia Lendária;</li>
                <li>Melhorar continuamente nossos serviços e experiências de usuário;</li>
                <li>Enviar comunicações relevantes (como atualizações, promoções e notificações de suporte);</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2>4. Compartilhamento de Informações</h2>
            <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros além dos parceiros e
                prestadores de serviço necessários para operação da plataforma — como gateways de pagamento e provedores de
                hospedagem —, sempre sob cláusulas contratuais de confidencialidade e segurança.
            </p>

            <h2>5. Cookies e Tecnologias de Rastreamento</h2>
            <p>
                Utilizamos cookies para melhorar sua experiência de navegação, analisar métricas e personalizar conteúdos.
                Você pode gerenciar suas preferências de cookies diretamente em seu navegador.
            </p>

            <h2>6. Armazenamento e Segurança dos Dados</h2>
            <p>
                Aplicamos medidas de segurança técnicas e administrativas para proteger suas informações contra acesso não
                autorizado, perda, destruição ou alteração indevida. Seus dados são armazenados em servidores seguros e
                criptografados.
            </p>

            <h2>7. Direitos do Titular</h2>
            <p>
                Conforme a LGPD, você tem o direito de solicitar:
            </p>
            <ul>
                <li>Acesso e confirmação da existência de tratamento de seus dados;</li>
                <li>Correção de informações incorretas ou desatualizadas;</li>
                <li>Exclusão de dados pessoais, quando aplicável;</li>
                <li>Revogação do consentimento de uso de dados.</li>
            </ul>
            <p>
                Para exercer esses direitos, entre em contato pelo e-mail: <strong>privacidade@academialendaria.com</strong>
            </p>

            <h2>8. Retenção de Dados</h2>
            <p>
                Armazenamos seus dados pelo tempo necessário para atingir as finalidades descritas nesta política, a menos
                que um período mais longo seja exigido por lei.
            </p>

            <h2>9. Alterações nesta Política</h2>
            <p>
                Esta Política de Privacidade poderá ser atualizada periodicamente. Notificaremos os usuários sobre
                alterações significativas por e-mail ou por meio de aviso em nosso site.
            </p>

            <h2>10. Contato</h2>
            <p>
                Caso tenha dúvidas sobre esta Política de Privacidade ou o tratamento de seus dados pessoais, entre em
                contato conosco em: <strong>privacidade@academialendaria.com</strong>
            </p>

            <p>
                Ao continuar utilizando nossos serviços, você concorda com os termos desta Política de Privacidade.
            </p>
        </LegalPageLayout>
    );
};

export default PrivacyPage;
