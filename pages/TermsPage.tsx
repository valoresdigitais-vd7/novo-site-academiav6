
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

const TermsPage: React.FC = () => {
    return (
        <LegalPageLayout title="Termos de Uso" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar o site <strong>academialendaria-v6.valoresdigitais.com</strong> (“Plataforma Academia Lendária”), você concorda com estes Termos de Uso. Caso não concorde, recomendamos não utilizar os serviços disponibilizados.</p>

            <h2>2. Alterações e Atualizações</h2>
            <p>A <strong>Academia Lendária</strong> pode atualizar estes Termos de Uso a qualquer momento, mediante publicação da versão revisada neste mesmo endereço. É de responsabilidade do usuário revisar periodicamente as alterações.</p>

            <h2>3. Uso da Plataforma</h2>
            <p>O usuário compromete-se a utilizar os recursos e conteúdos de forma ética, legal e em conformidade com as finalidades propostas pela plataforma, abstendo-se de práticas fraudulentas, compartilhamento não autorizado de materiais, ou qualquer ação que viole direitos de terceiros.</p>

            <h2>4. Cadastro e Responsabilidade</h2>
            <p>Para acessar determinados conteúdos e recursos, o usuário poderá precisar criar uma conta pessoal. O cadastro deve conter informações verídicas, atualizadas e completas. O usuário é totalmente responsável pela segurança de suas credenciais de acesso.</p>

            <h2>5. Propriedade Intelectual</h2>
            <p>Todos os textos, vídeos, aulas, scripts, imagens, logotipos e demais materiais disponíveis na plataforma são propriedade intelectual da <strong>Academia Lendária</strong> ou de parceiros e não podem ser reproduzidos, distribuídos ou utilizados sem autorização expressa.</p>

            <h2>6. Planos, Pagamentos e Reembolsos</h2>
            <p>Os valores e condições dos planos de assinatura estão descritos nas respectivas páginas comerciais. O usuário deve revisar cuidadosamente tais informações antes da contratação. O prazo para solicitação de reembolso segue a política de garantia anunciada, observadas as regras legais aplicáveis.</p>

            <h2>7. Limitação de Responsabilidade</h2>
            <p>A plataforma é disponibilizada “no estado em que se encontra”, sem garantias de disponibilidade ou resultados garantidos. A <strong>Academia Lendária</strong> não se responsabiliza por eventuais perdas, danos ou lucros cessantes decorrentes do uso indevido do serviço.</p>

            <h2>8. Privacidade e Dados Pessoais</h2>
            <p>O tratamento de dados pessoais segue as disposições da <strong>Política de Privacidade</strong> vigente. Recomendamos a leitura do documento completo para compreender como as informações são coletadas, armazenadas e utilizadas.</p>

            <h2>9. Rescisão de Acesso</h2>
            <p>A <strong>Academia Lendária</strong> reserva-se o direito de suspender ou cancelar o acesso de usuários que violem estes Termos ou utilizem a plataforma de forma indevida.</p>

            <h2>10. Foro e Disposições Gerais</h2>
            <p>Estes Termos de Uso são regidos pelas leis brasileiras. Em caso de controvérsias, o foro eleito é o da comarca de São Paulo/SP, com renúncia expressa de qualquer outro, por mais privilegiado que seja.</p>

            <p>Para dúvidas sobre estes Termos de Uso, entre em contato com: <a href="mailto:contato@valoresdigitais.com">contato@valoresdigitais.com</a>.</p>
        </LegalPageLayout>
    );
};

export default TermsPage;
