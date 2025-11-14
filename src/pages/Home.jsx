import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import postsData from "../data/posts.json";
import ScrollReveal from "../components/ScrollReveal";
import cipo2Svg from "../assets/cipo2.svg?raw";
import quadradoCipoSvg from "../assets/quadrado_cipo.svg?raw";
import folhaImg from "../assets/folha.png";
import lampadaImg from "../assets/lampada.png";

const sustainabilityFeatures = [
  {
    icon: "🌱",
    title: "Sustentável",
    description: "Práticas eco-friendly na TI",
    hasLeaf: true,
    showVines: true,
  },
  {
    icon: "⚡",
    title: "Eficiente",
    description: "Redução de consumo energético",
  },
  {
    icon: "♻️",
    title: "Circular",
    description: "Reutilização e reciclagem",
  },
  {
    icon: "☁️",
    title: "Cloud",
    description: "Computação em nuvem verde",
    reverseVines: true,
    showVines: true,
  },
];

const heroBadges = [
  {
    label: "TI Verde e Sustentabilidade",
    icon: "🌱",
    postId: 1,
    initialTop: 6,
    initialLeft: 16,
    initialRotate: 8,
    offsetX: "-190%",
    offsetY: "0%",
    delay: "0s",
    className:
      "bg-emerald-100 border-emerald-500 text-emerald-800 shadow-emerald-200",
  },
  {
    label: "Energia Renovável para Data Centers",
    icon: "⚡",
    postId: 6,
    initialTop: 55,
    initialLeft: 20,
    initialRotate: -5,
    offsetX: "0%",
    offsetY: "190%",
    delay: "0.1s",
    className: "bg-green-100 border-green-500 text-green-800 shadow-green-200",
  },
  {
    label: "Cloud Computing Sustentável",
    icon: "☁️",
    postId: 2,
    initialTop: 35,
    initialLeft: 65,
    initialRotate: 9,
    offsetX: "120%",
    offsetY: "0%",
    delay: "0.2s",
    className: "bg-lime-100 border-lime-500 text-lime-800 shadow-lime-200",
  },
  {
    label: "Economia Circular na TI",
    icon: "♻️",
    postId: 4,
    initialTop: 70,
    initialLeft: 58,
    initialRotate: -10,
    offsetX: "250%",
    offsetY: "0%",
    delay: "0.25s",
    className: "bg-amber-100 border-amber-500 text-amber-800 shadow-amber-200",
  },
  {
    label: "IA para Sustentabilidade",
    icon: "🤖",
    postId: 7,
    initialTop: 10,
    initialLeft: 72,
    initialRotate: 4,
    offsetX: "190%",
    offsetY: "0%",
    delay: "0.15s",
    className:
      "bg-orange-100 border-orange-500 text-orange-800 shadow-orange-200",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const badgesWrapperRef = useRef(null);
  const badgeRefs = useRef([]);
  const [badgeProgress, setBadgeProgress] = useState(0);
  const [layout, setLayout] = useState({ width: 0, badgeWidths: [] });

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!heroRef.current) {
        ticking = false;
        return;
      }

      const rect = heroRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const heroHeight = rect.height || 1;
      const targetBottom = viewportHeight * 0.35;
      const denominator = heroHeight - targetBottom;

      let raw;
      if (denominator <= 0) {
        const sectionTop = heroRef.current.offsetTop;
        const scrollY = window.scrollY;
        raw = (scrollY - sectionTop) / heroHeight;
      } else {
        raw = (heroHeight - rect.bottom) / denominator;
      }

      const clamped = Math.min(Math.max(raw, 0), 1);

      setBadgeProgress((prev) =>
        Math.abs(prev - clamped) > 0.01 ? clamped : prev
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      const width =
        badgesWrapperRef.current?.getBoundingClientRect().width || 0;
      const badgeWidths = badgeRefs.current.map(
        (el) => el?.getBoundingClientRect().width || 0
      );

      setLayout({ width, badgeWidths });
    };

    measure();
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  const totalBadges = heroBadges.length;
  const finalTop = 86;

  const handleBadgeClick = (postId) => {
    if (!postId) {
      return;
    }

    navigate(`/post/${postId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sumWidths = (count) =>
    layout.badgeWidths.slice(0, count).reduce((acc, w) => acc + w, 0);

  const measuredLayoutReady =
    layout.width > 0 &&
    layout.badgeWidths.length === totalBadges &&
    layout.badgeWidths.every((w) => w > 0);

  const fallbackMargin = 4;
  const fallbackGap = 3;
  const fallbackUsable = Math.max(
    0,
    100 - fallbackMargin * 2 - fallbackGap * Math.max(totalBadges - 1, 0)
  );
  const fallbackStep = totalBadges > 1 ? fallbackUsable / (totalBadges - 1) : 0;

  const getBadgeState = (badge, index) => {
    let targetLeftPercent =
      fallbackMargin + (fallbackStep + fallbackGap) * index;
    let targetLeftPx = null;
    let usePixels = false;

    if (measuredLayoutReady) {
      const totalBadgeWidth = layout.badgeWidths.reduce((acc, w) => acc + w, 0);
      const availableSpace = Math.max(layout.width - totalBadgeWidth, 0);
      const minGap = 16;
      const minMargin = 12;
      let gapPx = totalBadges > 1 ? minGap : 0;
      let marginPx = minMargin;
      const required = gapPx * Math.max(totalBadges - 1, 0) + marginPx * 2;

      if (required > availableSpace) {
        const minTotalMargins = minMargin * 2;
        const remaining = Math.max(availableSpace - minTotalMargins, 0);
        gapPx =
          totalBadges > 1
            ? Math.max(8, remaining / Math.max(totalBadges - 1, 1))
            : 0;
        marginPx = Math.max(
          minMargin,
          (availableSpace - gapPx * Math.max(totalBadges - 1, 0)) / 2
        );
      } else {
        marginPx = (availableSpace - gapPx * Math.max(totalBadges - 1, 0)) / 2;
      }

      marginPx = Math.max(marginPx, minMargin);

      const leftEdgePx =
        marginPx + sumWidths(index) + gapPx * Math.max(index, 0);
      const maxLeft = Math.max(layout.width - layout.badgeWidths[index], 0);
      targetLeftPx = Math.min(Math.max(leftEdgePx, 0), maxLeft);
      targetLeftPercent = (targetLeftPx / Math.max(layout.width, 1)) * 100;
      usePixels = true;
    }

    const lerp = (start, end) => start + (end - start) * badgeProgress;

    return {
      top: lerp(badge.initialTop, finalTop),
      leftPercent: lerp(badge.initialLeft, targetLeftPercent),
      leftPx:
        targetLeftPx !== null
          ? lerp((layout.width * badge.initialLeft) / 100, targetLeftPx)
          : null,
      rotate: lerp(badge.initialRotate, 0),
      usePixels,
    };
  };

  return (
    <div>
      {/* Hero Section */}
      <ScrollReveal>
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-950 flex items-center"
        >
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1496568816309-51d7c20e6d2d?w=1600&h=900&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="w-full h-[100vh] flex flex-col items-center px-6 pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 relative">
            <div className="flex flex-col w-full  text-center space-y-7 items-center">
              <h1 className="text-4xl md:text-6xl text-center max-w-[950px] font-black drop-shadow-xl">
                Propagando a{" "}
                <span className="text-amber-500/70">sustentabilidade</span> na
                tecnologia
              </h1>
              <p className="text-base md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
                Histórias, dados e práticas reais para transformar a TI em uma
                aliada do planeta.
              </p>
              <img
                src={lampadaImg}
                alt=""
                aria-hidden="true"
                className="absolute top-72 left-1/2 -translate-x-1/2 w-2/3 max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-xl z-0"
              />

              {/* Badges for small screens */}
              <div className="md:hidden flex flex-wrap justify-center gap-3 pt-6 relative z-10">
                {heroBadges.map((badge, index) => {
                  const state = getBadgeState(badge, index);
                  return (
                    <button
                      type="button"
                      key={`badge-mobile-${index}`}
                      onClick={() => handleBadgeClick(badge.postId)}
                      className={`px-4 py-2 rounded-full border text-sm font-semibold shadow-md inline-flex items-center gap-2 badge-float ${badge.className} cursor-pointer transition-transform duration-200 hover:[--badge-scale:1.05] focus:[--badge-scale:1.05] active:[--badge-scale:0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50`}
                      style={{
                        "--badge-rotate": `${state.rotate}deg`,
                        "--badge-offset-x": badge.offsetX,
                        "--badge-offset-y": badge.offsetY,
                        "--badge-delay": badge.delay,
                        "--badge-scale": 1,
                      }}
                    >
                      <span className="text-lg">{badge.icon}</span>
                      {badge.label}
                    </button>
                  );
                })}
              </div>

              {/* Scattered badges for md+ */}
              <div
                className="hidden md:block relative h-96 w-full mt-8 z-10"
                ref={badgesWrapperRef}
              >
                {heroBadges.map((badge, index) => {
                  const state = getBadgeState(badge, index);
                  return (
                    <button
                      type="button"
                      key={`badge-desktop-${index}`}
                      ref={(el) => (badgeRefs.current[index] = el)}
                      onClick={() => handleBadgeClick(badge.postId)}
                      className={`absolute px-5 py-3 rounded-full border text-sm font-semibold shadow-lg backdrop-blur-sm inline-flex items-center gap-3 badge-float ${badge.className} cursor-pointer transition-transform duration-200 hover:[--badge-scale:1.05] focus:[--badge-scale:1.05] active:[--badge-scale:0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50`}
                      style={{
                        top: `${state.top}%`,
                        left: state.usePixels
                          ? `${state.leftPx}px`
                          : `${state.leftPercent}%`,
                        boxShadow: `0 18px 35px -15px var(--tw-shadow-color)`,
                        "--badge-rotate": `${state.rotate}deg`,
                        "--badge-offset-x": badge.offsetX,
                        "--badge-offset-y": badge.offsetY,
                        "--badge-delay": badge.delay,
                        "--badge-scale": 1,
                      }}
                    >
                      <span className="text-lg">{badge.icon}</span>
                      {badge.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Missão Section */}
      <ScrollReveal>
        <section id="sobre" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center space-y-8">
              <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                Nossa Missão
              </div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Disseminando Conhecimento sobre TI Verde
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                O{" "}
                <span className="font-semibold text-green-700">EcConnect</span>{" "}
                é um blog dedicado a compartilhar conhecimento sobre práticas
                sustentáveis na tecnologia da informação. Nossa missão é educar
                profissionais e empresas sobre como a TI pode contribuir para um
                futuro mais verde e sustentável.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sobre TI Verde Section */}
      <ScrollReveal delay={80}>
        <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container mx-auto px-6 w-5/6">
            <div className="grid md:grid-cols-2 gap-32 items-center">
              <div className="space-y-6">
                <div className="flex items-stretch gap-5 sm:gap-6 relative">
                  <div className="hidden sm:block absolute inset-y-0 -left-6 md:-left-8 lg:-left-60 w-28 md:w-[350px] lg:w-[500px] z-10 pointer-events-none">
                    <div
                      className="h-full w-full [&>svg]:h-full [&>svg]:w-full [&>svg]:object-contain [&>svg]:block"
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{ __html: cipo2Svg }}
                    />
                  </div>
                  <div className="space-y-6 flex-1 pl-0 sm:pl-28 md:pl-16 lg:pl-20">
                    <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                      O que é <span className="text-green-600">TI Verde?</span>
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Green IT, ou TI Verde, refere-se ao estudo e prática de
                      uso eficiente e ecologicamente responsável dos recursos de
                      computação. Engloba o design, fabricação, uso e descarte
                      de computadores, servidores e sistemas associados de forma
                      sustentável.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      A TI Verde busca minimizar o impacto ambiental das
                      operações através da redução do consumo de energia,
                      diminuição da emissão de gases de efeito estufa, uso de
                      materiais recicláveis e implementação de práticas que
                      prolonguem a vida útil dos equipamentos.
                    </p>
                  </div>
                </div>
                <div className="pt-4 sm:pl-20 md:pl-24">
                  <a
                    href="#artigos"
                    className="inline-flex items-center text-green-700 font-semibold text-lg hover:text-green-800 transition"
                  >
                    Saiba mais
                    <svg
                      className="w-5 h-5 ml-2"
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
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                {sustainabilityFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`relative group isolation-isolate ${
                      index % 2 === 1 ? "mt-8" : ""
                    }`}
                    style={{ aspectRatio: "555 / 520" }}
                  >
                    {feature.showVines && (
                      <div
                        className="pointer-events-none absolute inset-0 z-20 overflow-visible"
                        aria-hidden="true"
                      >
                        <div
                          className="absolute -inset-4 md:-inset-5 lg:-inset-6"
                          style={{
                            transform: feature.reverseVines
                              ? "scaleX(-1)"
                              : "none",
                            transformOrigin: "center",
                          }}
                          dangerouslySetInnerHTML={{ __html: quadradoCipoSvg }}
                        />
                      </div>
                    )}
                    <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white/95 p-4 shadow-lg transition-all hover:shadow-2xl">
                      <div className="space-y-3">
                        <div className="text-green-600 text-4xl">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                    {feature.hasLeaf && (
                      <img
                        src={folhaImg}
                        alt=""
                        aria-hidden="true"
                        className="absolute -top-10 -left-12 w-16 drop-shadow-lg rotate-[-8deg] z-50"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Section */}
      <ScrollReveal delay={120}>
        <section className="py-24 bg-white text-black">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-24">
              <h2 className="text-emerald-900 text-5xl font-bold mb-4">
                Impacto <span className="text-emerald-600">Real</span> da TI
                Verde
              </h2>
              <p className="text-base text-black font-bold">
                Dados que mostram a importância das práticas sustentáveis
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="text-7xl font-bold text-emerald-800">400+</div>
                <div className="h-1 w-24 bg-green-400 mx-auto rounded-full"></div>
                <p className="text-lg font-medium">
                  Projetos solares e eólicos da Amazon, maior compradora
                  corporativa de energia renovável (2024)
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-7xl font-bold text-emerald-800">100%</div>
                <div className="h-1 w-24 bg-green-400 mx-auto rounded-full"></div>
                <p className="text-lg font-medium">
                  Data centers Oracle na Europa com energia 100% renovável
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-7xl font-bold text-emerald-800">40%</div>
                <div className="h-1 w-24 bg-green-400 mx-auto rounded-full"></div>
                <p className="text-lg font-medium">
                  Redução no consumo de energia para resfriamento dos data
                  centers com IA do Google DeepMind
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Temas Abordados */}
      <ScrollReveal delay={160}>
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
                Explore diversos aspectos da TI Verde e descubra como
                implementar práticas sustentáveis em sua organização
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition space-y-4">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  ☁️
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Cloud Computing
                </h3>
                <p className="text-gray-600">
                  Computação em nuvem sustentável e eficiência energética
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition space-y-4">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  🔋
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Energia Renovável
                </h3>
                <p className="text-gray-600">
                  Data centers alimentados por fontes limpas de energia
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition space-y-4">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  ♻️
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Economia Circular
                </h3>
                <p className="text-gray-600">
                  Reutilização, reciclagem e prolongamento de vida útil
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition space-y-4">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  🤖
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  IA e Sustentabilidade
                </h3>
                <p className="text-gray-600">
                  Inteligência artificial para otimização de recursos
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Posts Section */}
      <ScrollReveal delay={200}>
        <section
          id="artigos"
          className="py-24 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20">
              <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                Blog
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Artigos Recentes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Aprenda sobre práticas sustentáveis na tecnologia através de
                nossos artigos detalhados e baseados em fontes confiáveis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {postsData.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section - Voluntariado */}
      <ScrollReveal delay={240}>
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 text-emerald-900 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 max-w-3xl relative z-10">
            <div className="text-center space-y-6">
              {/* Badge */}
              <div className="inline-block bg-white/50 backdrop-blur-sm text-black px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wide border border-emerald">
                Seja um Escritor
              </div>

              {/* Main heading */}
              <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Junte-se ao{" "}
                <span className="relative">
                  <span className="relative z-10">Movimento</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-emerald-300/40 -rotate-1 z-0"></span>
                </span>
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed text-black">
                Estamos procurando pessoas interessadas em escrever sobre TI
                Verde e Sustentabilidade. Se você tem conhecimento e paixão pelo
                tema, envie seu email e vamos conversar!
              </p>

              {/* Email Form */}
              <form
                className="pt-6 max-w-lg mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  // Aqui você pode adicionar a lógica para enviar o email
                  console.log("Email recebido:", email);
                  alert(
                    "Obrigado pelo interesse! Entraremos em contato em breve."
                  );
                  e.target.reset();
                }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    className="flex-1 px-5 py-4 rounded-full bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all text-base font-medium shadow-lg"
                  />
                  <button
                    type="submit"
                    className="group relative bg-white text-green-700 px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-50 transition-all hover:scale-105 shadow-xl hover:shadow-emerald-900/50 inline-flex items-center justify-center gap-2 whitespace-nowrap hover:cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      Enviar
                    </span>
                  </button>
                </div>
                <p className="text-xs text-black/70 mt-3">
                  Ao enviar, você concorda em receber contato sobre
                  oportunidades de escrita voluntária.
                </p>
              </form>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Home;
