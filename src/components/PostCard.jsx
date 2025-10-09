import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="block group">
      <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={post.imagem}
            alt={post.titulo}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-green-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
              TI Verde
            </span>
          </div>
        </div>

        <div className="p-8 flex-grow flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
            {post.titulo}
          </h3>

          <p className="text-gray-600 line-clamp-3 leading-relaxed flex-grow">
            {post.subtitulo}
          </p>

          <div className="pt-4">
            <span className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700 transition">
              Ler artigo completo
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
