import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import postsData from "../data/posts.json";
import icon from "../assets/icon.svg";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef(null);

  const handleArtigosClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen(false);

    if (location.pathname === "/") {
      const artigosSection = document.getElementById("artigos");
      if (artigosSection) {
        artigosSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const artigosSection = document.getElementById("artigos");
        if (artigosSection) {
          artigosSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handlePostClick = (postId) => {
    setIsDropdownOpen(false);
    navigate(`/post/${postId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150); // Pequeno delay para permitir movimento do mouse
  };

  // Função para obter o ícone do post baseado no título
  const getPostIcon = (titulo) => {
    const titleLower = titulo.toLowerCase();
    if (titleLower.includes("green it") || titleLower.includes("ti verde")) {
      return "🌱";
    }
    if (
      titleLower.includes("cloud computing") ||
      titleLower.includes("cloud")
    ) {
      return "☁️";
    }
    if (
      titleLower.includes("energia") ||
      titleLower.includes("energia renovável")
    ) {
      return "⚡";
    }
    if (titleLower.includes("economia circular")) {
      return "♻️";
    }
    if (
      titleLower.includes("virtualização") ||
      titleLower.includes("otimização")
    ) {
      return "💻";
    }
    if (
      titleLower.includes("ia") ||
      titleLower.includes("machine learning") ||
      titleLower.includes("inteligência artificial")
    ) {
      return "🤖";
    }
    if (
      titleLower.includes("medindo") ||
      titleLower.includes("impacto") ||
      titleLower.includes("reportando")
    ) {
      return "📊";
    }
    if (
      titleLower.includes("data center") ||
      titleLower.includes("data centers")
    ) {
      return "🏢";
    }
    return "📄"; // Ícone padrão
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 140) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const headerBaseClasses =
    "fixed top-0 w-full z-50 transition-transform duration-300 ease-out";
  const visibilityClass = "translate-y-0";
  const surfaceClass =
    "bg-gradient-to-l from-emerald/30 to-emerald-50 backdrop-blur-3xl border-b border-emerald-100";

  return (
    <header
      className={`${headerBaseClasses} ${visibilityClass} ${surfaceClass}`}
    >
      <div className="container mx-auto px-5 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo e Branding */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div>
              <h1 className="text-2xl font-bold text-emerald-950">EcConnect</h1>
              <p className="text-xs text-green-600 font-semibold uppercase tracking-wide">
                Blog de TI Verde & Sustentabilidade
              </p>
            </div>
          </Link>
          <img
            src={icon}
            alt="EcConnect"
            className="w-14 h-14 object-contain drop-shadow-lg"
          />
          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors rounded-lg"
            >
              Home
            </Link>

            {/* Dropdown Artigos */}
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors rounded-lg flex items-center gap-1">
                <span> Artigos</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100/70 overflow-hidden z-50 animate-dropdown">
                  <div className="px-6 py-4 border-b border-emerald-50 bg-gradient-to-r from-emerald-600/90 to-emerald-500/90 text-white text-left">
                    <h3 className="font-semibold text-sm uppercase tracking-wide">
                      Mapas de leitura
                    </h3>
                    <p className="text-xs text-emerald-50/80 mt-1">
                      Conteúdo sobre TI Verde e Sustentabilidade
                    </p>
                  </div>

                  <div className="p-3 max-h-96 overflow-y-auto">
                    <button
                      onClick={handleArtigosClick}
                      className="w-full text-left px-4 py-3 hover:bg-emerald-50 rounded-xl transition-colors mb-2 border border-emerald-200/70 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">📚</span>
                        <div>
                          <div className="font-semibold text-emerald-700">
                            Ver todos os artigos
                          </div>
                          <div className="text-xs text-gray-500">
                            Lista completa de conteúdos
                          </div>
                        </div>
                      </div>
                    </button>

                    <div className="border-t-2 border-gray-200 my-3 pt-3">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Artigos Recentes
                      </div>
                      {postsData.slice(0, 5).map((post) => (
                        <button
                          key={post.id}
                          onClick={() => handlePostClick(post.id)}
                          className="w-full text-left px-4 py-3 hover:bg-emerald-50 rounded-xl transition-colors group cursor-pointer"
                        >
                          <div className="flex items-start space-x-3">
                            <span className="text-xl flex-shrink-0">
                              {getPostIcon(post.titulo)}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-gray-900 text-sm group-hover:text-emerald-600 transition-colors line-clamp-2">
                                {post.titulo}
                              </div>
                              <div className="text-xs text-gray-500 mt-1 line-clamp-1">
                                {post.subtitulo}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#sobre"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors rounded-lg"
            >
              Sobre
            </a>
          </nav>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-emerald-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
            >
              🏠 Home
            </Link>
            <button
              onClick={handleArtigosClick}
              className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
            >
              📚 Ver Todos os Artigos
            </button>
            {postsData.slice(0, 3).map((post) => (
              <button
                key={post.id}
                onClick={() => {
                  handlePostClick(post.id);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left block px-6 py-2 text-sm text-gray-600 hover:bg-emerald-50 rounded-lg cursor-pointer"
              >
                {getPostIcon(post.titulo)} {post.titulo}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
