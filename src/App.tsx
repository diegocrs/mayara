/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Check, Clock, Target, Zap, Heart, ArrowRight, ShieldCheck } from "lucide-react";
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "./components/ui/image-comparison";

const Logo = () => (
  <div className="flex items-center justify-center lg:justify-start gap-1 font-display font-extrabold text-xl tracking-tighter">
    <span className="text-brand-dark">MAYARA</span>
    <span className="text-brand-dark/70 font-light italic">SANTOS</span>
  </div>
);

const Button = ({ children, className = "", variant = "primary", onClick, href }: { children: React.ReactNode, className?: string, variant?: "primary" | "secondary", onClick?: () => void, href?: string }) => {
  const baseStyles = "w-full py-4 px-8 rounded-lg font-display font-bold text-lg transition-all duration-300 active:scale-95 shadow-lg flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-black",
    secondary: "bg-brand-green text-white hover:bg-brand-green/90",
  };

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-brand-green selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 px-6 max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 text-center lg:text-left flex flex-col"
        >
          <Logo />
          
          <h1 className="mt-12 text-[33px] lg:text-[50px] font-extrabold leading-[1.1] tracking-tight text-brand-dark">
            <span className="block">Eu transformei</span>
            <span className="text-brand-green block">minha vida.</span>
            <span className="block">Agora é a sua vez.</span>
          </h1>

          {/* Photo for Mobile - Appears right after headline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 lg:hidden relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative max-w-sm mx-auto">
              <img 
                src="https://i.imgur.com/0Mw0f1V.png" 
                alt="Mayara Santos Training" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
            </div>
          </motion.div>

          <div className="order-last lg:order-none">
            <p className="mt-8 text-lg text-brand-dark/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Treinos focados em abdômen e cardio, sem complicação e sem desculpas. 
              Um método simples para quem quer resultado de verdade.
            </p>
            <p className="mt-8 text-lg font-medium text-brand-dark">Se eu consegui, você também consegue.</p>
            <p className="mt-2 text-lg font-bold text-brand-dark">Comece hoje.</p>
            
            <div className="mt-10 max-w-sm mx-auto lg:mx-0">
              <Button href="https://pay.herospark.com/desafio-do-abs-e-cardio-by-mayara-508365">
                Quero transformar agora
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Photo for Desktop - Appears on the right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 lg:mt-0 relative hidden lg:block"
        >
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative max-w-md mx-auto">
            <img 
              src="https://i.imgur.com/0Mw0f1V.png" 
              alt="Mayara Santos Training" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-brand-dark text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-center mb-16"
          >
            Cansada de tentar sem resultado?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {[
              { title: "Sem tempo", desc: "Você começa, para, recomeça — e o resultado nunca aparece. A rotina engole tudo.", icon: Clock },
              { title: "Sem foco", desc: "Treinos longos, complicados e genéricos que não foram feitos para o seu objetivo.", icon: Target },
              { title: "Sem método", desc: "Você faz de tudo um pouco e não evolui. Falta uma progressão clara e estruturada.", icon: Zap },
              { title: "Sem motivação", desc: "Você começa animada e em duas semanas desiste. O problema não é você — é a abordagem.", icon: Heart },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 border-l-2 border-brand-green/30 pl-6"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="pt-24 pb-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-4">
              Resultados Reais
            </h2>
            <p className="text-lg text-brand-dark/60 mb-12">
              Veja a transformação de quem já aplicou o método.
            </p>
            
            <div className="max-w-md mx-auto">
              <ImageComparison className="aspect-[4/5] w-full rounded-3xl shadow-2xl border-4 border-white" enableHover>
                <ImageComparisonImage
                  src="https://i.imgur.com/f6rztSV.jpeg?q=80&w=1000&auto=format&fit=crop"
                  className="brightness-90"
                  alt="Depois"
                  position="left"
                />
                <ImageComparisonImage
                  src="https://i.imgur.com/D1QXFXR.jpeg?q=80&w=1000&auto=format&fit=crop"
                  alt="Antes"
                  position="right"
                />
                <ImageComparisonSlider className="w-1 bg-brand-green">
                  <div className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green shadow-xl flex items-center justify-center border-2 border-white">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-4 bg-white rounded-full"></div>
                      <div className="w-1 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </ImageComparisonSlider>
              </ImageComparison>
              <div className="mt-6 flex justify-between text-sm font-bold text-brand-dark/40 uppercase tracking-widest">
                <span>Depois</span>
                <span>Antes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Method Section */}
      <section className="pt-12 pb-24 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-green mb-8 leading-tight">
            O método que funciona <br /> de verdade
          </h2>
          <p className="text-lg text-brand-dark/70 leading-relaxed">
            Após anos testando, errando e aprendendo, desenvolvi um programa direto ao ponto: 
            treinos de abdômen e cardio que encaixam na sua rotina e entregam resultados visíveis. 
            Sem enrolação.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <img 
              src="https://imgur.com/TGs7lei" 
              alt="Training results" 
              className="rounded-3xl shadow-xl mx-auto max-w-full lg:max-w-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-brand-green text-center mb-16"
          >
            4 módulos de transformação
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Abdômen em Foco", desc: "Exercícios progressivos para definir e fortalecer o abdômen. do iniciante ao avançado." },
              { title: "Cardio que Queima", desc: "Protocolos de cardio eficientes para acelerar o metabolismo e eliminar gordura" },
              { title: "Treinos combinados", desc: "A fusão perfeita entre abdômen e cardio para maximizar resultados em menos tempo." },
              { title: "Progressão", desc: "Como manter o ritmo, evoluir semana a semana e não cair na armadilha do abandono." },
            ].map((module, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-brand-dark mb-4">{module.title}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://imgur.com/TGs7lei" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-10">
              Esse programa é pra você:
            </h2>
            <ul className="space-y-6">
              {[
                "Você quer definir o abdômen e não sabe por onde começar.",
                "Você tem pouco tempo e precisa de treinos curtos e eficientes.",
                "Você já tentou outras coisas e não viu resultado — e está disposto a fazer diferente.",
                "Você quer mais disposição, autoestima e leveza no dia a dia.",
                "Você quer um método simples, direto e que possa seguir de onde estiver."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 bg-brand-green/10 p-1 rounded-full">
                    <Check className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-brand-dark/80 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-16 lg:mt-0 hidden lg:block"
          >
            <img 
              src="https://imgur.com/TGs7lei" 
              alt="Workout" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-green mb-4">
            Invista em você hoje!
          </h2>
          <p className="text-lg text-brand-dark/70 mb-12">
            Acesso completo aos 4 módulos, treinos em vídeo e suporte, <br className="hidden md:block" />
            por um único valor.
          </p>

          <div className="mb-10">
            <p className="text-brand-dark/40 line-through text-xl mb-2">de R$ 97</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-brand-green">R$</span>
              <span className="text-7xl lg:text-8xl font-black text-brand-green tracking-tighter">29,90</span>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <Button 
              href="https://pay.herospark.com/desafio-do-abs-e-cardio-by-mayara-508365"
              className="mb-6 group"
            >
              Garantir meu acesso
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-brand-dark/60 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
              <span>Garantia de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro.</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100 text-center">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="mt-8 text-sm text-brand-dark/40">
          © {new Date().getFullYear()} Mayara Santos. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
