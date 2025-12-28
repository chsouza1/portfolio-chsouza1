import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Smartphone, Database, Terminal } from 'lucide-react';

const projects = [
  {
    title: "Arte com Carinho",
    desc: "E-commerce Full Stack completo. Backend robusto em Java com Spring Boot e Frontend moderno em Next.js/React.",
    tags: ["Java", "Spring Boot", "Next.js", "PostgreSQL"],
    color: "from-pink-500 to-rose-500",
    link: "https://www.artecomcarinhobysi.com.br"
  },
  {
    title: "CineCollection Manager",
    desc: "App Android nativo para gestão de coleções de filmes. Utiliza SQLite para persistência local e RecyclerView para listagens otimizadas.",
    tags: ["Android", "Java", "SQLite", "Mobile"],
    color: "from-blue-600 to-cyan-400",
    link: "https://github.com/chsouza1/GerenciadorDeColecaoDeFilmes"
  },
  {
    title: "Order Management Web",
    desc: "Painel administrativo React para gestão de pedidos em tempo real. Interface moderna para controle de status, fluxo de vendas e visualização de dados.",
    tags: ["React", "SPA", "Axios", "Dashboard"],
    color: "from-orange-500 to-amber-500",
    link: "https://github.com/chsouza1/order-management-web"
  },
  {
    title: "Order Management API",
    desc: "Backend robusto para gestão de pedidos. API RESTful com regras de negócio complexas, validações de segurança e acesso a dados.",
    tags: ["Java", "Spring Boot", "JPA / Hibernate", "API REST"],
    color: "from-violet-600 to-indigo-600",
    link: "https://github.com/chsouza1/order-management-api"
  },
  {
    title: "Sistema de Gestão de RH",
    desc: "Software corporativo para Recursos Humanos. Controle de cadastro de funcionários, departamentos e hierarquia organizacional.",
    tags: ["Java", "POO", "SQL", "CRUD"],
    color: "from-red-500 to-pink-600",
    link: "https://github.com/chsouza1/Sistema-de-Gerenciamento-de-RH"
  },
];

const techs = [
  { icon: <Code2 size={24} />, name: "Frontend", desc: "React, Next.js, Tailwind" },
  { icon: <Database size={24} />, name: "Backend", desc: "Java, Spring Boot, Node, Java EE" },
  { icon: <Smartphone size={24} />, name: "Mobile", desc: "Android Studio, Kotlin" },
  { icon: <Terminal size={24} />, name: "DevOps", desc: "Linux, Docker, Git" },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      </div>

      <nav className="fixed w-full z-50 backdrop-blur-xl bg-slate-950/50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
          >
            Portfólio Carlos Henrique
          </motion.span>
          <div className="flex gap-6">
            <a href="https://github.com/chsouza1" target="_blank" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/carloshenriquedesouzagomes" target="_blank" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 inline-block">
            Disponível para novos projetos
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Transformando código em <br/>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Soluções Reais
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Estudante de Análise e Desenvolvimento de Sistemas focado em Backend.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              <a href="https://github.com/chsouza1?tab=repositories" target="_blank" rel="noopener noreferrer">Ver Projetos</a>
            </button>
            <button className="px-8 py-4 bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-medium rounded-xl transition-all">
              <a href="mailto:carloshenrique.souza88@hotmail.com" target="_blank">Entrar em Contato</a>
            </button>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Minha Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all group"
            >
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-slate-400 text-sm">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-slate-950 border border-white/10 overflow-hidden"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-100 transition-opacity`}>
                      <Code2 className="text-white" size={24} />
                    </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-500 border-t border-white/5 bg-slate-950">
        <p>© 2025 Desenvolvido por MIM: <a href="https://linkedin.com/in/carloshenriquedesouzagomes" target="_blank" rel="noopener noreferrer">Carlos Henrique</a></p>
      </footer>
    </div>
  );
}

export default App;