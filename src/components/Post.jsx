import Infographic from "./Infographic";

const Post = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto py-12">
      {/* Imagem do Post */}
      <div className="mb-16">
        <img
          src={post.imagem}
          alt={post.titulo}
          className="w-full h-[200px] object-cover rounded-3xl shadow-2xl"
        />
      </div>

      {/* Categoria/Badge */}
      <div className="mb-8">
        <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
          TI Verde
        </span>
      </div>

      {/* Título e Subtítulo */}
      <div className="mb-16 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          {post.titulo}
        </h1>
        <p className="text-2xl text-gray-600 font-light leading-relaxed">
          {post.subtitulo}
        </p>
      </div>

      {/* Divider */}
      <div className="h-1 w-24 bg-green-600 rounded-full mb-16"></div>

      {/* Texto Principal */}
      <div className="prose prose-xl max-w-none space-y-8">
        {post.textoCompleto.split("\n\n").map((paragrafo, index) => {
          // Processa texto com negrito marcado por **texto**
          const processarTexto = (texto) => {
            const partes = texto.split(/(\*\*.*?\*\*)/g);
            return partes.map((parte, i) => {
              if (parte.startsWith("**") && parte.endsWith("**")) {
                return (
                  <strong key={i} className="font-bold text-gray-900">
                    {parte.slice(2, -2)}
                  </strong>
                );
              }
              return parte;
            });
          };

          return (
            <p key={index} className="text-gray-700 text-lg leading-relaxed">
              {processarTexto(paragrafo)}
            </p>
          );
        })}
      </div>

      {/* Infográficos */}
      {post.infograficos && post.infograficos.length > 0 && (
        <div className="my-16">
          {post.infograficos.map((infografico, index) => (
            <Infographic
              key={index}
              data={infografico.data}
              title={infografico.title}
              type={infografico.type}
            />
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="mt-20 mb-12 border-t-2 border-gray-200"></div>

      {/* Comentários de Rodapé / Fontes */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border-2 border-gray-300 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
            Fontes e Referências Científicas
          </h3>
        </div>
        <div className="space-y-3">
          {post.comentarios.split("|").map((fonte, index) => {
            const fonteTexto = fonte.trim().replace(/^Fontes?:\s*/i, "");
            if (!fonteTexto) return null;
            return (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 font-bold text-sm flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <p className="text-base text-gray-700 leading-relaxed flex-grow">
                  {fonteTexto}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-300">
          <p className="text-sm text-gray-600 italic">
            📊 Todos os dados e estatísticas apresentados neste artigo são
            baseados em pesquisas científicas e relatórios de organizações
            reconhecidas internacionalmente.
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-12 flex flex-wrap gap-3">
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          Sustentabilidade
        </span>
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          TI Verde
        </span>
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          Green IT
        </span>
      </div>
    </article>
  );
};

export default Post;
