import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleArtigosClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Se já estamos na home, apenas faz scroll
      const artigosSection = document.getElementById("artigos");
      if (artigosSection) {
        artigosSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se estamos em outra página, navega para home e depois faz scroll
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Sobre */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">EcConnect</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Blog dedicado a disseminar conhecimento sobre práticas
              sustentáveis na tecnologia da informação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#artigos"
                  onClick={handleArtigosClick}
                  className="text-gray-400 hover:text-green-400 transition cursor-pointer"
                >
                  Artigos
                </a>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Temas */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Temas</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">☁️ Cloud Computing</li>
              <li className="text-gray-400">⚡ Eficiência Energética</li>
              <li className="text-gray-400">♻️ Economia Circular</li>
              <li className="text-gray-400">🌱 Sustentabilidade</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center space-y-2">
          <p className="text-gray-400">
            © 2025 EcConnect - Blog sobre TI Verde e Sustentabilidade
          </p>
          <p className="text-gray-500 text-sm">
            Promovendo práticas sustentáveis na tecnologia 🌍
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
