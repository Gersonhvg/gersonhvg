import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Download, ChevronRight, Menu, X, ExternalLink, 
  Mail, Code2, Database, Cloud, Server, Calendar, MapPin, 
  Book, Award, Send, Phone, Briefcase, GraduationCap,
  GitBranch, Users, Zap, Shield, Coffee, Target
} from 'lucide-react';

const Portfolio2 = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [skillsLoaded, setSkillsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const fullText = 'Desarrollador Backend';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            
            if (section === 'skills' && !skillsLoaded) {
              setSkillsLoaded(true);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [skillsLoaded]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  const skills = {
    backend: {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: 'Java', level: 85 },
        { name: 'Kotlin', level: 75 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Node.js', level: 70 }
      ]
    },
    database: {
      title: 'Bases de Datos',
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'Redis', level: 65 }
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      items: [
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 60 }
      ]
    }
  };

  const projects = [
    {
      title: 'API REST E-commerce',
      description: 'Sistema completo de gestión de productos, usuarios y pedidos con autenticación JWT y roles.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
      features: ['Autenticación y autorización', 'CRUD completo', 'Paginación y filtros', 'Tests unitarios'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Microservicio de Notificaciones',
      description: 'Sistema de mensajería en tiempo real con WebSockets y colas de mensajes.',
      image: '/api/placeholder/400/250',
      technologies: ['Kotlin', 'RabbitMQ', 'WebSocket', 'Redis', 'MongoDB'],
      features: ['Mensajería en tiempo real', 'Colas de mensajes', 'Notificaciones push', 'Escalabilidad horizontal'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Sistema de Autenticación OAuth',
      description: 'Implementación completa de OAuth 2.0 con soporte para múltiples proveedores.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express', 'MongoDB', 'OAuth 2.0', 'JWT'],
      features: ['Login social', 'Refresh tokens', 'Rate limiting', 'Seguridad avanzada'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Bachiller en Computación y Sistemas',
      institution: 'Universidad Nacional',
      type: 'education'
    },
    {
      year: '2023',
      title: 'Certificación AWS Cloud Practitioner',
      institution: 'Amazon Web Services',
      type: 'certification'
    },
    {
      year: '2023',
      title: 'Curso Spring Boot Avanzado',
      institution: 'Platzi',
      type: 'course'
    },
    {
      year: '2022',
      title: 'Desarrollo Full Stack',
      institution: 'CoderHouse',
      type: 'course'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí iría la lógica de envío del formulario
    alert('¡Mensaje enviado con éxito!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header Navigation */}
      <header className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              &lt;DevBackend /&gt;
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-blue-500 ${
                    activeSection === item.id ? 'text-blue-500 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 rounded transition-all duration-300 ${
                    darkMode ? 'hover:bg-blue-500/20' : 'hover:bg-blue-500/10'
                  } ${activeSection === item.id ? 'text-blue-500 font-semibold' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`mt-4 p-2 rounded-lg transition-all duration-300 w-full ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5 inline mr-2" /> : <Moon className="w-5 h-5 inline mr-2" />}
                {darkMode ? 'Tema Claro' : 'Tema Oscuro'}
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                  {typedText}
                </span>
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Apasionado por crear soluciones escalables y eficientes. 
                Especializado en Java, Kotlin y arquitecturas modernas de backend.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Ver Proyectos <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2">
                  <Download className="w-5 h-5" /> Descargar CV
                </button>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com" className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`} title="GitHub">
                  <Code2 className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`} title="LinkedIn">
                  <Users className="w-6 h-6" />
                </a>
                <a href="mailto:email@example.com" className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`} title="Email">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className={`relative w-full h-full rounded-full overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-green-500/20 flex items-center justify-center">
                    <Code2 className="w-32 h-32 text-blue-500/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-blue-500" />
                  Mi Historia
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Soy un desarrollador backend apasionado por la tecnología y la innovación. 
                  Recientemente graduado como Bachiller en Computación y Sistemas, con 24 años 
                  y muchas ganas de crecer profesionalmente.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Mi enfoque está en crear soluciones robustas y escalables, siempre buscando 
                  las mejores prácticas y manteniéndome actualizado con las últimas tecnologías. 
                  Me motiva trabajar en equipo y enfrentar nuevos desafíos técnicos.
                </p>
              </div>

              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="w-8 h-8 text-green-500" />
                  Objetivos Profesionales
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Desarrollar aplicaciones que impacten positivamente en miles de usuarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Especializarme en arquitecturas de microservicios y cloud computing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Contribuir activamente a proyectos open source</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Book className="w-8 h-8 text-purple-500" />
                  Educación y Certificaciones
                </h3>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          item.type === 'education' ? 'bg-blue-500' : 
                          item.type === 'certification' ? 'bg-green-500' : 'bg-purple-500'
                        }`}>
                          {item.type === 'education' ? <GraduationCap className="w-6 h-6 text-white" /> :
                           item.type === 'certification' ? <Award className="w-6 h-6 text-white" /> :
                           <Book className="w-6 h-6 text-white" />}
                        </div>
                        {index < timeline.length - 1 && (
                          <div className={`w-0.5 h-20 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <span className="text-sm text-gray-500">{item.year}</span>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-gray-400">{item.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Coffee className="w-8 h-8 text-orange-500" />
                  Intereses Personales
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Open Source', 'Cloud Computing', 'DevOps', 'Machine Learning', 'Blockchain', 'Ciberseguridad'].map((interest) => (
                    <span key={interest} className={`px-4 py-2 rounded-full text-sm ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-black/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([key, category], categoryIndex) => (
              <div
                key={key}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className={`h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: skillsLoaded ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 100) + (index * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Otras Tecnologías</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['REST APIs', 'GraphQL', 'Microservicios', 'JWT', 'OAuth', 'WebSockets', 'RabbitMQ', 'Elasticsearch', 'Jenkins', 'Kubernetes'].map((tech) => (
                <span key={tech} className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} hover:scale-105 transition-transform duration-300`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500/20 to-green-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-24 h-24 text-blue-500/30" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.github} className="p-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all duration-300">
                      <GitBranch className="w-6 h-6 text-white" />
                    </a>
                    <a href={project.demo} className="p-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Características principales:
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 text-blue-400 border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="https://github.com" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Ver más proyectos <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-black/5 to-transparent">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-4">¡Trabajemos juntos!</h3>
                <p className="text-gray-400 mb-6">
                  Estoy buscando oportunidades para crecer como desarrollador backend. 
                  Si tienes un proyecto interesante o una posición disponible, 
                  ¡me encantaría saber de ti!
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:email@example.com" className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                    <span>email@example.com</span>
                  </a>
                  <a href="tel:+51999999999" className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                    <span>+51 999 999 999</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-5 h-5" />
                    <span>La Esperanza, La Libertad, Perú</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-4">Sígueme en mis redes:</p>
                  <div className="flex gap-4">
                    <a href="https://github.com" className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`}>
                      <Code2 className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com" className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`}>
                      <Users className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com" className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`}>
                      <Shield className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
                        : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
                        : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
                        : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none`}
                    placeholder="Tu mensaje..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Enviar Mensaje <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 DevBackend. Diseñado con <span className="text-red-500">❤️</span> y mucho <Coffee className="w-4 h-4 inline" />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio2;