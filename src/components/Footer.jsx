import { Link, useLocation, useNavigate } from "react-router-dom";
import iconSvg from "../assets/icon.svg";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleArtigosClick = (e) => {
    e.preventDefault();

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

  return (
    <footer className="bg-amber-950 text-slate-200 py-6">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <img
              src={iconSvg}
              alt="EcConnect"
              className="w-16 h-16 rounded-xl shadow-lg shadow-emerald-400/30"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">EcConnect</h3>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                Tecnologia e sustentabilidade caminhando juntas para inspirar
                decisões mais verdes.
              </p>
            </div>
          </div>

          <nav className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-8">
            <Link to="/" className="hover:text-emerald-300 transition">
              Home
            </Link>
            <button
              onClick={handleArtigosClick}
              className="text-left hover:text-emerald-300 transition"
            >
              Artigos
            </button>
            <Link to="/" className="hover:text-emerald-300 transition">
              Sobre
            </Link>
          </nav>
        </div>

        <div className="mt-4 pt-4 border-t border-green-800 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2025 EcConnect</span>
          <span className="text-slate-400">
            Promovendo práticas sustentáveis na tecnologia 🌍
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
