import { useEffect, useState } from "react";
import type { FormEvent } from "react";

import avatar from "../assets/images/Avatar_file.png";
import { CONTACT_EMAIL, socialLinks } from "../data/SocialLinks";
import {
  ArrowUpRight,
  CircleAlert,
  Mail,
  PartyPopper,
  Send,
  MessageSquare
} from "lucide-react";

type SnackbarState = {
  type: "success" | "error";
  title: string;
  message: string;
} | null;

const focusClassName = `
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[var(--color-text)]
  focus-visible:ring-offset-2
  focus-visible:ring-offset-[var(--color-surface)]
`;

const fieldClassName = `
  block
  w-full
  min-w-0
  rounded-xl
  border
  border-[var(--color-border)]
  bg-[var(--color-bg)]
  px-4
  py-3
  font-body
  text-base
  leading-6
  text-[var(--color-text)]
  placeholder:text-[var(--color-text-muted)]
  transition-colors
  duration-200
  hover:border-[var(--color-text-muted)]
  focus:outline-none
  focus:border-[var(--color-primary)]
  focus:ring-0
`;

const labelClassName = `
  mb-2
  block
  font-body
  text-sm
  font-medium
  text-[var(--color-text)]
`;

const ContactSection = () => {
  const [snackbar, setSnackbar] = useState<SnackbarState>(null);

  /* OCULTAR SNACKBAR */
  useEffect(() => {
    if (!snackbar) return;

    const timeout = window.setTimeout(() => {
      setSnackbar(null);
    }, 5000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [snackbar]);

  /* ENVIAR FORMULARIO */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    /* CORREO ASUNTO */
    const subject = encodeURIComponent(`CONTACTO - ${name.toUpperCase()}`);

    /* CORREO CUERPO */
    const body = encodeURIComponent(
      [
        message,
        "",
        "Atentamente,",
        `Nombre: ${name}`,
        `Correo: ${email}`,
        "",
        "",
        "",
      ].join("\r\n")
    );

    const mailto =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${subject}` +
      `&body=${body}`;

    /* APERTURA CORREO */
    let mailClientOpened = false;
    let confirmationTimer: number | undefined;

    const confirmMailClientOpened = () => {
      mailClientOpened = true;
      cleanup();
    };

    const handleWindowBlur = () => {
      confirmMailClientOpened();
    };

    const handleVisibilityChange = () => {
      if (
        document.visibilityState === "hidden"
      ) {
        confirmMailClientOpened();
      }
    };

    const cleanup = () => {
      window.removeEventListener(
        "blur",
        handleWindowBlur
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      if (confirmationTimer) {
        window.clearTimeout(
          confirmationTimer
        );
      }
    };

    /* ESCUCHAR CAMBIO DE VENTANA */
    window.addEventListener(
      "blur",
      handleWindowBlur
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    /* SNACKBAR INICIAL */
    setSnackbar({
      type: "success",
      title: "¡Todo listo!",
      message:
        "Tu mensaje está preparado. Continúa en tu aplicación de correo para revisarlo y enviarlo.",
    });

    /* ABRIR CLIENTE DE CORREO */
    try {
      window.location.assign(mailto);
      confirmationTimer =
        window.setTimeout(() => {
          cleanup();

          if (
            !mailClientOpened &&
            document.visibilityState ===
              "visible"
          ) {
            setSnackbar({
              type: "error",
              title:
                "No pudimos abrir tu correo",
              message:
                "No fue posible confirmar la apertura de tu aplicación de correo. Puedes utilizar el correo directo que aparece en esta sección.",
            });
          }
        }, 3000);
    } catch {
      cleanup();

      setSnackbar({
        type: "error",
        title:
          "No pudimos abrir tu correo",
        message:
          "No fue posible iniciar tu aplicación de correo. Puedes utilizar el correo directo que aparece en esta sección.",
      });
    }
  };

  return (
    <>
      {snackbar && (
        <div
          className="
            fixed
            right-4
            top-20
            z-[100]
            isolate
            w-[calc(100%-2rem)]
            max-w-md
            sm:right-6
            sm:top-20
            lg:right-10
          "
        >
          {/* RESPLANDOR */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -inset-1
              -z-0
              rounded-2xl
              bg-[var(--color-primary)]
              opacity-10
              blur-xl
            "
          />

          {/* RESPLANDOR SUAVE */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -inset-0
              -z-0
              rounded-3xl
              bg-[var(--color-primary)]
              opacity-10
              blur-lg
              motion-safe:animate-[pulse_4s_ease-in-out_infinite]
            "
          />

          {/* CONTENIDO */}
          <div
            role={
              snackbar.type === "error"
                ? "alert"
                : "status"
            }
            aria-live={
              snackbar.type === "error"
                ? "assertive"
                : "polite"
            }
            aria-atomic="true"
            className="
              relative
              flex
              items-start
              gap-3
              overflow-hidden
              rounded-2xl
              border-2
              border-[var(--color-primary)]
              bg-[var(--color-surface)]
              px-4
              py-4
              text-[var(--color-text)]
              shadow-xl
              sm:px-5
            "
          >
            {/* ICONO */}
            <span
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[var(--color-primary)]
                text-[#0f1419]
                shadow-md
                shadow-[var(--color-shadow)]
              "
            >
              {snackbar.type === "success" ? (
                <PartyPopper
                  size={22}
                  aria-hidden="true"
                />
              ) : (
                <CircleAlert
                  size={22}
                  aria-hidden="true"
                />
              )}
            </span>

            {/* TEXTO */}
            <div className="min-w-0 flex-1 pt-0.5">
              <p
                className="
                  font-heading
                  text-sm
                  font-semibold
                  text-[var(--color-text)]
                  sm:text-base
                "
              >
                {snackbar.title}
              </p>
              <p
                className="
                  mt-1
                  font-body
                  text-xs
                  leading-5
                  text-[var(--color-text)]
                  sm:text-sm
                "
              >
                {snackbar.message}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECCION CONTACTO */}
      <section
        id="contacto"
        aria-labelledby="contact-title"
        className="
          mx-auto
          my-20
          px-4
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            p-5
            shadow-sm
            shadow-[var(--color-shadow)]
            sm:p-8
            lg:p-10
            xl:p-12
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-start
              gap-10
              lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
              lg:items-center
              xl:gap-16
            "
          >
            <div className="min-w-0">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-body
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                  text-[var(--color-primary)]
                "
              >
                <MessageSquare
                  size={18}
                  aria-hidden="true"
                  className="
                    text-[var(--color-primary)]
                  "
                />
                Contacto
              </div>
              <h2
                id="contact-title"
                className="
                  mt-4
                  max-w-xl
                  font-heading
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-[var(--color-text)]
                  sm:text-3xl
                  xl:text-4xl
                "
              >
                ¡Siempre dispuesto a nuevas
                colaboraciones!
              </h2>
              <span
                aria-hidden="true"
                className="
                  mt-6
                  block
                  h-1
                  w-16
                  rounded-full
                  bg-[var(--color-primary)]
                "
              />
              {/* AVATAR */}
              <div className="mt-6 flex justify-center">
                <div
                  className="
                    relative
                    isolate
                    h-40
                    w-40
                    shrink-0
                    sm:h-44
                    sm:w-44
                    lg:h-48
                    lg:w-48
                  "
                >
                  {/* HALO */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-0
                      rounded-full
                      opacity-50
                    "
                  >
                    <div
                      className="
                        h-full
                        w-full
                        rounded-full
                        bg-[var(--color-primary)]
                        blur-2xl
                        motion-safe:animate-[pulse_4s_ease-in-out_infinite]
                      "
                    />
                  </div>
                  {/* IMAGEN */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[var(--color-primary)]
                      bg-[var(--color-bg)]
                      shadow-2xl
                      shadow-[var(--color-shadow)]
                    "
                  >
                    <img
                      src={avatar}
                      alt="Avatar ilustrado de Gerson Vasquez"
                      loading="lazy"
                      decoding="async"
                      className="
                        block
                        h-full
                        w-full
                        object-contain
                      "
                    />
                  </div>
                </div>
              </div>
              <div
                className="
                  mt-6
                  border-t
                  border-[var(--color-border)]
                  pt-6
                "
              >
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className={`
                    group
                    flex
                    min-w-0
                    items-center
                    gap-3
                    rounded-xl
                    px-2
                    py-2
                    text-[var(--color-text)]
                    transition-colors
                    duration-200
                    hover:bg-[var(--color-shadow)]
                    ${focusClassName}
                  `}
                >
                  <span
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--color-border)]
                      text-[var(--color-primary)]
                      transition-colors
                      duration-200
                      group-hover:border-[var(--color-primary)]
                    "
                  >
                    <Mail
                      size={21}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className="
                        block
                        font-body
                        text-xs
                        text-[var(--color-text-muted)]
                      "
                    >
                      Correo directo
                    </span>
                    <span
                      className="
                        mt-1
                        block
                        font-body
                        text-sm
                        font-medium
                        text-[var(--color-text)]
                        [overflow-wrap:anywhere]
                        underline-offset-4
                        group-hover:underline
                      "
                    >
                      {CONTACT_EMAIL}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="
                      shrink-0
                      text-[var(--color-primary)]
                    "
                  />
                </a>
                <p
                  className="
                    mb-3
                    mt-7
                    font-body
                    text-sm
                    text-[var(--color-text-muted)]
                  "
                >
                  Conoce mi trabajo y conectemos
                </p>
                <ul className="flex flex-wrap gap-3">
                  {socialLinks.map(
                    (social) => {
                      const Icon =
                        social.icon;
                      return (
                        <li key={social.id}>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${social.label}: abrir perfil en otra pestaña`}
                            className={`
                              inline-flex
                              min-h-11
                              items-center
                              gap-2
                              rounded-lg
                              border
                              border-[var(--color-border)]
                              px-4
                              py-2.5
                              font-body
                              text-sm
                              font-medium
                              text-[var(--color-text)]
                              transition-colors
                              duration-200
                              hover:border-[var(--color-primary)]
                              hover:bg-[var(--color-bg)]
                              ${focusClassName}
                            `}
                          >
                            <Icon
                              size={18}
                              aria-hidden="true"
                              className="
                                shrink-0
                                text-[var(--color-primary)]
                              "
                            />
                            {social.label}
                            <ArrowUpRight
                              size={15}
                              aria-hidden="true"
                              className="
                                shrink-0
                                text-[var(--color-primary)]
                              "
                            />
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              aria-labelledby="contact-form-title"
              aria-describedby="contact-form-note"
              className="
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                shadow-lg
                shadow-[var(--color-shadow)]
              "
            >
              <div
                aria-hidden="true"
                className="
                  h-1
                  bg-[var(--color-primary)]
                "
              />
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  justify-between
                  gap-3
                  border-b
                  border-[var(--color-border)]
                  px-5
                  py-4
                  sm:px-6
                  xl:px-8
                "
              >
                <div className="flex items-center gap-3">
                  <Mail
                    size={20}
                    aria-hidden="true"
                    className="
                        shrink-0
                        text-[var(--color-primary)]
                      "
                  />
                  <h3
                    id="contact-form-title"
                    className="
                      font-heading
                      text-base
                      font-semibold
                      text-[var(--color-text)]
                    "
                  >
                    Nuevo mensaje
                  </h3>
                </div>
                <p
                 className="
                    font-body
                    text-xs
                    text-[var(--color-text-muted)]
                  "
                >
                  Para:{" "}
                  <span
                    className="
                      text-[var(--color-text)]
                    "
                  >
                    Gerson Vasquez
                  </span>
                </p>
              </div>
              <div
                className="
                  space-y-6
                  p-5
                  sm:p-6
                  xl:p-8
                "
              >
                <p
                  className="
                    font-body
                    text-xs
                    text-[var(--color-text-muted)]
                  "
                >
                  Todos los campos son obligatorios.
                </p>
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-1
                    xl:grid-cols-2
                  "
                >
                  <div className="min-w-0">
                    <label
                      htmlFor="contact-name"
                      className={
                        labelClassName
                      }
                    >
                      Tu nombre / Organización
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      className={
                        fieldClassName
                      }
                    />
                  </div>
                  <div className="min-w-0">
                    <label
                      htmlFor="contact-email"
                      className={
                        labelClassName
                      }
                    >
                      Tu correo
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      spellCheck={false}
                      className={
                        fieldClassName
                      }
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className={
                      labelClassName
                    }
                  >
                    Cuéntame un poco más
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={1200}
                    rows={6}
                    placeholder="Hola Gerson, te escribo sobre ..."
                    className={`
                      ${fieldClassName}
                      min-h-40
                      resize-y
                    `}
                  />
                </div>
                <div
                  className="
                    space-y-4
                    border-t
                    border-[var(--color-border)]
                    pt-5
                  "
                >
                  <button
                    type="submit"
                    className={`
                      inline-flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-[var(--color-primary)]
                      px-5
                      py-3
                      font-body
                      text-sm
                      font-semibold
                    text-[#0f1419]
                      transition-colors
                      duration-200
                      hover:bg-[var(--color-primary-light)]
                      ${focusClassName}
                    `}
                  >
                    Continuar por correo
                    <Send
                      size={18}
                      aria-hidden="true"
                    />
                  </button>
                  <p
                    id="contact-form-note"
                    className="
                      font-body
                      text-xs
                      leading-5
                      text-[var(--color-text-muted)]
                    "
                  >
                    Se abrirá tu aplicación de
                    correo para revisar el
                    borrador y enviarlo.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;






















