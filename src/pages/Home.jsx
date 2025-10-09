import PostCard from '../components/PostCard';
import postsData from '../data/posts.json';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              TI Verde e Sustentabilidade
            </h1>
            <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
              Descubra como a tecnologia pode ser aliada do meio ambiente através de práticas sustentáveis e inovadoras
            </p>
            <div className="pt-6">
              <a 
                href="#artigos" 
                className="inline-block bg-white text-green-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Explorar Artigos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center space-y-8">
            <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Nossa Missão
            </div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Disseminando Conhecimento sobre TI Verde
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              O <span className="font-semibold text-green-700">EcConnect</span> é um blog dedicado a compartilhar conhecimento 
              sobre práticas sustentáveis na tecnologia da informação. Nossa missão é educar profissionais e empresas 
              sobre como a TI pode contribuir para um futuro mais verde e sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre TI Verde Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                O que é TI Verde?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Green IT, ou TI Verde, refere-se ao estudo e prática de uso eficiente e ecologicamente responsável 
                dos recursos de computação. Engloba o design, fabricação, uso e descarte de computadores, servidores 
                e sistemas associados de forma sustentável.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A TI Verde busca minimizar o impacto ambiental das operações através da redução do consumo de energia, 
                diminuição da emissão de gases de efeito estufa, uso de materiais recicláveis e implementação de 
                práticas que prolonguem a vida útil dos equipamentos.
              </p>
              <div className="pt-4">
                <a 
                  href="#artigos" 
                  className="inline-flex items-center text-green-700 font-semibold text-lg hover:text-green-800 transition"
                >
                  Saiba mais 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg space-y-3 hover:shadow-xl transition">
                <div className="text-green-600 text-4xl">🌱</div>
                <h3 className="text-xl font-bold text-gray-900">Sustentável</h3>
                <p className="text-gray-600">Práticas eco-friendly na TI</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg space-y-3 hover:shadow-xl transition mt-8">
                <div className="text-green-600 text-4xl">⚡</div>
                <h3 className="text-xl font-bold text-gray-900">Eficiente</h3>
                <p className="text-gray-600">Redução de consumo energético</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg space-y-3 hover:shadow-xl transition">
                <div className="text-green-600 text-4xl">♻️</div>
                <h3 className="text-xl font-bold text-gray-900">Circular</h3>
                <p className="text-gray-600">Reutilização e reciclagem</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg space-y-3 hover:shadow-xl transition mt-8">
                <div className="text-green-600 text-4xl">☁️</div>
                <h3 className="text-xl font-bold text-gray-900">Cloud</h3>
                <p className="text-gray-600">Computação em nuvem verde</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-green-700 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Impacto Real da TI Verde</h2>
            <p className="text-xl text-green-100">Dados que mostram a importância das práticas sustentáveis</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="text-7xl font-bold">100%</div>
              <div className="h-1 w-24 bg-green-400 mx-auto rounded-full"></div>
              <p className="text-xl font-medium">
                Data centers Oracle na Europa com energia 100% renovável
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-7xl font-bold">99.7%</div>
              <div className="h-1 w-24 bg-green-400 mx-auto rounded-full"></div>
              <p className="text-xl font-medium">
                Hardware Oracle reciclado ou reutilizado ao fim da vida útil
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-7xl font-bold">80%</div>
              <div className="h-1 w-24 bg-green-400 mx-auto rounded-full"></div>
              <p className="text-xl font-medium">
                Redução potencial de energia migrando para nuvem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Temas Abordados */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
              Conteúdo
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Temas que Abordamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore diversos aspectos da TI Verde e descubra como implementar práticas sustentáveis em sua organização
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition space-y-4">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                ☁️
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cloud Computing</h3>
              <p className="text-gray-600">Computação em nuvem sustentável e eficiência energética</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition space-y-4">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                🔋
              </div>
              <h3 className="text-xl font-bold text-gray-900">Energia Renovável</h3>
              <p className="text-gray-600">Data centers alimentados por fontes limpas de energia</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition space-y-4">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                ♻️
              </div>
              <h3 className="text-xl font-bold text-gray-900">Economia Circular</h3>
              <p className="text-gray-600">Reutilização, reciclagem e prolongamento de vida útil</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition space-y-4">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                🤖
              </div>
              <h3 className="text-xl font-bold text-gray-900">IA e Sustentabilidade</h3>
              <p className="text-gray-600">Inteligência artificial para otimização de recursos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section id="artigos" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
              Blog
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Artigos Recentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aprenda sobre práticas sustentáveis na tecnologia através de nossos artigos detalhados e baseados em fontes confiáveis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {postsData.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center space-y-8">
            <h2 className="text-5xl font-bold leading-tight">
              Junte-se ao Movimento Verde
            </h2>
            <p className="text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              A transformação começa com conhecimento. Explore nossos artigos e descubra como 
              implementar práticas sustentáveis em sua organização de TI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <a 
                href="#artigos" 
                className="bg-white text-green-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Explorar Artigos
              </a>
              <a 
                href="#" 
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-700 transition-all hover:scale-105"
              >
                Sobre o Projeto
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
