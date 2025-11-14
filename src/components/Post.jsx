import Infographic from "./Infographic";
import { RenderInlineInfographic } from "./InlineInfographics";

// Componente para Cards de Resumo Visual
const SummaryCard = ({ icon, title, content, color = "green" }) => {
  const colorClasses = {
    green: "from-green-50 to-emerald-50 border-green-300 text-green-700",
    blue: "from-blue-50 to-cyan-50 border-blue-300 text-blue-700",
    purple: "from-purple-50 to-pink-50 border-purple-300 text-purple-700",
    orange: "from-orange-50 to-yellow-50 border-orange-300 text-orange-700",
  };

  return (
    <div
      className={`max-w-3xl mx-auto bg-gradient-to-br ${colorClasses[color]} border-2 rounded-2xl p-6 my-8 shadow-lg`}
    >
      <div className="flex items-start space-x-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <h4 className="text-lg font-bold mb-3">{title}</h4>
          <p className="text-gray-700 leading-relaxed text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

// Componente para Estatísticas Inline
const InlineStat = ({ value, label, emoji }) => {
  return (
    <div className="bg-green-600 text-white px-4 py-2 rounded-lg flex-1 min-w-[140px] max-w-[180px] text-center">
      {emoji && <div className="text-lg mb-1">{emoji}</div>}
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs opacity-90">{label}</div>
    </div>
  );
};

// Componente para Destaques/Callouts
const Callout = ({ type = "info", children }) => {
  const types = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-400",
      icon: "ℹ️",
      title: "Informação",
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-400",
      icon: "✅",
      title: "Importante",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-400",
      icon: "⚠️",
      title: "Atenção",
    },
    tip: {
      bg: "bg-purple-50",
      border: "border-purple-400",
      icon: "💡",
      title: "Dica",
    },
  };

  const style = types[type] || types.info;

  return (
    <div
      className={`${style.bg} border-l-4 ${style.border} p-6 my-8 rounded-r-xl shadow-md`}
    >
      <div className="flex items-start space-x-3">
        <span className="text-3xl">{style.icon}</span>
        <div className="flex-1">
          <div className="font-bold text-lg mb-2 text-gray-800">
            {style.title}
          </div>
          <div className="text-gray-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Componente para Mini Gráfico de Barra Inline
const MiniBarChart = ({ items }) => {
  return (
    <div className="bg-white rounded-xl p-6 my-8 border-2 border-green-200 shadow-lg">
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">
                {item.label}
              </span>
              <span className="text-sm font-bold text-green-600">
                {item.value}
              </span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Post = ({ post }) => {
  // Processa texto com negrito marcado por **texto**
  // Alterna entre negrito simples e background verde escuro
  const processarTexto = (texto) => {
    const partes = texto.split(/(\*\*.*?\*\*)/g);
    let highlightCount = 0;

    return partes.map((parte, i) => {
      if (parte.startsWith("**") && parte.endsWith("**")) {
        const conteudo = parte.slice(2, -2);
        highlightCount++;

        // Ser mais seletivo: apenas 1 a cada 5 recebe background verde
        // Palavras normais = negrito simples
        // Apenas frases muito importantes/longas = background verde
        const useBackground = highlightCount % 5 === 0 || conteudo.length > 50;

        if (useBackground) {
          return (
            <span
              key={i}
              className="text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded font-medium"
            >
              {conteudo}
            </span>
          );
        } else {
          return (
            <strong key={i} className="font-bold text-gray-900">
              {conteudo}
            </strong>
          );
        }
      }
      return parte;
    });
  };

  const paragrafos = post.textoCompleto.split("\n\n");

  // Função para inserir conteúdo visual baseado no contexto
  const renderConteudoEnriquecido = () => {
    const elementos = [];
    const post3Paragrafo1Processado = { current: false }; // Flag para Post 3
    const post7Paragrafo3Processado = { current: false }; // Flag para Post 7
    const post8Paragrafo1Processado = { current: false }; // Flag para Post 8
    const post8Paragrafo2Processado = { current: false }; // Flag para Post 8

    paragrafos.forEach((paragrafo, index) => {
      // Verifica se existe infográfico inline personalizado para este parágrafo
      const infographicKey = `paragrafo${index}`;
      const hasInfographic =
        post.infograficosInline && post.infograficosInline[infographicKey];

      // Layout especial para Post 1: paragrafo2 (TI vs Aviação) e paragrafo5 (Benefícios)
      if (post.id === 1 && (index === 2 || index === 5) && hasInfographic) {
        const isRightSide = index === 2; // TI vs Aviação à direita
        const isLeftSide = index === 5; // Benefícios à esquerda

        if (isRightSide) {
          // Layout: texto à esquerda, infográfico à direita
          elementos.push(
            <div
              key={`layout-${index}`}
              className="flex flex-col md:flex-row gap-4 mb-6 items-start"
            >
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {processarTexto(paragrafo)}
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-96">
                <RenderInlineInfographic
                  infographic={{
                    ...post.infograficosInline[infographicKey],
                    compact: true,
                  }}
                />
              </div>
            </div>
          );
          // Badge separador após o layout
          elementos.push(
            <div key={`badge-${index}`} className="my-4 text-center">
              <div className="inline-block bg-green-50 px-4 py-2 rounded-full border-2 border-green-300">
                <p className="text-xs font-semibold text-gray-800">
                  ⚖️ {post.infograficosInline[infographicKey].data.description}
                </p>
              </div>
            </div>
          );
        } else if (isLeftSide) {
          // Layout: infográfico à esquerda, texto à direita (espelhado)
          elementos.push(
            <div
              key={`layout-${index}`}
              className="flex flex-col md:flex-row gap-4 mb-6 items-start"
            >
              <div className="flex-shrink-0 w-full md:w-96 order-2 md:order-1">
                <RenderInlineInfographic
                  infographic={{
                    ...post.infograficosInline[infographicKey],
                    compact: true,
                  }}
                />
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {processarTexto(paragrafo)}
                </p>
              </div>
            </div>
          );
        }
      } else if (post.id === 3 && index === 1) {
        // Para Post 3, após o segundo parágrafo, inserir o infográfico de stats
        // Renderizar o parágrafo normalmente primeiro
        elementos.push(
          <p
            key={`p-${index}`}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            {processarTexto(paragrafo)}
          </p>
        );
      } else if (post.id === 3 && index === 2) {
        // Para Post 3, parágrafo 3 (index 2) e 4 (Free Cooling) junto com Free Cooling à direita
        const freeCoolingKey = "paragrafo4";
        const hasFreeCooling =
          post.infograficosInline && post.infograficosInline[freeCoolingKey];
        const paragrafoFreeCooling = paragrafos[4]; // Parágrafo sobre Free Cooling (index 4)

        elementos.push(
          <div
            key={`layout-freecooling-${index}`}
            className="flex flex-col md:flex-row gap-4 mb-6 md:items-stretch items-start"
          >
            <div className="flex-1 space-y-6 flex flex-col md:h-full justify-end">
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {processarTexto(paragrafo)}
                </p>
                {paragrafoFreeCooling && (
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {processarTexto(paragrafoFreeCooling)}
                  </p>
                )}
              </div>
            </div>
            {hasFreeCooling && (
              <div className="flex-shrink-0 w-full md:w-[420px] flex items-start">
                <RenderInlineInfographic
                  infographic={{
                    ...post.infograficosInline[freeCoolingKey],
                    compact: true,
                  }}
                />
              </div>
            )}
          </div>
        );
      } else if (post.id === 3 && index === 4) {
        // Para Post 3, pular o parágrafo 4 (Free Cooling) pois já foi renderizado no index 2
        // Não renderizar nada - o parágrafo já foi incluído no layout do index 2
      } else if (post.id === 3 && index === 5 && hasInfographic) {
        // Layout especial para Post 3: paragrafo5 (IA) à esquerda
        elementos.push(
          <div
            key={`layout-${index}`}
            className="flex flex-col md:flex-row gap-4 mb-6 md:items-stretch items-start"
          >
            <div className="flex-shrink-0 w-full md:w-96 order-2 md:order-1 flex items-start">
              <RenderInlineInfographic
                infographic={{
                  ...post.infograficosInline[infographicKey],
                  compact: true,
                }}
              />
            </div>
            <div className="flex-1 order-1 md:order-2 flex flex-col md:h-full justify-end">
              <p className="text-gray-700 text-lg leading-relaxed">
                {processarTexto(paragrafo)}
              </p>
            </div>
          </div>
        );
      } else if (
        post.id === 6 &&
        (index === 2 || index === 4) &&
        hasInfographic
      ) {
        // Layout especial para Post 6: paragrafo3 (Microsoft) à esquerda e paragrafo5 (Investimento) à direita
        const isLeftSide = index === 2; // Microsoft à esquerda
        const isRightSide = index === 4; // Investimento à direita

        if (isRightSide) {
          // Layout: texto à esquerda, infográfico à direita
          elementos.push(
            <div
              key={`layout-${index}`}
              className="flex flex-col md:flex-row gap-4 mb-6 items-start"
            >
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {processarTexto(paragrafo)}
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-96">
                <RenderInlineInfographic
                  infographic={{
                    ...post.infograficosInline[infographicKey],
                    compact: true,
                  }}
                />
              </div>
            </div>
          );
          // Badge separador após o layout
          elementos.push(
            <div key={`badge-${index}`} className="my-4 text-center">
              <div className="inline-block bg-green-50 px-4 py-2 rounded-full border-2 border-green-300">
                <p className="text-xs font-semibold text-gray-800">
                  ⚖️ {post.infograficosInline[infographicKey].data.description}
                </p>
              </div>
            </div>
          );
        } else if (isLeftSide) {
          // Layout: infográfico à esquerda, texto à direita (espelhado)
          elementos.push(
            <div
              key={`layout-${index}`}
              className="flex flex-col md:flex-row gap-4 mb-6 items-start"
            >
              <div className="flex-shrink-0 w-full md:w-96 order-2 md:order-1">
                <RenderInlineInfographic
                  infographic={{
                    ...post.infograficosInline[infographicKey],
                    compact: true,
                  }}
                />
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {processarTexto(paragrafo)}
                </p>
              </div>
            </div>
          );
        }
      } else if (post.id === 5 && index === 3 && hasInfographic) {
        // Layout especial para Post 5: paragrafo4 (Consolidação de Espaço) à esquerda
        elementos.push(
          <div
            key={`layout-${index}`}
            className="flex flex-col md:flex-row gap-4 mb-6 md:items-stretch items-start"
          >
            <div className="flex-shrink-0 w-full md:w-96 order-2 md:order-1 flex items-start">
              <RenderInlineInfographic
                infographic={{
                  ...post.infograficosInline[infographicKey],
                  compact: true,
                }}
              />
            </div>
            <div className="flex-1 order-1 md:order-2 flex flex-col md:h-full justify-end pt-40">
              <p className="text-gray-700 text-lg leading-relaxed">
                {processarTexto(paragrafo)}
              </p>
            </div>
          </div>
        );
      } else if (post.id === 7 && index === 1 && hasInfographic) {
        // Layout especial para Post 7: paragrafo2 (DeepMind) à direita
        // Layout: texto à esquerda, infográfico à direita
        elementos.push(
          <div
            key={`layout-${index}`}
            className="flex flex-col md:flex-row gap-4 mb-6 items-start"
          >
            <div className="flex-1">
              <p className="text-gray-700 text-lg leading-relaxed">
                {processarTexto(paragrafo)}
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-96">
              <RenderInlineInfographic
                infographic={{
                  ...post.infograficosInline[infographicKey],
                  compact: true,
                }}
              />
            </div>
          </div>
        );
        // Badge separador após o layout
        elementos.push(
          <div key={`badge-${index}`} className="my-4 text-center">
            <div className="inline-block bg-green-50 px-4 py-2 rounded-full border-2 border-green-300">
              <p className="text-xs font-semibold text-gray-800">
                🤖{" "}
                {post.infograficosInline[infographicKey].data.impact ||
                  "DeepMind: Revolução no Resfriamento"}
              </p>
            </div>
          </div>
        );
      } else if (post.id === 7 && index === 3 && hasInfographic) {
        // Layout especial para Post 7: paragrafo4 (IA Aplicada) à direita junto com paragrafo anterior
        const paragrafoAnterior = paragrafos[2]; // Parágrafo 3 (index 2)
        elementos.push(
          <div
            key={`layout-aiUseCases-${index}`}
            className="flex flex-col md:flex-row gap-4 mb-6 items-start"
          >
            <div className="flex-1 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {processarTexto(paragrafoAnterior)}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {processarTexto(paragrafo)}
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-[420px]">
              <RenderInlineInfographic
                infographic={{
                  ...post.infograficosInline[infographicKey],
                  compact: true,
                }}
              />
            </div>
          </div>
        );
        post7Paragrafo3Processado.current = true;
      } else if (post.id === 7 && index === 2) {
        // Para Post 7, verificar se o próximo parágrafo (index 3) vai processar este junto
        const proximoHasInfographic =
          post.infograficosInline && post.infograficosInline["paragrafo3"];
        // Se o próximo parágrafo tem infográfico e vai processar este junto, pular
        if (proximoHasInfographic) {
          return; // Pular renderização deste parágrafo
        }
        // Caso contrário, renderizar normalmente
        elementos.push(
          <p
            key={`p-${index}`}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            {processarTexto(paragrafo)}
          </p>
        );
      } else if (post.id === 7 && index === 4 && hasInfographic) {
        // Layout especial para Post 7: paragrafo5 (Potencial Global) à esquerda
        elementos.push(
          <div
            key={`layout-${index}`}
            className="flex flex-col md:flex-row gap-4 mb-6 md:items-stretch items-start"
          >
            <div className="flex-shrink-0 w-full md:w-96 order-2 md:order-1 flex items-start">
              <RenderInlineInfographic
                infographic={{
                  ...post.infograficosInline[infographicKey],
                  compact: true,
                }}
              />
            </div>
            <div className="flex-1 order-1 md:order-2 flex flex-col md:h-full justify-end pt-28">
              <p className="text-gray-700 text-lg leading-relaxed">
                {processarTexto(paragrafo)}
              </p>
            </div>
          </div>
        );
      } else if (post.id === 8 && index === 0) {
        // Para Post 8, verificar se o próximo parágrafo (index 1) vai processar este junto
        const proximoHasInfographic =
          post.infograficosInline && post.infograficosInline["paragrafo1"];
        // Se o próximo parágrafo tem infográfico e vai processar este junto, pular
        if (proximoHasInfographic) {
          return; // Pular renderização deste parágrafo
        }
        // Caso contrário, renderizar normalmente
        elementos.push(
          <p
            key={`p-${index}`}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            {processarTexto(paragrafo)}
          </p>
        );
      } else if (post.id === 8 && index === 1 && hasInfographic) {
        // Layout especial para Post 8: paragrafo2 (Métricas) à direita junto com paragrafo anterior
        const paragrafoAnterior = paragrafos[0]; // Parágrafo 1 (index 0)
        elementos.push(
          <div
            key={`layout-keyMetrics-${index}`}
            className="flex flex-col md:flex-row gap-4 mb-6 items-start"
          >
            <div className="flex-1 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {processarTexto(paragrafoAnterior)}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {processarTexto(paragrafo)}
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-[420px]">
              <RenderInlineInfographic
                infographic={{
                  ...post.infograficosInline[infographicKey],
                  compact: true,
                }}
              />
            </div>
          </div>
        );
        post8Paragrafo1Processado.current = true;
        // Não marcar post8Paragrafo2Processado aqui porque o paragrafo2 será processado no index 2
      } else if (post.id === 8 && index === 1) {
        // Para Post 8, verificar se o próximo parágrafo (index 2) vai processar este junto
        const proximoHasPueProgress =
          post.infograficosInline && post.infograficosInline["paragrafo2"];
        // Se o próximo parágrafo tem PUE Progress e vai processar este junto, pular
        if (proximoHasPueProgress && !post8Paragrafo2Processado.current) {
          return; // Pular renderização deste parágrafo
        }
        // Caso contrário, renderizar normalmente
        elementos.push(
          <p
            key={`p-${index}`}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            {processarTexto(paragrafo)}
          </p>
        );
      } else if (post.id === 8 && index === 2) {
        // Para Post 8, parágrafo 3 (index 2) junto com PUE Progress à direita
        const pueProgressKey = "paragrafo2";
        const hasPueProgress =
          post.infograficosInline && post.infograficosInline[pueProgressKey];
        const paragrafoAnterior = paragrafos[1]; // Parágrafo 2 (index 1)

        // Verificar se o parágrafo 2 já foi processado
        if (!post8Paragrafo2Processado.current && hasPueProgress) {
          elementos.push(
            <div
              key={`layout-pueProgress-${index}`}
              className="flex flex-col md:flex-row gap-4 mb-6 items-start"
            >
              <div className="flex-1 space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {processarTexto(paragrafoAnterior)}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {processarTexto(paragrafo)}
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-[420px]">
                <RenderInlineInfographic
                  infographic={{
                    ...post.infograficosInline[pueProgressKey],
                    compact: true,
                  }}
                />
              </div>
            </div>
          );
          post8Paragrafo2Processado.current = true;
        } else {
          // Se o parágrafo 2 já foi processado ou não tem PUE Progress, renderizar apenas o parágrafo 3
          elementos.push(
            <p
              key={`p-${index}`}
              className="text-gray-700 text-lg leading-relaxed mb-6"
            >
              {processarTexto(paragrafo)}
            </p>
          );
        }
      } else if (post.id === 8 && index === 6 && hasInfographic) {
        // Layout especial para Post 8: paragrafo7 (ESG Investment) à esquerda
        elementos.push(
          <div
            key={`layout-${index}`}
            className="flex flex-col md:flex-row gap-4 mb-6 md:items-stretch items-start"
          >
            <div className="flex-shrink-0 w-full md:w-96 order-2 md:order-1">
              <RenderInlineInfographic
                infographic={{
                  ...post.infograficosInline[infographicKey],
                  compact: true,
                }}
              />
            </div>
            <div className="flex-1 order-1 md:order-2 flex flex-col justify-end">
              <p className="text-gray-700 text-lg leading-relaxed">
                {processarTexto(paragrafo)}
              </p>
            </div>
          </div>
        );
      } else if (hasInfographic) {
        // Layout normal para outros casos
        // Layout normal: parágrafo seguido de infográfico
        elementos.push(
          <p
            key={`p-${index}`}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            {processarTexto(paragrafo)}
          </p>
        );

        elementos.push(
          <RenderInlineInfographic
            key={`infographic-${index}`}
            infographic={post.infograficosInline[infographicKey]}
          />
        );
      } else {
        // Caso sem infográfico: apenas o parágrafo
        elementos.push(
          <p
            key={`p-${index}`}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            {processarTexto(paragrafo)}
          </p>
        );
      }

      // Fallback: Insere elementos visuais estrategicamente baseados no artigo (para artigos sem infográficos inline personalizados)
      // Artigos 1, 2 e 3 usam APENAS infográficos personalizados do JSON
      // (componentes genéricos removidos para evitar sobrecarga visual)

      // Para o quarto artigo (Economia Circular)
      if (post.id === 4) {
        if (index === 1) {
          elementos.push(
            <div
              key={`stats-${index}`}
              className="flex flex-wrap justify-center gap-4 my-10"
            ></div>
          );
        }
        if (index === 2) {
          elementos.push(
            <SummaryCard
              key={`sum-${index}`}
              icon="♻️"
              title="Resumo: Crise do Lixo Eletrônico"
              content="Apenas 17,4% do e-waste global foi reciclado adequadamente em 2023. Mais de 44 milhões de toneladas de materiais valiosos foram descartados incorretamente, representando $57 bilhões em materiais recuperáveis perdidos."
              color="purple"
            />
          );
        }
        if (index === 4) {
          elementos.push(
            <Callout key={`call-${index}`} type="success">
              A Oracle recicla ou reutiliza 99,7% do hardware obsoleto através
              de seu programa robusto de economia circular.
            </Callout>
          );
        }
      }

      // Para o quinto artigo (Virtualização)
      if (post.id === 5) {
        if (index === 1) {
          elementos.push(
            <SummaryCard
              key={`sum-${index}`}
              icon="🖥️"
              title="Resumo: Eficiência através da Virtualização"
              content="Virtualização aumenta utilização de servidores de 10-15% para 70-80%, reduzindo o número de servidores necessários em até 80% e economizando 80% nos custos de energia."
              color="blue"
            />
          );
        }
        if (index === 3) {
          elementos.push(
            <MiniBarChart
              key={`chart-${index}`}
              items={[
                {
                  label: "Redução de Servidores",
                  value: "80%",
                  percentage: 80,
                },
                { label: "Economia de Energia", value: "80%", percentage: 80 },
                { label: "Redução de TCO", value: "50%", percentage: 50 },
                { label: "Redução de CO₂", value: "60%", percentage: 60 },
              ]}
            />
          );
        }
        if (index === 5) {
          elementos.push(
            <Callout key={`call-${index}`} type="tip">
              Containers (Docker, Kubernetes) levam a virtualização ainda mais
              longe, permitindo densidade maior e utilização mais eficiente de
              recursos.
            </Callout>
          );
        }
      }

      // Para o sexto artigo (Energia Renovável)
      if (post.id === 6) {
        if (index === 1) {
          elementos.push(
            <div
              key={`stats-${index}`}
              className="flex flex-wrap justify-center gap-4 my-10"
            >
              <InlineStat value="100%" label="Oracle Europa" emoji="⚡" />
              <InlineStat value="100%" label="Google 2017" emoji="☀️" />
              <InlineStat value="80%" label="Oracle Global" emoji="🌍" />
            </div>
          );
        }
        if (index === 2) {
          elementos.push(
            <SummaryCard
              key={`sum-${index}`}
              icon="🌞"
              title="Resumo: Liderança em Energia Renovável"
              content="Grandes provedores de cloud lideram a transição energética. Google alcançou 100% de energia renovável em 2017. Microsoft será carbono negativo até 2030. Amazon é o maior comprador corporativo de energia renovável do mundo."
              color="green"
            />
          );
        }
        if (index === 4) {
          elementos.push(
            <Callout key={`call-${index}`} type="success">
              A Apple opera com 100% de energia renovável desde 2018 e trabalha
              para tornar toda sua cadeia de suprimentos neutra em carbono até
              2030.
            </Callout>
          );
        }
      }

      // Para o sétimo artigo (IA e ML)
      if (post.id === 7) {
        if (index === 2) {
          elementos.push(
            <div
              key={`stats-${index}`}
              className="flex flex-wrap justify-center gap-4"
            >
              <InlineStat
                value="40%"
                label="Economia Resfriamento"
                emoji="❄️"
              />
              <InlineStat value="4%" label="Redução Emissões" emoji="🌍" />
              <InlineStat value="20-30%" label="Vida Útil +" emoji="⚙️" />
            </div>
          );
        }
        if (index === 3) {
          elementos.push(
            <MiniBarChart
              key={`chart-${index}`}
              items={[
                {
                  label: "Otimização Data Centers",
                  value: "30-40%",
                  percentage: 40,
                },
                { label: "Smart Grids", value: "20-30%", percentage: 30 },
                {
                  label: "Agricultura de Precisão",
                  value: "15-25%",
                  percentage: 25,
                },
                { label: "Logística", value: "15-20%", percentage: 20 },
              ]}
            />
          );
        }
        if (index === 5) {
          elementos.push(
            <Callout key={`call-${index}`} type="warning">
              Treinar modelos grandes de IA pode emitir tanto CO₂ quanto cinco
              carros durante toda sua vida útil. Por isso, técnicas como
              transfer learning e hardware especializado são essenciais.
            </Callout>
          );
        }
      }

      // Para o oitavo artigo (Medição)
      if (post.id === 8) {
        if (index === 0) {
          elementos.push(
            <Callout key={`call-${index}`} type="info">
              "O que não é medido não é gerenciado" - Métricas precisas e
              transparentes são essenciais para identificar oportunidades de
              melhoria e demonstrar compromisso aos stakeholders.
            </Callout>
          );
        }
        if (index === 1) {
          elementos.push(
            <SummaryCard
              key={`sum-${index}`}
              icon="📊"
              title="Resumo: Métricas Essenciais de Sustentabilidade"
              content="PUE (eficiência energética), CUE (emissões de carbono), WUE (uso de água) são métricas fundamentais. Média global de PUE é 1.58, mas melhores data centers alcançam 1.1-1.2."
              color="blue"
            />
          );
        }
        if (index === 2) {
          elementos.push(
            <div
              key={`stats-${index}`}
              className="flex flex-wrap justify-center gap-4 my-10"
            >
              <InlineStat value="1.58" label="PUE Médio Global" emoji="📊" />
              <InlineStat value="1.1-1.2" label="PUE Ideal" emoji="✨" />
              <InlineStat value="$35 Tri" label="Ativos ESG" emoji="💼" />
            </div>
          );
        }
        if (index === 5) {
          elementos.push(
            <Callout key={`call-${index}`} type="success">
              Investidores ESG gerenciam mais de $35 trilhões em ativos e
              empresas com melhores scores ESG tendem a ter melhor desempenho no
              mercado.
            </Callout>
          );
        }
      }
    });

    return elementos;
  };

  return (
    <article className="max-w-5xl mx-auto py-12 px-4">
      {/* Imagem do Post com Overlay */}
      <div className="mb-16 relative">
        <img
          src={post.imagem}
          alt={post.titulo}
          className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full">
          <span className="text-green-700 font-bold text-sm uppercase tracking-wide">
            🌱 TI Verde
          </span>
        </div>
      </div>

      {/* Título e Subtítulo */}
      <div className="mb-16 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          {post.titulo}
        </h1>
        <p className="text-2xl text-gray-600 font-light leading-relaxed border-l-4 border-green-500 pl-6">
          {post.subtitulo}
        </p>
      </div>

      {/* Divider Decorativo */}
      <div className="flex items-center gap-3 mb-16">
        <div className="h-1 flex-1 bg-gradient-to-r from-green-600 to-transparent rounded-full"></div>
        <span className="text-3xl">🌿</span>
        <div className="h-1 flex-1 bg-gradient-to-l from-green-600 to-transparent rounded-full"></div>
      </div>

      {/* Conteúdo Principal Enriquecido */}
      <div className="prose prose-xl max-w-none">
        {renderConteudoEnriquecido()}
      </div>

      {/* Infográficos Principais */}
      {post.infograficos && post.infograficos.length > 0 && (
        <div className="my-20 max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📊 Dados e Estatísticas
            </h2>
            <p className="text-lg text-gray-600">
              Visualizações detalhadas dos impactos e benefícios
            </p>
          </div>
          {post.id === 3 ? (
            // Post 3: mostrar o primeiro infográfico principal na seção principal
            post.infograficos && post.infograficos.length > 0 ? (
              <div className="space-y-8">
                <Infographic
                  data={post.infograficos[0].data}
                  title={post.infograficos[0].title}
                  type={post.infograficos[0].type}
                />
              </div>
            ) : null
          ) : post.infograficos.length === 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {post.infograficos.map((infografico, index) => (
                <div key={index} className="w-full flex">
                  <Infographic
                    data={infografico.data}
                    title={infografico.title}
                    type={infografico.type}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
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
        </div>
      )}

      {/* Divider */}
      <div className="mt-20 mb-12 border-t-2 border-gray-200"></div>

      {/* Fontes e Referências */}
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl border-2 border-gray-300 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-600 p-2.5 rounded-xl">
            <svg
              className="w-6 h-6 text-white"
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
          </div>
          <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
            📚 Fontes e Referências Científicas
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {post.comentarios.split("|").map((fonte, index) => {
            const fonteTexto = fonte.trim().replace(/^Fontes?:\s*/i, "");
            if (!fonteTexto) return null;

            // Criar URL de busca genérica (pode ser ajustado depois com URLs específicas)
            const searchQuery = encodeURIComponent(fonteTexto);
            const searchUrl = `https://www.google.com/search?q=${searchQuery}`;

            return (
              <a
                key={index}
                href={searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:shadow-md transition-all group"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-xs flex-shrink-0 mt-0.5 shadow-md">
                  {index + 1}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed flex-grow group-hover:text-green-700 transition-colors">
                  {fonteTexto}
                </p>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-green-600 flex-shrink-0 mt-1 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            );
          })}
        </div>
        <div className="mt-6 pt-6 border-t-2 border-gray-300">
          <p className="text-xs text-gray-600 italic flex items-center gap-2">
            <span className="text-lg">📊</span>
            <span>
              Todos os dados e estatísticas apresentados neste artigo são
              baseados em pesquisas científicas e relatórios de organizações
              reconhecidas internacionalmente.
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Post;
