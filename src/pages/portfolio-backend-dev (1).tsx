import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Download, ChevronRight, Menu, X, ExternalLink, 
  Mail, Code2, Database, Cloud, Server, Calendar, MapPin, 
  Book, Award, Send, Phone, Briefcase, GraduationCap,
  GitBranch, Users, Zap, Shield, Coffee, Target, Star,
  CheckCircle, Clock, Globe, Cpu, Lock, Activity,
  Terminal, Layers, Package, AlertCircle, ChevronLeft,
  ChevronDown, Heart, Share2, MessageSquare, Eye
} from 'lucide-react';

const Portfolio3 = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [skillsLoaded, setSkillsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('technical');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const fullText = 'Gerson Vasquez - Backend Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'blog', 'testimonials', 'contact'];
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
    { id: 'experience', label: 'Experiencia' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'blog', label: 'Blog' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'contact', label: 'Contacto' }
  ];

  const skills = {
    backend: {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Java', level: 90, experience: '3 años' },
        { name: 'Kotlin', level: 85, experience: '2 años' },
        { name: 'Spring Boot', level: 88, experience: '3 años' },
        { name: 'Node.js', level: 75, experience: '2 años' },
        { name: 'Python', level: 70, experience: '1 año' }
      ]
    },
    database: {
      title: 'Bases de Datos',
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'PostgreSQL', level: 90, experience: '3 años' },
        { name: 'MongoDB', level: 80, experience: '2 años' },
        { name: 'MySQL', level: 85, experience: '3 años' },
        { name: 'Redis', level: 75, experience: '2 años' },
        { name: 'Elasticsearch', level: 65, experience: '1 año' }
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Docker', level: 85, experience: '3 años' },
        { name: 'AWS', level: 75, experience: '2 años' },
        { name: 'Kubernetes', level: 70, experience: '1 año' },
        { name: 'CI/CD', level: 80, experience: '2 años' },
        { name: 'Terraform', level: 60, experience: '1 año' }
      ]
    },
    tools: {
      title: 'Herramientas & Otros',
      icon: <Package className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      items: [
        { name: 'Git', level: 95, experience: '4 años' },
        { name: 'Linux', level: 85, experience: '3 años' },
        { name: 'Nginx', level: 75, experience: '2 años' },
        { name: 'RabbitMQ', level: 70, experience: '2 años' },
        { name: 'GraphQL', level: 65, experience: '1 año' }
      ]
    }
  };

  const projects = [
    {
      id: 1,
      title: 'E-commerce Microservices Platform',
      category: 'Backend Architecture',
      description: 'Plataforma completa de e-commerce construida con arquitectura de microservicios, manejando más de 100k transacciones diarias.',
      longDescription: 'Sistema robusto de comercio electrónico diseñado para alta disponibilidad y escalabilidad. Implementé patrones de diseño avanzados como CQRS y Event Sourcing para manejar el flujo de pedidos.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes', 'RabbitMQ', 'Redis'],
      features: [
        'Arquitectura de microservicios con 12+ servicios independientes',
        'Sistema de autenticación OAuth 2.0 con JWT',
        'Implementación de Circuit Breaker para resiliencia',
        'Cache distribuido con Redis',
        'Mensajería asíncrona con RabbitMQ',
        'Monitoreo con Prometheus y Grafana'
      ],
      metrics: {
        performance: '< 200ms tiempo de respuesta',
        availability: '99.9% uptime',
        scale: '100k+ transacciones/día'
      },
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Real-time Analytics Engine',
      category: 'Data Processing',
      description: 'Motor de análisis en tiempo real para procesamiento de streams de datos con Apache Kafka y Spring Cloud Stream.',
      longDescription: 'Solución de procesamiento de datos en tiempo real que analiza millones de eventos por minuto, proporcionando insights instantáneos para la toma de decisiones.',
      image: '/api/placeholder/600/400',
      technologies: ['Kotlin', 'Apache Kafka', 'Spring Cloud', 'Elasticsearch', 'MongoDB', 'Docker'],
      features: [
        'Procesamiento de 1M+ eventos/minuto',
        'Pipeline de datos con Kafka Streams',
        'Almacenamiento en tiempo real en Elasticsearch',
        'Dashboard de métricas en tiempo real',
        'Alertas automáticas basadas en umbrales'
      ],
      metrics: {
        throughput: '1M+ eventos/min',
        latency: '< 50ms end-to-end',
        accuracy: '99.99% precisión'
      },
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Banking API Gateway',
      category: 'Financial Services',
      description: 'Gateway API seguro para servicios bancarios con implementación de PSD2 y strong customer authentication.',
      longDescription: 'API Gateway empresarial que maneja todas las interacciones entre aplicaciones móviles/web y los sistemas bancarios core, con énfasis en seguridad y compliance.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Spring Security', 'OAuth 2.0', 'PostgreSQL', 'Vault', 'Kong'],
      features: [
        'Autenticación multifactor (MFA)',
        'Encriptación end-to-end',
        'Rate limiting y throttling',
        'Auditoría completa de transacciones',
        'Compliance con PSD2 y GDPR'
      ],
      metrics: {
        security: 'Zero breaches',
        compliance: '100% PSD2',
        transactions: '50k+ diarias'
      },
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'IoT Device Management Platform',
      category: 'Internet of Things',
      description: 'Plataforma de gestión para dispositivos IoT con soporte para millones de dispositivos conectados simultáneamente.',
      longDescription: 'Sistema escalable para gestionar, monitorear y actualizar dispositivos IoT en tiempo real, con soporte para múltiples protocolos de comunicación.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'FastAPI', 'MQTT', 'TimescaleDB', 'Redis', 'Docker Swarm'],
      features: [
        'Soporte para MQTT, CoAP y HTTP',
        'Actualizaciones OTA automáticas',
        'Monitoreo en tiempo real',
        'Gestión de flotas de dispositivos',
        'Analytics predictivo'
      ],
      metrics: {
        devices: '1M+ conectados',
        uptime: '99.95%',
        latency: '< 100ms'
      },
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  const experience = [
    {
      period: '2023 - Presente',
      role: 'Backend Developer Senior',
      company: 'TechCorp Solutions',
      type: 'Tiempo Completo',
      description: 'Lideré el desarrollo de microservicios críticos para la plataforma principal de la empresa.',
      achievements: [
        'Reduje el tiempo de respuesta de APIs críticas en 60%',
        'Implementé arquitectura de microservicios que mejoró la escalabilidad',
        'Mentoré a 3 desarrolladores junior en mejores prácticas',
        'Lideré la migración a Kubernetes reduciendo costos en 40%'
      ],
      technologies: ['Java', 'Spring Boot', 'Kubernetes', 'PostgreSQL']
    },
    {
      period: '2022 - 2023',
      role: 'Backend Developer',
      company: 'StartupXYZ',
      type: 'Tiempo Completo',
      description: 'Desarrollé nuevas funcionalidades para la plataforma SaaS de la empresa.',
      achievements: [
        'Diseñé e implementé sistema de notificaciones en tiempo real',
        'Optimicé queries de base de datos mejorando performance en 80%',
        'Implementé CI/CD pipeline reduciendo tiempo de deployment'
      ],
      technologies: ['Node.js', 'MongoDB', 'Docker', 'AWS']
    },
    {
      period: '2021 - 2022',
      role: 'Junior Backend Developer',
      company: 'Digital Agency',
      type: 'Tiempo Completo',
      description: 'Participé en el desarrollo de APIs REST para diversos clientes.',
      achievements: [
        'Desarrollé 10+ APIs REST siguiendo mejores prácticas',
        'Implementé tests unitarios aumentando cobertura al 85%',
        'Participé en code reviews y pair programming'
      ],
      technologies: ['Python', 'Django', 'MySQL', 'Redis']
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Optimización de Microservicios: Mi experiencia reduciendo latencia en 60%',
      date: '15 Enero 2024',
      readTime: '8 min',
      category: 'Backend',
      excerpt: 'Cómo logré reducir significativamente la latencia en una arquitectura de microservicios mediante técnicas de caching y optimización de queries.',
      tags: ['Microservicios', 'Performance', 'Java'],
      views: 1542,
      likes: 89
    },
    {
      id: 2,
      title: 'De Monolito a Microservicios: Una guía práctica',
      date: '28 Diciembre 2023',
      readTime: '12 min',
      category: 'Arquitectura',
      excerpt: 'Lecciones aprendidas durante la migración de una aplicación monolítica a microservicios, incluyendo errores comunes y cómo evitarlos.',
      tags: ['Arquitectura', 'Microservicios', 'DevOps'],
      views: 2341,
      likes: 156
    },
    {
      id: 3,
      title: 'Implementando Event Sourcing con Spring Boot y Kafka',
      date: '10 Noviembre 2023',
      readTime: '15 min',
      category: 'Patterns',
      excerpt: 'Tutorial completo sobre cómo implementar Event Sourcing en aplicaciones Spring Boot utilizando Apache Kafka como event store.',
      tags: ['Event Sourcing', 'Kafka', 'Spring Boot'],
      views: 987,
      likes: 67
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'Tech Lead en TechCorp',
      image: '/api/placeholder/80/80',
      text: 'Gerson es un desarrollador excepcional. Su capacidad para resolver problemas complejos y su dedicación al código limpio lo convierten en un asset invaluable para cualquier equipo.',
      rating: 5
    },
    {
      name: 'Ana García',
      role: 'Product Manager en StartupXYZ',
      image: '/api/placeholder/80/80',
      text: 'Trabajar con Gerson fue una experiencia fantástica. Siempre entrega a tiempo y su código es de la más alta calidad. Además, es un excelente compañero de equipo.',
      rating: 5
    },
    {
      name: 'Miguel Torres',
      role: 'CTO en Digital Agency',
      image: '/api/placeholder/80/80',
      text: 'La proactividad y el profesionalismo de Gerson son admirables. Siempre está dispuesto a aprender nuevas tecnologías y compartir su conocimiento con el equipo.',
      rating: 5
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-2023-XXX',
      icon: <Award className="w-8 h-8" />
    },
    {
      name: 'Oracle Certified Java Programmer',
      issuer: 'Oracle',
      date: '2022',
      credentialId: 'OCJP-2022-XXX',
      icon: <Coffee className="w-8 h-8" />
    },
    {
      name: 'Spring Professional Certification',
      issuer: 'VMware',
      date: '2023',
      credentialId: 'SPC-2023-XXX',
      icon: <Layers className="w-8 h-8" />
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
    } else if (formData.name.length < 3) {
      errors.name = 'El nombre debe tener al menos 3 caracteres';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    
    if (formData.phone && !/^[0-9+\-() ]+$/.test(formData.phone)) {
      errors.phone = 'Teléfono inválido';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'El asunto es requerido';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
    } else if (formData.message.length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envío
    setTimeout(() => {
      alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header Navigation */}
      <header className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/90 border-gray-800' : 'bg-white/90 border-gray-200'} border-b`}>
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              &lt;GV /&gt;
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-purple-500 text-sm xl:text-base ${
                    activeSection === item.id ? 'text-purple-500 font-semibold' : ''
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
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`lg:hidden mt-4 pb-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 absolute left-4 right-4 top-full shadow-xl`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded transition-all duration-300 ${
                    darkMode ? 'hover:bg-purple-500/20' : 'hover:bg-purple-500/10'
                  } ${activeSection === item.id ? 'text-purple-500 font-semibold' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`mt-4 p-3 rounded-lg transition-all duration-300 w-full ${
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
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-0">
        {/* Background Pattern - Hidden on mobile */}
        <div className="absolute inset-0 opacity-10 hidden sm:block">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent block mb-2">
                  {typedText}
                </span>
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
                Arquitecto de soluciones backend con pasión por crear sistemas escalables, 
                seguros y eficientes. Especializado en microservicios y cloud computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Ver Proyectos <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-6 py-3 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" /> Descargar CV
                </button>
              </div>
              <div className="flex gap-4 pt-4 justify-center md:justify-start">
                <a href="https://github.com" className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`} title="GitHub">
                  <Code2 className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`} title="LinkedIn">
                  <Users className="w-6 h-6" />
                </a>
                <a href="mailto:gerson@example.com" className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`} title="Email">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-500">3+</div>
                  <div className="text-sm text-gray-400">Años Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-500">25+</div>
                  <div className="text-sm text-gray-400">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-500">10+</div>
                  <div className="text-sm text-gray-400">Tecnologías</div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className={`relative w-full h-full rounded-full overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Terminal className="w-32 h-32 text-purple-500/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-purple-500" />
                  Mi Historia
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Con más de 3 años de experiencia en desarrollo backend, me especializo en 
                  diseñar y construir arquitecturas robustas que soportan aplicaciones de alto tráfico.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Mi pasión por la tecnología comenzó desde muy joven, y desde entonces he 
                  trabajado incansablemente para mantenerme a la vanguardia de las últimas 
                  tendencias y mejores prácticas en el desarrollo de software.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Creo firmemente en el código limpio, la documentación clara y la colaboración 
                  efectiva en equipo. Mi objetivo es siempre entregar soluciones que no solo 
                  funcionen, sino que sean mantenibles y escalables a largo plazo.
                </p>
              </div>

              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="w-8 h-8 text-pink-500" />
                  Filosofía de Trabajo
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Clean Code: Escribo código que otros desarrolladores pueden entender y mantener</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Test-Driven: TDD como práctica fundamental para código confiable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Continuous Learning: Siempre explorando nuevas tecnologías y metodologías</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Team Player: La comunicación efectiva es clave para el éxito del proyecto</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-yellow-500" />
                  Certificaciones
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} hover:shadow-md transition-all duration-300`}>
                      <div className="text-purple-500">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-gray-400">{cert.issuer} • {cert.date}</p>
                        <p className="text-xs text-gray-500 mt-1">ID: {cert.credentialId}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-500 cursor-pointer" />
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Globe className="w-8 h-8 text-blue-500" />
                  Idiomas
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Español</span>
                      <span className="text-sm text-gray-400">Nativo</span>
                    </div>
                    <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Inglés</span>
                      <span className="text-sm text-gray-400">Avanzado</span>
                    </div>
                    <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Portugués</span>
                      <span className="text-sm text-gray-400">Intermedio</span>
                    </div>
                    <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 bg-gradient-to-b from-transparent to-black/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experiencia Profesional
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-600'
                    }`}>
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    {index < experience.length - 1 && (
                      <div className={`w-0.5 h-full mt-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`} />
                    )}
                  </div>
                  
                  <div className={`flex-1 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl mb-8 hover:shadow-2xl transition-all duration-300`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <p className="text-purple-500 font-medium">{job.company}</p>
                      </div>
                      <div className="text-sm text-gray-400 mt-2 md:mt-0">
                        <p>{job.period}</p>
                        <p className="text-xs">{job.type}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4">{job.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {job.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className={`inline-flex rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} p-1`}>
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'technical' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Técnicas
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'soft' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Blandas
              </button>
            </div>
          </div>
          
          {activeTab === 'technical' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {Object.entries(skills).map(([key, category], categoryIndex) => (
                <div
                  key={key}
                  className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.items.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-gray-400">{skill.level}%</span>
                        </div>
                        <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: skillsLoaded ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 100) + (index * 100)}ms`
                            }}
                          />
                        </div>
                        <p className="text-xs text-gray-500">{skill.experience}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Liderazgo', icon: <Users />, description: 'Capacidad para guiar equipos hacia objetivos comunes' },
                { title: 'Comunicación', icon: <MessageSquare />, description: 'Habilidad para transmitir ideas de forma clara y efectiva' },
                { title: 'Resolución de Problemas', icon: <Zap />, description: 'Enfoque analítico para encontrar soluciones óptimas' },
                { title: 'Trabajo en Equipo', icon: <Heart />, description: 'Colaboración efectiva en entornos multidisciplinarios' },
                { title: 'Adaptabilidad', icon: <Activity />, description: 'Flexibilidad ante cambios y nuevos desafíos' },
                { title: 'Gestión del Tiempo', icon: <Clock />, description: 'Organización eficiente para cumplir deadlines' }
              ].map((skill, index) => (
                <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
                      {React.cloneElement(skill.icon, { className: "w-6 h-6" })}
                    </div>
                    <h3 className="text-lg font-bold">{skill.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-gradient-to-b from-transparent to-black/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${project.featured ? 'md:col-span-2' : ''}`}>
                <div className={`relative overflow-hidden ${project.featured ? 'h-64' : 'h-48'} bg-gradient-to-br from-purple-500/20 to-pink-500/20`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className={`${project.featured ? 'w-32 h-32' : 'w-24 h-24'} text-purple-500/30`} />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                      DESTACADO
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all duration-300"
                    >
                      <Eye className="w-6 h-6 text-white" />
                    </button>
                    <a href={project.github} className="p-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all duration-300">
                      <GitBranch className="w-6 h-6 text-white" />
                    </a>
                    <a href={project.demo} className="p-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs text-purple-500 font-semibold">{project.category}</span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                  <p className="text-gray-400">{project.description}</p>
                  
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-700">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-semibold capitalize">{key}</div>
                          <div className="text-xs text-gray-400">{value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-400">
                        +{project.technologies.length - 5} más
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Blog Técnico
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <div>
                    <span className="text-xs text-purple-500 font-semibold">{post.category}</span>
                    <h3 className="text-lg font-bold mt-1 line-clamp-2">{post.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                    </div>
                    <button className="text-purple-500 hover:text-purple-400 transition-colors duration-300 flex items-center gap-1">
                      Leer más <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Ver todos los artículos <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-b from-transparent to-black/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Testimonios
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <p className="text-gray-400 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-4">¡Construyamos algo increíble juntos!</h3>
                <p className="text-gray-400 mb-6">
                  Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
                  Si tienes un proyecto interesante o simplemente quieres conversar sobre tecnología, 
                  ¡no dudes en contactarme!
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:gerson.vasquez@example.com" className="flex items-center gap-3 text-gray-400 hover:text-purple-500 transition-colors duration-300">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>gerson.vasquez@example.com</span>
                  </a>
                  <a href="tel:+51999888777" className="flex items-center gap-3 text-gray-400 hover:text-purple-500 transition-colors duration-300">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>+51 999 888 777</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>La Esperanza, La Libertad, Perú</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span>Disponible: Lun - Vie, 9:00 AM - 6:00 PM</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
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
                    <a href="https://dev.to" className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`}>
                      <Terminal className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-xl`}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 focus:border-purple-500' 
                          : 'bg-gray-50 border-gray-300 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 ${
                        formErrors.name ? 'border-red-500' : ''
                      }`}
                      placeholder="Tu nombre"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 focus:border-purple-500' 
                          : 'bg-gray-50 border-gray-300 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 ${
                        formErrors.email ? 'border-red-500' : ''
                      }`}
                      placeholder="tu@email.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 focus:border-purple-500' 
                          : 'bg-gray-50 border-gray-300 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`}
                      placeholder="Tu empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 focus:border-purple-500' 
                          : 'bg-gray-50 border-gray-300 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 ${
                        formErrors.phone ? 'border-red-500' : ''
                      }`}
                      placeholder="+51 999 999 999"
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 focus:border-purple-500' 
                        : 'bg-gray-50 border-gray-300 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 ${
                      formErrors.subject ? 'border-red-500' : ''
                    }`}
                    placeholder="¿En qué puedo ayudarte?"
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 focus:border-purple-500' 
                        : 'bg-gray-50 border-gray-300 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none ${
                      formErrors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Gerson Vasquez. Diseñado con <span className="text-red-500">❤️</span> y mucho <Coffee className="w-4 h-4 inline" />
            </p>
            <div className="flex items-center gap-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-purple-500 transition-colors duration-300 flex items-center gap-1">
                Volver arriba <ChevronRight className="w-4 h-4 rotate-270" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedProject(null)}>
          <div className={`max-w-4xl w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-sm text-purple-500 font-semibold">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold mt-1">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-300">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-gray-400 mb-6">{selectedProject.longDescription}</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Características Principales
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Stack Tecnológico</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedProject.metrics && (
                <div>
                  <h4 className="text-lg font-semibold mb-3">Métricas de Rendimiento</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                        <div className="text-2xl font-bold text-purple-500">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex gap-4 pt-4 border-t border-gray-700">
                <a href={selectedProject.github} className="flex-1 px-6 py-3 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <GitBranch className="w-5 h-5" /> Ver Código
                </a>
                <a href={selectedProject.demo} className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" /> Ver Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio3;