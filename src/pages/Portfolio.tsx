import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Moon, Sun, Download, ChevronRight, Menu, X, ExternalLink,
  Mail, Code2, Database, Cloud, Server, MapPin,
  Book, Award, Send, GraduationCap,
  GitBranch, Users, Zap, Coffee, Target,
  CheckCircle, Clock, Activity, Package, AlertCircle,
  Linkedin,
  Github,
  Search
} from 'lucide-react';
import avatar from '../assets/images/Avatar_file.png';

// Interfaces
interface NavItem {
  id: string;
  label: string;
}

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  color: string;
  items: SkillItem[];
}

interface Skills {
  [key: string]: SkillCategory;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
}

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  type: 'education' | 'certification';
}

interface ContactFormData {
  user_name: string;
  user_email: string;
  message: string;
  [key: string]: string;
}

interface FormErrors {
  user_name?: string;
  user_email?: string;
  message?: string;
}

interface Snackbar {
  message: string;
  type: 'success' | 'error' | '';
  visible: boolean;
}

interface SoftSkill {
  title: string;
  icon: JSX.Element;
  description: string;
}

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [skillsLoaded, setSkillsLoaded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'technical' | 'soft'>('technical');
  const [formData, setFormData] = useState<ContactFormData>({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [snackbar, setSnackbar] = useState<Snackbar>({
    message: '',
    type: '',
    visible: false,
  });

  const fullText = 'Gerson Vasquez - Software Developer';

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
    const handleScroll = (): void => {
      const sections: string[] = ['home', 'about', 'skills', 'projects', 'contact'];
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

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  const navItems: NavItem[] = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  const skills: Skills = {
    backend: {
      title: 'Development',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Java', level: 90 },
        { name: 'Kotlin', level: 70 },
        { name: 'Spring Boot', level: 88 },
      ]
    },
    database: {
      title: 'Bases de Datos',
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'SQLServer', level: 65 }
      ]
    },
    devops: {
      title: 'Frontend',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-purple-500 to-fuchsia-500',
      items: [
        { name: 'Angular', level: 85 },
        { name: 'React', level: 80 },
      ]
    },
    tools: {
      title: 'Herramientas & Otros',
      icon: <Package className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      items: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 }
      ]
    }
  };

  const projects: Project[] = [
    {
      title: 'API REST E-commerce',
      description: 'Sistema completo de gestión de productos, usuarios y pedidos con autenticación JWT y roles.',
      image: '/api/placeholder/400/250',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
      features: ['Autenticación y autorización', 'CRUD completo', 'Paginación y filtros', 'Tests unitarios'],
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      title: 'Microservicio de Notificaciones',
      description: 'Sistema de mensajería en tiempo real con WebSockets y colas de mensajes.',
      image: '/api/placeholder/400/250',
      technologies: ['Kotlin', 'RabbitMQ', 'WebSocket', 'Redis', 'MongoDB'],
      features: ['Mensajería en tiempo real', 'Colas de mensajes', 'Notificaciones push', 'Escalabilidad horizontal'],
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      title: 'Sistema de Autenticación OAuth',
      description: 'Implementación completa de OAuth 2.0 con soporte para múltiples proveedores.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express', 'MongoDB', 'OAuth 2.0', 'JWT'],
      features: ['Login social', 'Refresh tokens', 'Rate limiting', 'Seguridad avanzada'],
      github: 'https://github.com',
      demo: 'https://github.com'
    }
  ];

  const timeline: TimelineItem[] = [
    {
      year: '2024',
      title: 'Bachiller en Computación y Sistemas',
      institution: 'Universidad Privada Antenor Orrego',
      type: 'education'
    },
    {
      year: '2023',
      title: 'Ruta de Desarrollo Web',
      institution: 'Platzi',
      type: 'certification'
    }
  ];

  const scrollToSection = (sectionId: string): void => {
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

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.user_name.trim()) {
      errors.user_name = 'El nombre es requerido';
    } else if (formData.user_name.length < 3) {
      errors.user_name = 'El nombre debe tener al menos 3 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.user_email.trim()) {
      errors.user_email = 'El email es requerido';
    } else if (!emailRegex.test(formData.user_email)) {
      errors.user_email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
    } else if (formData.message.length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    emailjs.send(
      `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
      `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
      formData as Record<string, unknown>,
      {
        publicKey: `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`,
      }
    )
      .then((response) => {
        console.log('Email enviado exitosamente:', response);
        setFormData({ user_name: '', user_email: '', message: '' });
        setFormErrors({});
        setIsSubmitting(false);
        setSnackbar({ message: 'Mensaje enviado correctamente', type: 'success', visible: true });
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        setFormData({ user_name: '', user_email: '', message: '' });
        setFormErrors({});
        setIsSubmitting(false);
        setSnackbar({ message: 'No se pudo enviar el correo, inténtalo más tarde.', type: 'error', visible: true });
      })
      .finally(() => {
        setTimeout(() => {
          setSnackbar({ message: '', type: '', visible: false });
        }, 6000);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleDownloadCV = async (): Promise<void> => {
    const fileId = '1zDNYG0DPwvzGi72NLarnpM_hiRkGF92O';
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV-Gerson-Vasquez.pdf';
    link.click();
  };

  const softSkills: SoftSkill[] = [
    { title: 'Compromiso', icon: <Target />, description: 'Dedicación constante para cumplir objetivos' },
    { title: 'Responsabilidad', icon: <CheckCircle />, description: 'Cumplimiento de entregables propuestos' },
    { title: 'Resolución de Problemas', icon: <Zap />, description: 'Enfoque lógico para identificar y superar desafíos técnicos' },
    { title: 'Trabajo en Equipo', icon: <Users />, description: 'Colaboración en proyectos con equipos multidisciplinarios' },
    { title: 'Adaptabilidad', icon: <Activity />, description: 'Flexibilidad ante cambios y nuevos desafíos' },
    { title: 'Curiosidad', icon: <Search />, description: 'Interés constante por aprender y mejorar habilidades en nuevas áreas' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-200 text-gray-900'}`}>
      {/* Header Navigation */}
      <header className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-gray-900/70 border-gray-800' : 'bg-white border-gray-200'} border-b`}>
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Gersonhvg
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-cyan-500 text-sm xl:text-base ${activeSection === item.id ? 'text-blue-400 ' : ''
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
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
                  className={`block w-full text-left py-3 px-4 rounded transition-all duration-300 ${darkMode ? 'hover:bg-purple-500/20' : 'hover:bg-purple-500/10'
                    } ${activeSection === item.id ? 'text-purple-500 font-semibold' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`mt-4 p-3 rounded-lg transition-all duration-300 w-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
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
        <div className="absolute inset-0 hidden sm:block">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(0,0,0,0.04)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,0,0,0.05)_1px,_transparent_1px)] 
                      bg-[size:40px_40px] 
                      dark:bg-[linear-gradient(to_right,_rgba(255,255,255,0.075)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.05)_1px,_transparent_1px)]"
          ></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className={`${darkMode ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-gradient-to-r from-indigo-500 to-blue-500'} bg-clip-text text-transparent`}>
                  {typedText}
                </span>
                <span className="animate-pulse text-gray-300">_</span>
              </h1>
              <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed max-w-xl mx-auto md:mx-0`}>
                Profesional con pasión por crear sistemas escalables, eficientes y aplicando buenas practicas. Especializado en apis y microservicios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Ver Proyectos <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={handleDownloadCV} className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 font-semibold rounded-lg   transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" /> Descargar CV
                </button>
              </div>
              <div className="flex gap-4 pt-4 justify-center md:justify-start">
                <a href="https://github.com/Gersonhvg" className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'} rounded-lg transition-all duration-300`} title="GitHub">
                  <Code2 className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/gersonhvg/" className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'} rounded-lg transition-all duration-300`} title="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:gersonhvg@gmail.com" className={`p-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'} rounded-lg transition-all duration-300`} title="Email">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="w-80 h-80 mx-auto relative">
                <div className={`absolute inset-0 ${darkMode ? 'bg-blue-600 opacity-20' : 'bg-blue-800 opacity-30'}  rounded-full blur-3xl  animate-pulse`}></div>
                <div className={`relative w-full h-full rounded-full overflow-hidden border-2 ${darkMode ? 'border-slate-700' : 'border-indigo-100'}`}>
                  <div className={`w-full h-full ${darkMode ? 'bg-slate-900' : 'bg-slate-100'} flex items-center justify-center`}>
                    <img
                      src={avatar}
                      alt="Avatar decorativo"
                      className="object-contain w-80 h-80 rounded-full drop-shadow-[0_0_20px_rgba(59,130,246,0.25)] mt-4
                     dark:drop-shadow-[0_0_20px_rgba(14,165,233,0.25)] 
                     transition-all duration-500"
                    />
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
            <span className="text-blue-500">
              Sobre Mí
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-md p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-cyan-500" />
                  Mi Historia
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Soy un profesional apasionado por la tecnología y la innovación.
                  Recientemente graduado como Bachiller en Computación y Sistemas, con 24 años
                  y muchas ganas de crecer profesionalmente.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Mi enfoque esta en el desarrollo de aplicaciones, soporte de TI, documentación técnica y seguimiento de proyectos.
                  Me motiva trabajar en equipo y enfrentar nuevos desafíos técnicos.
                </p>
              </div>

              <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-md p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="w-8 h-8 text-green-500" />
                  Objetivos Profesionales
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Creación de productos digitales </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Especializarme en arquitecturas modernas y cloud computing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Contribuir activamente en proyectos de TI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-md p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Book className="w-8 h-8 text-purple-500" />
                  Educación y Certificaciones
                </h3>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.type === 'education' ? 'bg-blue-500' :
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

              <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-md p-6 shadow-xl`}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Coffee className="w-8 h-8 text-orange-500" />
                  Intereses Personales
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Cloud Computing', 'IA', 'Ingeniería de Software', 'Web', 'Mobile', 'Lectura y Aprendizaje', 'Deportes'].map((interest) => (
                    <span key={interest} className={`px-4 py-2 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-200'
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
      <section id="skills" className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="text-blue-500 bg-clip-text ">
              Habilidades
            </span>
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className={`inline-flex rounded-md ${darkMode ? 'bg-gray-800' : 'bg-gray-300'} p-1`}>
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${activeTab === 'technical'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'text-gray-500 hover:text-gray-600'
                  }`}
              >
                Técnicas
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${activeTab === 'soft'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'text-gray-500 hover:text-gray-600'
                  }`}
              >
                Blandas
              </button>
            </div>
          </div>

          {activeTab === 'technical' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
              {Object.entries(skills).map(([key, category], categoryIndex) => (
                <div
                  key={key}
                  className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-md p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-md text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
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
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {softSkills.map((skill, index) => (
                <div key={index} className={`${darkMode ? 'bg-gray-900' : 'bg-white'}  rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white">
                      {React.cloneElement(skill.icon, { className: "w-6 h-6" })}
                    </div>
                    <h3 className="text-lg font-semibold">{skill.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-blue-500 bg-clip-text ">
              Proyectos Destacados
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projects.map((project, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl overflow-hidden shadow-2xl`}>
                <div className="relative overflow-hidden h-40 bg-gradient-to-br from-blue-500/20 to-green-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-24 h-24 text-blue-500/30" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.github} className="p-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all duration-300">
                      <GitBranch className="w-6 h-6 text-white" />
                    </a>
                    <a href={project.demo} className="p-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition-all duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-6 space-y-4 ">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Características principales:
                    </h4>
                    <ul className="text-sm text-gray-500 space-y-1">
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
                      <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-500 border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-2xl`}>
                <h3 className="text-2xl font-bold mb-4">¡Siempre dispuesto a nuevas oportunidades y colaboraciones!</h3>
                <p className="text-gray-500 mb-6">
                  Puedes contactarme a través de los siguientes medios, o simplemente envíame un mensaje utilizando el formulario de contacto.
                </p>

                <div className="space-y-4">
                  <a href="mailto:gerson.vasquez@example.com" className="flex items-center gap-3 text-gray-500 hover:text-blue-500 transition-colors duration-300">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Mail className="w-5 h-5 " />
                    </div>
                    <span>gersonhvg@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>La Esperanza, La Libertad, Perú</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span>Disponible: Lun - Vie, 9:00 AM - 6:00 PM</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-400">
                  <p className="text-sm text-gray-500 mb-4">Información adicional:</p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/gersonhvg/" className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/Gersonhvg" className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-all duration-300`}>
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-2xl`}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre u Organización <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode
                      ? 'bg-gray-800 border-gray-600 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${formErrors.user_name ? 'border-red-500' : ''
                      }`}
                    placeholder="Tu nombre u organización"
                  />
                  {formErrors.user_name && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.user_name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode
                      ? 'bg-gray-800 border-gray-600 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${formErrors.user_email ? 'border-red-500' : ''
                      }`}
                    placeholder="example@email.com"
                  />
                  {formErrors.user_email && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.user_email}
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
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode
                      ? 'bg-gray-800 border-gray-600 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none ${formErrors.message ? 'border-red-500' : ''
                      }`}
                    placeholder="Hola Gerson, te escribo para..."
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
                  className={`w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
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
      <footer className={`py-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-300 bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-center md:text-left">
              © 2025 Gerson Vasquez
            </p>
            <div className="flex items-center gap-4 ">
              <button onClick={() => scrollToSection('home')} className="text-gray-500 border border-gray-500 p-2 rounded-md   hover:text-blue-500 transition-colors duration-300 flex items-center gap-1">
                Volver arriba <ChevronRight className="w-4 h-4 rotate-270" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Snackbar para mostrar mensajes */}
      {snackbar.visible && (
        <div className={`fixed font-semibold font-sans text-lg bottom-4 justify-self-center px-5 py-3 rounded-lg text-white animate-pulse
        ${snackbar.type === 'success' ? 'bg-teal-600' : 'bg-orange-500'}
        transition-all duration-300 ease-in-out`}>
          {snackbar.message}
        </div>
      )}
    </div>
  );
};

export default Portfolio;