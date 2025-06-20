import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

interface SocialLink {
  icon: React.ComponentType;
  href: string;
  color: string;
}


const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error' | ''; visible: boolean }>({
    message: '',
    type: '',
    visible: false,
  });

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`, `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`, form.current, {
          publicKey: `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`,
        })
        .then(
          () => {
            setSnackbar({ message: 'Formulario enviado correctamente', type: 'success', visible: true });
            setFormData({ user_name: '', user_email: '', message: '' });
          },
          (error) => {
            setSnackbar({ message: 'Error al enviar el formulario', type: 'error', visible: true });
            console.error('Error al enviar el correo...', error.text);
          }
        )
        .finally(() => {
          setTimeout(() => {
            setSnackbar({ message: '', type: '', visible: false });
          }, 4000);
        });
    }
  };

  const socialLinks: SocialLink[] = [
    { icon: FaEnvelope, href: 'mailto:gvasquezg8@upao.edu.pe', color: 'hover:text-cyan-500' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gerson-humberto-vasquez-guevara-63a3322b5', color: 'hover:text-blue-500' },
  ];

  return (
    <div id="contact" className="relative bg-gradient-to-b from-gray-900 to-purple-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contáctame
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="leading-relaxed font-semibold mb-6 font-sans text-lg text-purple-200">
              ¿Necesitas un aliado tecnológico comprometido para tu proyecto?
            </p>
            <p className="leading-relaxed mb-6 font-semibold font-sans text-lg text-purple-200">
              Contáctame y empecemos a construir una nueva experiencia digital.
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white text-4xl transition-colors duration-300 ${link.color}`}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-purple-200 mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Ingrese su nombre"
                required
                maxLength={80}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-purple-200 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                maxLength={80}
                value={formData.user_email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Ingrese su correo electrónico"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-purple-200 mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                maxLength={2000}
                className="w-full px-4 py-2 rounded-lg bg-purple-800 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Escribe tu mensaje aquí"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      {/* Snackbar para mostrar mensajes */}
      {snackbar.visible && (
  <div className={`fixed font-semibold font-sans text-lg bottom-4 left-4 px-5 py-3 rounded-lg text-white 
    ${snackbar.type === 'success' ? 'bg-emerald-600' : 'bg-red-500'}
    transition-all duration-300 ease-in-out`}>
    {snackbar.message}
  </div>
)}
    </div>
  );
};

export default Contact;
