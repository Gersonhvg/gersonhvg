import { useEffect, useState } from "react";
import { Download, Moon, Sun, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import navLinks from "../data/NavLinks"

const Navbar = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(`${navLinks[0].id}`);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, [])

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(`#${link.id}`))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const handleDownloadCV = () => {
        const fileId = "1zDNYG0DPwvzGi72NLarnpM_hiRkGF92O";

        const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

        const link = document.createElement("a");

        link.href = url;
        link.download = "CV-Gerson-Vasquez.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur-md">
            <nav className="mx-auto grid max-w-full grid-cols-[1fr_auto_auto] lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-8 items-center py-2">
                <a href="#inicio" className="font-heading font-semibold mx-2 flex items-center justify-self-start whitespace-nowrap text-3xl text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-primary)]  focus:outline-none focus-visible:ring-2  focus:ring-offset-2 focus:ring-offset-[var(--color-bg)] focus-visible:ring-[var(--color-primary)]">
                    <ChevronLeft className="text-[var(--color-primary)] " size={30} />GV<span className="translate-y-[-2px] text-[var(--color-primary)] " >/</span> <ChevronRight className="text-[var(--color-primary)] " size={30} />
                </a>
                <ul className="font-body font-medium hidden min-w-0 items-center justify-self-center  text-[var(--color-text)] lg:flex lg:justify-self-center gap-8 xl:gap-16 lg:text-[var(--color-text)]">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <li key={`#${link.id}`}>
                                <a href={`#${link.id}`}
                                    className={`
                                        whitespace-nowrap
                                        border-b-4
                                        pb-1
                                        transition-colors
                                        duration-300
                                        hover:text-[var(--color-primary)]
                                        ${isActive ? "rounded-sm border-[var(--color-primary)] text-[var(--color-primary)]" : "border-transparent text-[var(--color-text)]"}
                                    `}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className=" items-center gap-2 pr-2 flex justify-self-end  whitespace-nowrap lg:gap-4 xl:gap-6">
                    <button type="button" onClick={handleDownloadCV} aria-label="Descargar CV"
                        className="
                            flex
                            items-center
                            font-body
                            font-medium
                            rounded-lg
                            border-2
                            border-[var(--color-primary)]
                            px-4
                            py-2
                            text-[var(--color-text)]
                            transition-all
                            duration-300
                            hover:bg-[var(--color-primary)]
                            hover:text-[var(--color-bg)]
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-[var(--color-primary)]
                        "
                    >
                        <span className="lg:hidden">
                            CV
                        </span>
                        <span className="hidden lg:inline">
                            Descargar CV
                        </span>
                        <Download
                            className="ml-2"
                            size={20}
                        />
                    </button>
                    <button type="button" onClick={toggleTheme} aria-label="Cambiar tema"
                        className="relative flex shrink-0 items-center rounded-full 
                        cursor-pointer bg-[var(--color-surface)] border border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-primary)] outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                    >
                        <div className={`absolute left-0 top-0 h-9 w-9 rounded-full bg-[var(--color-text)] shadow-md transition-all duration-300 ease-in-out 
                            ${theme === "dark" ? "translate-x-9" : "translate-x-0"}`}>
                        </div>
                        <div className="relative z-10 flex items-center">
                            <span className={`flex h-9 w-9 items-center justify-center transition-all duration-300 ${theme === "light" ? "text-[var(--color-bg)]" : "text-[var(--color-text)] opacity-50"}`}>
                                <Sun />
                            </span>
                            <span className={`flex h-9 w-9 items-center justify-center transition-all duration-300 ${theme === "dark" ? "text-[var(--color-bg)]" : "text-[var(--color-text)] opacity-50"}`}>
                                <Moon />
                            </span>
                        </div>
                    </button>
                </div>
                <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMenuOpen} className="flex shrink-0 lg:hidden justify-self-end items-center justify-center h-full w-10 rounded-lg  border border-[var(--color-border)]
                text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-lg hover:shadow-[var(--color-primary)]/30 mx-2" >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[var(--color-bg)] border-t border-[var(--color-border)] shadow-lg z-50  lg:hidden">
                        <ul className="flex flex-col font-body font-medium text-[var(--color-text)]">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = activeSection === link.id;
                                return (
                                    <li key={`#${link.id}`} className="border-b border-[var(--color-border)]">
                                        <a href={`#${link.id}`} onClick={() => setIsMenuOpen(false)}
                                            className={`
                                                relative
                                                flex
                                                items-center
                                                gap-4
                                                px-6
                                                py-4
                                                transition-colors
                                                duration-300
                                                hover:bg-[var(--color-surface)]
                                                hover:text-[var(--color-primary)]
                                                ${isActive ? "bg-[var(--color-surface)] text-[var(--color-primary)]" : "text-[var(--color-text)]"}
                                            `}
                                        >
                                            {isActive && (
                                                <span className="
                                                    absolute
                                                    left-0
                                                    top-1/2
                                                    h-12
                                                    w-1
                                                    -translate-y-1/2
                                                    rounded-r-full
                                                    bg-[var(--color-primary)]
                                                    "
                                                />
                                            )}
                                            <Icon size={22} strokeWidth={1.8} className={"text-[var(--color-primary)]"} />
                                            <span>{link.label}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};
export default Navbar;