import React from 'react';
import { ArrowRight, CheckCircle, Star, Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* HEADER / NAVIGATION */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-bold text-xl tracking-tight">LogoBrand</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Funcionalidades</a>
              <a href="#testimonials" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Depoimentos</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Preços</a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                Começar Agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4">
             <a href="#features" className="block text-slate-600 font-medium">Funcionalidades</a>
             <a href="#testimonials" className="block text-slate-600 font-medium">Depoimentos</a>
             <a href="#pricing" className="block text-slate-600 font-medium">Preços</a>
             <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-bold">
                Começar Agora
             </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Novidade: Integração 2.0 disponível
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            Transforme sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">produtividade</span> <br className="hidden md:block"/>
            com inteligência real.
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            Nossa plataforma centraliza seus fluxos de trabalho, elimina tarefas repetitivas e conecta seu time em um único lugar seguro e eficiente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20">
              Testar Gratuitamente
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              Ver Demonstração
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>14 dias grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Cancelamento fácil</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">Recursos Poderosos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tudo o que você precisa para escalar</h3>
            <p className="text-lg text-slate-600">
              Ferramentas desenhadas para times modernos que precisam de velocidade sem perder a qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <Star size={24} fill="currentColor" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Feature Incrível {item}</h4>
                <p className="text-slate-600 leading-relaxed">
                  Uma descrição detalhada sobre como esta funcionalidade ajuda o usuário a resolver um problema específico de forma rápida.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Pronto para começar sua jornada?</h2>
          <p className="text-xl text-slate-600 mb-10">
            Junte-se a mais de 10.000 empresas que já transformaram a maneira de trabalhar.
          </p>
          <button className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg">
            Criar Conta Gratuita
          </button>
        </div>
      </section>
    </div>
  );
}
