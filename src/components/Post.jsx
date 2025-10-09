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
        {post.textoCompleto.split("\n\n").map((paragrafo, index) => (
          <p key={index} className="text-gray-700 text-lg leading-relaxed">
            {paragrafo}
          </p>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-20 mb-12 border-t-2 border-gray-200"></div>

      {/* Comentários de Rodapé / Fontes */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Fontes e Referências
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          {post.comentarios}
        </p>
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
