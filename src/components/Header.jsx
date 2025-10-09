import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleArtigosClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Se já estamos na home, apenas faz scroll
      const artigosSection = document.getElementById('artigos');
      if (artigosSection) {
        artigosSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estamos em outra página, navega para home e depois faz scroll
      navigate('/');
      setTimeout(() => {
        const artigosSection = document.getElementById('artigos');
        if (artigosSection) {
          artigosSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">EcConnect</h1>
              <p className="text-xs text-gray-500">Blog de TI Verde</p>
            </div>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 font-medium transition text-lg"
            >
              Home
            </Link>
            <a
              href="#artigos"
              onClick={handleArtigosClick}
              className="text-gray-700 hover:text-green-600 font-medium transition text-lg cursor-pointer"
            >
              Artigos
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
