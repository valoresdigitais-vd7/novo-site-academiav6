import React, { useState, useRef } from 'react';
import type { Product, Testimonial } from '../types';
import { PRODUCTS, TESTIMONIALS, FAQ_DATA } from '../constants';
import { CheckCircleIcon, ZapIcon, ShieldIcon, ChevronDownIcon, UsersIcon, TargetIcon, HeartIcon } from '../components/icons';

// --- SHARED COMPONENTS ---

// InlineCheckoutForm Component
interface InlineCheckoutFormProps {
    productName: string;
}
const InlineCheckoutForm: React.FC<InlineCheckoutFormProps> = ({ productName }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        // Simulate API call for lead generation
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (email && email.includes('@')) {
            setStatus('success');
            setMessage(`Inscrição iniciada! Redirecionando para o checkout do ${productName}...`);
        } else {
            setStatus('error');
            setMessage('Por favor, insira um email corporativo ou válido.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email comercial"
                    required
                    className="flex-grow px-4 py-3 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Processando...' : 'Desbloquear Acesso'}
                </button>
            </div>
            {message && (
                <p className={`mt-3 text-sm ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {message}
                </p>
            )}
        </form>
    );
};

// --- BLOCK 1: CAPTURA E PROPOSTA DE VALOR ---

const HeroSection: React.FC = () => (
    <section id="hero" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 items-center">
                <div className="text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                        Crie e Venda Agentes de IA de <span className="text-primary dark:text-primary-light">R$ 15k a R$ 100k</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                        Para quem vê padrões onde outros veem caos. A formação definitiva com ferramentas proprietárias, comunidade de elite e cases validados no mercado brasileiro.
                    </p>
                    <div className="max-w-xl mx-auto">
                        <InlineCheckoutForm productName="Academia Lendária" />
                    </div>
                    <p className="mt-3 text-xs text-neutral-500">Junte-se à elite da Inteligência Artificial. Vagas limitadas.</p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-3xl aspect-video rounded-lg shadow-2xl overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1&loop=1&playlist=LXb3EKWsInQ&controls=0&showinfo=0&rel=0"
                            title="Apresentação Academia Lendária"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 2: PROBLEMATIZAÇÃO E SOLUÇÃO ---

const ProblemSolutionSection: React.FC = () => (
    <section id="problem-solution" className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-white dark:bg-neutral-800/50 p-8 rounded-lg border border-neutral-200 dark:border-neutral-700">
                    <h2 className="text-3xl font-bold tracking-tight text-red-600 dark:text-red-400">O Risco da Obsolescência Profissional</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                        Você sente que a IA está avançando rápido demais e você está ficando para trás? O mercado está saturado de "especialistas" superficiais e clientes que não valorizam seu trabalho.
                    </p>
                    <ul className="mt-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                        <li className="flex items-start"><span className="text-red-500 mr-2 mt-1">❌</span><span>Conhecimento fragmentado e sem aplicação prática.</span></li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 mt-1">❌</span><span>Dificuldade extrema em precificar projetos High-Ticket.</span></li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 mt-1">❌</span><span>Isolamento profissional e falta de networking qualificado.</span></li>
                    </ul>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-lg border border-primary/20">
                    <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-primary-light">A Autoridade da Academia Lendária</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                        Não vendemos apenas "cursos". Entregamos um ecossistema completo para você criar, vender e escalar agências de IA lucrativas, com ferramentas prontas para uso imediato.
                    </p>
                     <ul className="mt-6 space-y-2 text-neutral-600 dark:text-neutral-300">
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✅</span><span>Domine a criação de Agentes de IA Autônomos.</span></li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✅</span><span>Acesse contratos, propostas e scripts de vendas validados.</span></li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 mt-1">✅</span><span>Conecte-se com os maiores players do mercado brasileiro.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 3: QUALIFICAÇÃO E BENEFÍCIOS ---

const TargetAudienceSection: React.FC = () => (
    <section id="target-audience" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Para Quem é a Academia Lendária?</h2>
                <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Se você possui a mentalidade de crescimento acelerado, este é o seu lugar.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-neutral-100 dark:bg-neutral-800/50 p-6 rounded-lg shadow-md text-center">
                    <UsersIcon className="h-10 w-10 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-lg">Consultores & Experts</h3>
                    <p className="text-sm text-neutral-500 mt-1">Que desejam adicionar serviços de IA High-Ticket ao seu portfólio atual.</p>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800/50 p-6 rounded-lg shadow-md text-center">
                    <ZapIcon className="h-10 w-10 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-lg">Agências Digitais</h3>
                    <p className="text-sm text-neutral-500 mt-1">Que precisam automatizar operações internas ou vender inovação para clientes.</p>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800/50 p-6 rounded-lg shadow-md text-center">
                    <TargetIcon className="h-10 w-10 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-lg">Empreendedores CLT</h3>
                    <p className="text-sm text-neutral-500 mt-1">Buscando uma nova fonte de renda escalável para transição de carreira.</p>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-800/50 p-6 rounded-lg shadow-md text-center">
                     <HeartIcon className="h-10 w-10 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold text-lg">Infoprodutores</h3>
                    <p className="text-sm text-neutral-500 mt-1">Que querem usar IA para escalar vendas, suporte e entrega de conteúdo.</p>
                </div>
            </div>
        </div>
    </section>
);

const BenefitsSection: React.FC = () => {
    const benefits = [
        {
            icon: <ZapIcon className="h-8 w-8 text-primary" />,
            title: 'Implementação Imediata',
            description: 'Ferramentas e agentes pré-configurados. Copie, cole e comece a vender em tempo recorde.'
        },
        {
            icon: <ShieldIcon className="h-8 w-8 text-primary" />,
            title: 'Metodologia Validada',
            description: 'Processos de vendas testados que transformam curiosos em clientes de R$ 10k+.'
        },
        {
            icon: <CheckCircleIcon className="h-8 w-8 text-primary" />,
            title: 'Networking de Elite',
            description: 'Troque experiências em uma comunidade ativa com os maiores nomes da IA no Brasil.'
        }
    ];
    return (
        <section id="benefits" className="py-20 bg-neutral-200 dark:bg-neutral-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12">
                     {benefits.map(benefit => (
                         <div key={benefit.title} className="flex items-start">
                             <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">{benefit.icon}</div>
                             <div className="ml-4">
                                 <h3 className="text-lg font-semibold">{benefit.title}</h3>
                                 <p className="mt-1 text-neutral-600 dark:text-neutral-400">{benefit.description}</p>
                             </div>
                         </div>
                     ))}
                </div>
            </div>
        </section>
    );
};

// --- BLOCK 4: PROVA SOCIAL E AUTORIDADE ---

const TestimonialsSection: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    // Overriding imported constant for specific context
    const customTestimonials: Testimonial[] = [
        { quote: "Fechei meu primeiro contrato de R$ 15k em apenas 10 dias aplicando o método.", author: "Carlos M.", role: "Consultor de IA", avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg" },
        { quote: "A comunidade é surreal. O networking aqui vale mais que qualquer MBA.", author: "Fernanda L.", role: "Dona de Agência", avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg" },
        { quote: "Eu não sabia nada de código. Hoje crio agentes complexos para grandes empresas.", author: "Ricardo S.", role: "Ex-Advogado", avatarUrl: "https://randomuser.me/api/portraits/men/86.jpg" },
        { quote: "As ferramentas prontas me economizaram meses de desenvolvimento.", author: "Juliana P.", role: "Freelancer", avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg" },
    ];

    return (
        <section id="testimonials" className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Resultados Reais de Alunos Lendários</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Não é teoria. É campo de batalha vencido.</p>
                </div>
                <div ref={scrollContainer} className="mt-12 flex space-x-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {customTestimonials.map((testimonial, index) => (
                        <div key={index} className="snap-center flex-shrink-0 w-80 md:w-96 bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
                            <p className="text-neutral-600 dark:text-neutral-300 italic">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-4">
                                <img src={testimonial.avatarUrl} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover" />
                                <div className="ml-4">
                                    <p className="font-semibold">{testimonial.author}</p>
                                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AuthoritySection: React.FC = () => (
    <section id="authority" className="py-16 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-lg font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">Tecnologias e Parceiros</h3>
            <div className="mt-8 flex justify-center items-center gap-x-8 sm:gap-x-12 flex-wrap">
                <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 my-2">OPENAI</div>
                <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 my-2">ANTHROPIC</div>
                <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 my-2">N8N</div>
                <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 my-2">LANGCHAIN</div>
                <div className="text-2xl font-bold text-neutral-400 dark:text-neutral-500 my-2">MAKE</div>
            </div>
        </div>
    </section>
);

const FounderStorySection: React.FC = () => (
    <section id="founder-story" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
                <div className="md:col-span-1">
                     <img src="https://picsum.photos/id/1005/400/400" alt="Fundador da Academia Lendária" className="rounded-full shadow-lg aspect-square object-cover mx-auto" />
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold tracking-tight">De Curioso a Referência Nacional</h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                        "Eu via profissionais brilhantes perdidos no meio do hype da IA, sem saber como transformar tecnologia em dinheiro no bolso. Criei a Academia Lendária para ser o mapa que eu gostaria de ter tido. Aqui, unimos a vanguarda técnica com estratégias de negócios agressivas para quem não aceita ser mediano."
                    </p>
                    <p className="mt-4 font-semibold text-neutral-800 dark:text-neutral-100">O Fundador, Academia Lendária</p>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 5: A OFERTA DETALHADA ---

const HowItWorksSection: React.FC = () => {
    const steps = [
        { number: '01', title: 'Imersão Estratégica', description: 'Entenda os fundamentos da IA generativa e identifique oportunidades de alto valor no mercado.' },
        { number: '02', title: 'Construção de Agentes', description: 'Aprenda a usar nossas ferramentas proprietárias para criar soluções complexas sem precisar ser um programador sênior.' },
        { number: '03', title: 'Venda e Escala', description: 'Aplique nosso script de vendas validado para fechar contratos de R$ 5k a R$ 30k recorrentes.' }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-neutral-200 dark:bg-neutral-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">O Caminho para a Excelência</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Três pilares para construir sua agência de IA.</p>
                </div>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {steps.map(step => (
                        <div key={step.number} className="text-center p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-md">
                           <div className="text-5xl font-extrabold text-primary dark:text-primary-light mb-4">{step.number}</div>
                           <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                           <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className={`border rounded-lg p-6 flex flex-col ${product.isFeatured ? 'border-primary dark:border-primary-light ring-2 ring-primary dark:ring-primary-light' : 'border-neutral-300 dark:border-neutral-700'}`}>
        {product.isFeatured && <div className="text-center mb-4"><span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">MAIS POPULAR</span></div>}
        <h3 className="text-2xl font-bold text-center">{product.name}</h3>
        <p className="text-4xl font-extrabold text-center my-4">{product.price}</p>
        <ul className="space-y-2 mb-6 text-neutral-600 dark:text-neutral-400">
            {product.features.map(feature => (
                <li key={feature} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`mt-auto w-full font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 ${product.isFeatured ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600'}`}>
            Garanta Sua Vaga
        </button>
    </div>
);

const InvestmentSection: React.FC = () => {
    // Overriding imported constant locally to ensure correct Offer Copy matches the Brief
    const customProducts: Product[] = [
        {
            id: 'basic',
            name: 'Imersão IA',
            price: 'R$ 997',
            features: ['Acesso ao Curso Base', 'Comunidade Geral', 'Certificado Digital', 'Suporte por Email'],
            isFeatured: false
        },
        {
            id: 'pro',
            name: 'Academia Lendária',
            price: 'R$ 1.888',
            features: ['Tudo do Plano Básico', 'Ferramentas Proprietárias', 'Scripts de Vendas High-Ticket', 'Mentoria Mensal ao Vivo', 'Acesso a Cases Reais'],
            isFeatured: true
        },
        {
            id: 'enterprise',
            name: 'Mentoria Black',
            price: 'R$ 5.000',
            features: ['Acesso Vitalício', 'Acompanhamento Individual', 'Reuniões de Mastermind', 'Agentes White-label', 'Network VIP'],
            isFeatured: false
        }
    ];

    return (
        <section id="investment" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Investimento no Seu Futuro</h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Escolha o plano ideal para escalar seu negócio com Inteligência Artificial.</p>
                </div>
                <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {customProducts.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </section>
    );
};


// --- BLOCK 6: FECHAMENTO E REVERSÃO DE RISCO ---

const GuaranteeSection: React.FC = () => (
     <section id="guarantee" className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 border-2 border-dashed border-primary dark:border-primary-light rounded-lg p-8 text-center">
                <ShieldIcon className="h-16 w-16 mx-auto text-primary mb-4" />
                <h2 className="text-3xl font-bold tracking-tight">Garantia Blindada de 30 Dias</h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Temos certeza absoluta que a Academia Lendária vai transformar sua carreira. Por isso, oferecemos 30 dias de garantia incondicional. Acesse, assista às aulas, use as ferramentas. Se não achar que valeu cada centavo, devolvemos 100% do seu investimento. O risco é todo nosso.
                </p>
            </div>
        </div>
    </section>
);

const CTASection: React.FC = () => (
    <section id="cta" className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white">Você Está a Um Passo do Próximo Nível</h2>
            <p className="mt-2 text-lg text-cyan-100 max-w-2xl mx-auto">Não deixe a revolução da IA acontecer sem você. Domine a tecnologia, aumente seu faturamento e garanta seu lugar no futuro.</p>
            <a href="#hero" className="mt-8 inline-block bg-white text-primary font-bold py-3 px-8 rounded-md transition-transform transform hover:scale-105 shadow-lg">
                Quero Ser Lendário
            </a>
        </div>
    </section>
);

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Overriding imported constant locally
    const customFAQ = [
        { question: "Preciso saber programar para participar?", answer: "Não. Ensinamos desde os fundamentos até o uso de ferramentas low-code/no-code que permitem criar agentes complexos sem digitar uma linha de código tradicional." },
        { question: "Quanto tempo preciso dedicar por semana?", answer: "O método foi desenhado para quem tem rotina corrida. Com 4 a 6 horas por semana você já consegue aplicar o conteúdo e ver resultados." },
        { question: "O que acontece depois que eu compro?", answer: "Você recebe acesso imediato à plataforma de aulas, ao link da nossa comunidade exclusiva e ao pacote de ferramentas iniciais." },
        { question: "Serve para quem está começando do zero?", answer: "Sim. A imersão inicial nivela o conhecimento de todos, garantindo que mesmo iniciantes consigam acompanhar e evoluir." },
        { question: "Como funciona o suporte?", answer: "Temos suporte dedicado via email e um canal exclusivo dentro da comunidade para tirar dúvidas técnicas e de negócios." }
    ];

    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Perguntas Frequentes</h2>
                     <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">Tire suas dúvidas e decida com segurança.</p>
                </div>
                <div className="space-y-4">
                    {customFAQ.map((item, index) => (
                        <div key={index} className="bg-neutral-100 dark:bg-neutral-800/50 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="text-md font-medium text-neutral-800 dark:text-neutral-100">{item.question}</span>
                                <ChevronDownIcon
                                    className={`h-5 w-5 text-neutral-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <div className="px-5 pb-5">
                                    <p className="text-neutral-600 dark:text-neutral-300">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- FINAL PAGE COMPONENT ---

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Bloco 1: Captura e Proposta de Valor */}
      <HeroSection />
      
      {/* Bloco 2: Problematização e Solução */}
      <ProblemSolutionSection />
      
      {/* Bloco 3: Qualificação e Benefícios */}
      <TargetAudienceSection />
      <BenefitsSection />
      
      {/* Bloco 4: Prova Social e Autoridade */}
      <TestimonialsSection />
      <AuthoritySection />
      <FounderStorySection />
      
      {/* Bloco 5: A Oferta Detalhada */}
      <HowItWorksSection />
      <InvestmentSection />
      
      {/* Bloco 6: Fechamento e Reversão de Risco */}
      <GuaranteeSection />
      <CTASection />
      <FAQSection />
    </>
  );
};

export default LandingPage;
