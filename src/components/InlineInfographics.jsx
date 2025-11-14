// Componentes de Infográficos Inline Personalizados e Específicos (Design Simplificado)

// SVG Icons Customizados
const ComputerIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <rect
      x="8"
      y="12"
      width="48"
      height="32"
      rx="2"
      fill="currentColor"
      opacity="0.2"
    />
    <rect
      x="8"
      y="12"
      width="48"
      height="28"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="32"
      y1="40"
      x2="32"
      y2="48"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="20"
      y1="48"
      x2="44"
      y2="48"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="32" cy="26" r="6" fill="currentColor" opacity="0.3" />
  </svg>
);

const PlaneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <path
      d="M10 32 L32 12 L54 32 L46 32 L46 52 L18 52 L18 32 Z"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M32 8 L56 32 M32 8 L8 32"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <rect
      x="20"
      y="28"
      width="24"
      height="24"
      rx="2"
      fill="currentColor"
      opacity="0.3"
    />
    <line
      x1="24"
      y1="38"
      x2="40"
      y2="38"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const LeafIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <path
      d="M32 8 Q48 12, 52 28 Q56 44, 32 56 Q8 44, 12 28 Q16 12, 32 8"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M32 8 Q48 12, 52 28 Q56 44, 32 56"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M32 8 Q16 12, 12 28 Q8 44, 32 56"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="32"
      y1="20"
      x2="32"
      y2="50"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const CloudIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <ellipse
      cx="32"
      cy="32"
      rx="20"
      ry="12"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M16 32 Q16 24, 24 24 Q24 18, 32 18 Q40 18, 40 24 Q48 24, 48 32 Q48 40, 40 40 L24 40 Q16 40, 16 32"
      fill="currentColor"
      opacity="0.3"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const RecycleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <path
      d="M32 12 L20 28 L26 28 L26 36 L38 36 L38 28 L44 28 Z"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M32 16 L24 28 M32 16 L40 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M28 32 L28 42 L36 42 L36 32"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="32" cy="24" r="3" fill="currentColor" />
  </svg>
);

// 1. Comparação de Impacto (TI vs Aviação)
export const ImpactComparison = ({ title, data, compact = false }) => {
  if (compact) {
    return (
      <div className="flex-shrink-0 w-full md:w-96">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">💻</span>
          <h4 className="text-base font-bold text-gray-800">{title}</h4>
          <span className="text-2xl">✈️</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="text-center">
              <ComputerIcon className="w-12 h-12 mx-auto mb-2 text-blue-500" />
              <h5 className="text-sm font-bold text-gray-800 mb-1.5">
                {data.sector1.name}
              </h5>
              <div className="text-3xl font-black text-blue-600 mb-1">
                {data.sector1.percentage}%
              </div>
              <div className="text-xs text-gray-600">das emissões globais</div>
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
            <div className="text-center">
              <PlaneIcon className="w-12 h-12 mx-auto mb-2 text-orange-500" />
              <h5 className="text-sm font-bold text-gray-800 mb-1.5">
                {data.sector2.name}
              </h5>
              <div className="text-3xl font-black text-orange-600 mb-1">
                {data.sector2.percentage}%
              </div>
              <div className="text-xs text-gray-600">das emissões globais</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="my-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="text-3xl">💻</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">✈️</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
          <div className="text-center">
            <ComputerIcon className="w-16 h-16 mx-auto mb-2 text-blue-500" />
            <h5 className="text-sm font-bold text-gray-800 mb-2">
              {data.sector1.name}
            </h5>
            <div className="text-4xl font-black text-blue-600 mb-1">
              {data.sector1.percentage}%
            </div>
            <div className="text-xs text-gray-600">das emissões globais</div>
          </div>
        </div>
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <div className="text-center">
            <PlaneIcon className="w-16 h-16 mx-auto mb-2 text-orange-500" />
            <h5 className="text-sm font-bold text-gray-800 mb-2">
              {data.sector2.name}
            </h5>
            <div className="text-4xl font-black text-orange-600 mb-1">
              {data.sector2.percentage}%
            </div>
            <div className="text-xs text-gray-600">das emissões globais</div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
        <p className="text-sm font-semibold text-gray-800">
          ⚖️ {data.description}
        </p>
      </div>
    </div>
  );
};

// 2. Os 4 Pilares da TI Verde
export const PillarsDiagram = ({ title, data }) => {
  const colorClasses = {
    yellow: "bg-yellow-100 border-yellow-400",
    green: "bg-green-100 border-green-400",
    blue: "bg-blue-100 border-blue-400",
    emerald: "bg-emerald-100 border-emerald-400",
  };

  const pillarEmojis = {
    yellow: "⚡",
    green: "♻️",
    blue: "🖥️",
    emerald: "📱",
  };

  return (
    <div className="my-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">🏛️</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {data.map((pillar, idx) => (
          <div
            key={idx}
            className={`${
              colorClasses[pillar.color]
            } rounded-lg p-4 border-l-4 relative`}
          >
            <div className="absolute top-2 right-2 text-2xl">
              {pillarEmojis[pillar.color]}
            </div>
            <h5 className="text-sm font-bold text-gray-800 mb-1 pr-8">
              {pillar.title}
            </h5>
            <p className="text-xs text-gray-600 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. Benefícios Empresariais
export const BusinessBenefits = ({ title, data, compact = false }) => {
  if (compact) {
    return (
      <div className="flex-shrink-0 w-full md:w-96">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">💼</span>
          <h4 className="text-base font-bold text-gray-800">{title}</h4>
          <span className="text-2xl">📈</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-purple-50 rounded-lg p-4 text-center border-l-4 border-purple-500">
            <div className="text-3xl font-black text-purple-600 mb-1.5">
              {data.savings.value}
            </div>
            <p className="text-sm font-semibold text-gray-700 leading-tight">
              {data.savings.label}
            </p>
          </div>
          <div className="bg-pink-50 rounded-lg p-4 text-center border-l-4 border-pink-500">
            <div className="text-3xl font-black text-pink-600 mb-1.5">
              {data.consumers.value}
            </div>
            <p className="text-sm font-semibold text-gray-700 leading-tight">
              {data.consumers.label}
            </p>
          </div>
        </div>
        <div className="mt-3 bg-gray-50 p-3 rounded-lg text-center">
          <p className="text-sm font-medium text-gray-700">{data.market.label}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="my-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">💼</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">📈</span>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="bg-purple-50 rounded-lg p-4 text-center border-l-4 border-purple-500">
          <div className="text-4xl font-black text-purple-600 mb-1">
            {data.savings.value}
          </div>
          <p className="text-xs font-semibold text-gray-700">
            {data.savings.label}
          </p>
        </div>
        <div className="bg-pink-50 rounded-lg p-4 text-center border-l-4 border-pink-500">
          <div className="text-4xl font-black text-pink-600 mb-1">
            {data.consumers.value}
          </div>
          <p className="text-xs font-semibold text-gray-700">
            {data.consumers.label}
          </p>
        </div>
      </div>
      <div className="mt-3 bg-gray-50 p-3 rounded-lg text-center">
        <p className="text-sm font-medium text-gray-700">{data.market.label}</p>
      </div>
    </div>
  );
};

// 4. Redução de Carbono Cloud
export const CarbonReduction = ({ title, data }) => {
  return (
    <div className="my-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">🌍</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">📉</span>
      </div>
      <div className="grid md:grid-cols-2 gap-3 mb-3">
        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
          <div className="text-3xl font-black text-green-600 mb-1">
            {data.largeCompanies.reduction}%
          </div>
          <div className="text-xs font-semibold text-gray-700 mb-2">
            {data.largeCompanies.label}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${data.largeCompanies.reduction}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
          <div className="text-3xl font-black text-emerald-600 mb-1">
            {data.smallCompanies.reduction}%
          </div>
          <div className="text-xs font-semibold text-gray-700 mb-2">
            {data.smallCompanies.label}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: `${data.smallCompanies.reduction}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="bg-green-600 text-white rounded-lg p-3 text-center">
          <div className="text-2xl font-bold">{data.totalSavings.value}</div>
          <div className="text-xs opacity-90">{data.totalSavings.label}</div>
        </div>
        <div className="bg-teal-600 text-white rounded-lg p-3 text-center">
          <div className="text-2xl font-bold">{data.equivalent.value}</div>
          <div className="text-xs opacity-90">{data.equivalent.label}</div>
        </div>
      </div>
    </div>
  );
};

// 5. Oracle Commitment
export const OracleCommitment = ({ title, data }) => {
  return (
    <div className="my-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">☁️</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">⚡</span>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="bg-yellow-50 rounded-lg p-4 text-center border-l-4 border-yellow-500">
          <svg
            className="w-8 h-8 mx-auto mb-2 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <div className="text-3xl font-black text-yellow-600 mb-1">
            {data.europeRenewable.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            {data.europeRenewable.label}
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center border-l-4 border-green-500">
          <svg
            className="w-8 h-8 mx-auto mb-2 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-3xl font-black text-green-600 mb-1">
            {data.globalGoal.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            {data.globalGoal.label}
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center border-l-4 border-blue-500">
          <svg
            className="w-8 h-8 mx-auto mb-2 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <div className="text-3xl font-black text-blue-600 mb-1">
            {data.recycling.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            {data.recycling.label}
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. Comparação de Utilização
export const UtilizationComparison = ({ title, data }) => {
  return (
    <div className="my-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="text-2xl">📊</span>
        <h4 className="text-base font-bold text-gray-800">{title}</h4>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-500">
          <h5 className="text-xs font-bold text-gray-800 mb-1.5">
            {data.onPremises.label}
          </h5>
          <div className="h-6 bg-gray-200 rounded-full overflow-hidden relative">
            <div
              className="absolute h-full bg-red-500 rounded-full flex items-center justify-end pr-2"
              style={{ width: `${data.onPremises.avg}%` }}
            >
              <span className="text-white font-bold text-[10px]">
                {data.onPremises.min}-{data.onPremises.max}%
              </span>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
          <h5 className="text-xs font-bold text-gray-800 mb-1.5">
            {data.cloud.label}
          </h5>
          <div className="h-6 bg-gray-200 rounded-full overflow-hidden relative">
            <div
              className="absolute h-full bg-green-500 rounded-full flex items-center justify-end pr-2"
              style={{ width: `${data.cloud.avg}%` }}
            >
              <span className="text-white font-bold text-[10px]">
                {data.cloud.min}-{data.cloud.max}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 bg-green-100 p-2 rounded-lg text-center">
        <div className="text-2xl font-black text-green-600">
          {data.improvement.value}
        </div>
        <p className="text-[10px] font-semibold text-gray-700">
          {data.improvement.label}
        </p>
      </div>
    </div>
  );
};

// 7. Projeção de Energia (Data Centers)
export const EnergyProjection = ({ title, data }) => {
  return (
    <div className="my-16 max-w-3xl mx-auto">
      <h4 className="text-lg font-bold text-center mb-4 text-gray-800">
        {title}
      </h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
          <div className="text-center">
            <div className="text-xs font-bold text-blue-600 mb-1">
              {data.current.year}
            </div>
            <div className="text-4xl font-black text-blue-600 mb-2">
              {data.current.value}
            </div>
            <div className="text-xs font-semibold text-gray-700 mb-1">
              Consumo Global Atual
            </div>
            <div className="text-2xl font-bold text-gray-600">
              {data.current.twh}
            </div>
          </div>
        </div>
        <div className="bg-red-600 rounded-lg p-4 text-white">
          <div className="text-center">
            <div className="text-xs font-bold mb-1">{data.future.year}</div>
            <div className="text-4xl font-black mb-2">{data.future.value}</div>
            <div className="text-xs font-semibold mb-1">Projeção Sem Ação</div>
            <div className="mt-3 bg-white/20 p-2 rounded text-xs font-semibold">
              Crescimento de 4x se medidas não forem tomadas!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 8. PUE Explainer
export const PueExplainer = ({ title, data }) => {
  return (
    <div className="my-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">🏢</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">⚙️</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-green-600 rounded-lg p-4 text-white text-center">
          <div className="text-5xl font-black mb-1">{data.ideal.value}</div>
          <div className="text-sm font-bold mb-1">{data.ideal.label}</div>
          <div className="text-xs opacity-90">{data.ideal.description}</div>
        </div>
        <div className="bg-orange-600 rounded-lg p-4 text-white text-center">
          <div className="text-5xl font-black mb-1">{data.global.value}</div>
          <div className="text-sm font-bold mb-1">{data.global.label}</div>
          <div className="text-xs opacity-90">{data.global.description}</div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <h5 className="text-sm font-bold text-center text-gray-800 mb-3">
          Breakdown de Energia
        </h5>
        <div className="flex items-center justify-center gap-4 text-xs">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-1">
              <div className="font-bold">{data.waste.computing}</div>
            </div>
            <div className="font-semibold text-gray-700">Computação</div>
          </div>
          <div className="text-2xl text-gray-400">+</div>
          <div className="text-center">
            <div className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center text-white mb-1">
              <div className="font-bold">{data.waste.cooling}</div>
            </div>
            <div className="font-semibold text-gray-700">Resfriamento</div>
          </div>
          <div className="text-2xl text-gray-400">=</div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center text-white mb-1">
              <div className="font-bold">{data.global.value}</div>
            </div>
            <div className="font-semibold text-gray-700">PUE Total</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 9. Free Cooling
export const FreeCooling = ({ title, data, compact = false }) => {
  if (compact) {
    return (
      <div className="flex-shrink-0 w-full md:w-[420px]">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">❄️</span>
          <h4 className="text-base font-bold text-gray-800">{title}</h4>
          <span className="text-2xl">🌡️</span>
        </div>
        <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500 mb-3">
          <div className="text-center">
            <div className="text-4xl font-black text-cyan-600 mb-1.5">
              {data.scandinaviaEfficiency.value}
            </div>
            <div className="text-sm font-bold text-gray-800 mb-1">
              Free Cooling Anual
            </div>
            <div className="text-xs text-gray-600">
              {data.scandinaviaEfficiency.region}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
            <h5 className="text-xs font-bold text-gray-800 mb-1">Conceito</h5>
            <p className="text-[11px] text-gray-600 leading-tight">{data.concept}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
            <h5 className="text-xs font-bold text-gray-800 mb-1">Benefício</h5>
            <p className="text-[11px] text-gray-600 leading-tight">{data.benefit}</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="my-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">❄️</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">🌡️</span>
      </div>
      <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500 mb-3">
        <div className="text-center">
          <div className="text-5xl font-black text-cyan-600 mb-1">
            {data.scandinaviaEfficiency.value}
          </div>
          <div className="text-sm font-bold text-gray-800 mb-1">
            Free Cooling Anual
          </div>
          <div className="text-xs text-gray-600">
            {data.scandinaviaEfficiency.region}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
          <h5 className="text-xs font-bold text-gray-800 mb-1">Conceito</h5>
          <p className="text-xs text-gray-600">{data.concept}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
          <h5 className="text-xs font-bold text-gray-800 mb-1">Benefício</h5>
          <p className="text-xs text-gray-600">{data.benefit}</p>
        </div>
      </div>
    </div>
  );
};

// 10. AI Optimization
export const AiOptimization = ({ title, data, compact = false }) => {
  if (compact) {
    return (
      <div className="flex-shrink-0 w-full md:w-96">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-2xl">🤖</span>
          <h4 className="text-base font-bold text-gray-800">{title}</h4>
          <span className="text-2xl">🧠</span>
        </div>
        <div className="bg-purple-600 rounded-lg p-3 text-white text-center mb-2">
          <div className="text-lg font-black mb-0.5">{data.company}</div>
          <div className="text-[10px] opacity-90">{data.technology}</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-3 text-center border-l-4 border-purple-500">
          <div className="text-3xl font-black text-purple-600 mb-1">
            {data.reduction.value}
          </div>
          <div className="text-xs font-bold mb-0.5">
            Redução em {data.reduction.area}
          </div>
          <div className="text-[10px] text-gray-600">
            Usando Machine Learning em tempo real
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="my-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">🤖</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">🧠</span>
      </div>
      <div className="bg-purple-600 rounded-lg p-4 text-white text-center mb-3">
        <div className="text-2xl font-black mb-1">{data.company}</div>
        <div className="text-xs opacity-90">{data.technology}</div>
      </div>
      <div className="bg-purple-50 rounded-lg p-4 text-center border-l-4 border-purple-500">
        <div className="text-4xl font-black text-purple-600 mb-1">
          {data.reduction.value}
        </div>
        <div className="text-sm font-bold mb-1">
          Redução em {data.reduction.area}
        </div>
        <div className="text-xs text-gray-600">
          Usando Machine Learning em tempo real
        </div>
      </div>
    </div>
  );
};

// 11. E-waste Growth
export const EWasteGrowth = ({ title, data }) => {
  return (
    <div className="my-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">🗑️</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">♻️</span>
      </div>
      <div className="grid md:grid-cols-2 gap-3 mb-3">
        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500 text-center">
          <svg
            className="w-8 h-8 mx-auto mb-2 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <div className="text-3xl font-black text-red-600 mb-1">
            {data.current.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            E-waste em {data.current.year}
          </div>
        </div>
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500 text-center">
          <svg
            className="w-8 h-8 mx-auto mb-2 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <div className="text-3xl font-black text-orange-600 mb-1">
            {data.growth.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            Crescimento em {data.growth.period}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="bg-green-600 text-white rounded-lg p-3 text-center">
          <div className="text-2xl font-bold">{data.recycled.value}</div>
          <div className="text-xs opacity-90">{data.recycled.label}</div>
        </div>
        <div className="bg-gray-600 text-white rounded-lg p-3 text-center">
          <div className="text-2xl font-bold">{data.lost.value}</div>
          <div className="text-xs opacity-90">{data.lost.label}</div>
        </div>
      </div>
    </div>
  );
};

// 12. Economic Value
export const EconomicValue = ({ title, data }) => {
  const colors = {
    yellow: "bg-yellow-500",
    gray: "bg-gray-400",
    orange: "bg-orange-500",
    blue: "bg-blue-500",
  };

  return (
    <div className="my-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">💰</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">♻️</span>
      </div>
      <div className="bg-green-600 rounded-lg p-4 text-white text-center mb-3">
        <svg
          className="w-10 h-10 mx-auto mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="text-4xl font-black mb-1">{data.totalValue.value}</div>
        <div className="text-sm">{data.totalValue.label}</div>
      </div>
      <div className="flex gap-2 justify-center flex-wrap">
        {data.materials.map((material, idx) => (
          <div
            key={idx}
            className={`${
              colors[material.color]
            } text-white px-3 py-2 rounded text-xs font-semibold`}
          >
            {material.name}
          </div>
        ))}
      </div>
    </div>
  );
};

// 13. Oracle Circular
export const OracleCircular = ({ title, data }) => {
  return (
    <div className="my-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">♻️</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">🔄</span>
      </div>
      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 mb-3 text-center">
        <svg
          className="w-12 h-12 mx-auto mb-2 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <div className="text-4xl font-black text-green-600 mb-1">
          {data.recyclingRate.value}
        </div>
        <div className="text-sm font-semibold text-gray-700">
          {data.recyclingRate.label}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        {data.practices.map((practice, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded p-2 text-xs text-gray-700 flex items-center gap-2"
          >
            <svg
              className="w-4 h-4 text-green-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {practice}
          </div>
        ))}
      </div>
    </div>
  );
};

// 14. Utilization Waste (Virtualização)
export const UtilizationWaste = ({ title, data }) => {
  return (
    <div className="my-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">🖥️</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">⚠️</span>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-3">
        <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500 text-center">
          <svg
            className="w-10 h-10 mx-auto mb-2 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-3xl font-black text-red-600 mb-1">
            {data.physical.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            {data.physical.label}
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 text-center">
          <svg
            className="w-10 h-10 mx-auto mb-2 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-3xl font-black text-green-600 mb-1">
            {data.virtual.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            {data.virtual.label}
          </div>
        </div>
      </div>
      <div className="bg-blue-600 rounded-lg p-3 text-white text-center">
        <div className="text-2xl font-bold">{data.waste.value}</div>
        <div className="text-xs opacity-90">{data.waste.label}</div>
      </div>
    </div>
  );
};

// 15. VMware Study
export const VmwareStudy = ({ title, data }) => {
  return (
    <div className="my-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">📊</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">✅</span>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500 text-center">
          <svg
            className="w-8 h-8 mx-auto mb-2 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
          <div className="text-3xl font-black text-purple-600 mb-1">
            {data.servers.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            {data.servers.label}
          </div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500 text-center">
          <svg
            className="w-8 h-8 mx-auto mb-2 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <div className="text-3xl font-black text-yellow-600 mb-1">
            {data.energy.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            {data.energy.label}
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 text-center">
          <svg
            className="w-8 h-8 mx-auto mb-2 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-3xl font-black text-green-600 mb-1">
            {data.tco.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            {data.tco.label}
          </div>
        </div>
      </div>
    </div>
  );
};

// 16. Space Reduction
export const SpaceReduction = ({ title, data }) => {
  return (
    <div className="my-16 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">🏢</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">📏</span>
      </div>
      <div className="space-y-3">
        <div className="bg-gray-100 rounded-lg p-4 border-l-4 border-gray-500">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-gray-800">
              {data.traditional.label}
            </span>
            <span className="text-2xl font-black text-gray-600">
              {data.traditional.value}
            </span>
          </div>
          <div className="h-4 bg-gray-300 rounded-full"></div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-gray-800">
              {data.virtualized.label}
            </span>
            <span className="text-2xl font-black text-green-600">
              {data.virtualized.value}
            </span>
          </div>
          <div
            className="h-4 bg-green-500 rounded-full"
            style={{ width: data.virtualized.value }}
          ></div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {data.benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-green-600 text-white text-center py-2 px-1 rounded text-xs font-semibold"
          >
            {benefit}
          </div>
        ))}
      </div>
    </div>
  );
};

// 17-25. Componentes para Artigos 6, 7 e 8
export const RenewableLeaders = ({ title, data }) => {
  const colorMap = {
    blue: "bg-blue-500",
    gray: "bg-gray-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
  };
  return (
    <div className="my-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">🌞</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">⚡</span>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {data.companies.map((company, idx) => (
          <div
            key={idx}
            className={`${
              colorMap[company.color]
            } bg-opacity-10 rounded-lg p-4 border-l-4 ${colorMap[
              company.color
            ].replace("bg-", "border-")} text-center`}
          >
            <div
              className="text-3xl font-black mb-1"
              style={{
                color: colorMap[company.color]
                  .replace("bg-", "#")
                  .replace("-500", ""),
              }}
            >
              {company.percentage}%
            </div>
            <div className="text-sm font-bold text-gray-800">
              {company.name}
            </div>
            <div className="text-xs text-gray-600">desde {company.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CarbonNegative = ({ title, data, compact = false }) => {
  const containerClass = compact
    ? "my-16 w-full"
    : "my-16 max-w-2xl mx-auto";
  
  return (
    <div className={containerClass}>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">🌱</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">➖</span>
      </div>
      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 mb-3 text-center">
        <div className="text-4xl font-black text-green-600 mb-1">
          {data.goal2030.value}
        </div>
        <div className="text-sm font-semibold text-gray-700">
          até {data.goal2030.year}
        </div>
      </div>
      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 text-center">
        <div className="text-2xl font-bold text-blue-600 mb-1">
          {data.goal2050.value}
        </div>
        <div className="text-xs text-gray-600">{data.goal2050.description}</div>
      </div>
      <p className="mt-3 text-center text-sm text-gray-700 bg-gray-50 p-2 rounded">
        {data.description}
      </p>
    </div>
  );
};

export const RenewableProjects = ({ title, data, compact = false }) => {
  const containerClass = compact
    ? "my-16 w-full"
    : "my-16 max-w-2xl mx-auto";
  
  return (
    <div className={containerClass}>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-3xl">🌬️</span>
        <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        <span className="text-3xl">☀️</span>
      </div>
      <div className="space-y-3">
        <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-3xl font-black text-orange-600">
                {data.amazon.value}
              </div>
              <div className="text-xs font-semibold text-gray-700">
                {data.amazon.label}
              </div>
            </div>
            <div className="text-xs text-gray-600 bg-white px-2 py-1 rounded">
              {data.amazon.status}
            </div>
          </div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500 text-center">
          <div className="text-3xl font-black text-purple-600 mb-1">
            {data.meta.value}
          </div>
          <div className="text-xs font-semibold text-gray-700">
            {data.meta.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DeepMindSuccess = ({ title, data }) => (
  <div className="my-16 max-w-2xl mx-auto">
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="text-3xl">🤖</span>
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      <span className="text-3xl">🎯</span>
    </div>
    <div className="grid md:grid-cols-2 gap-3 mb-3">
      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 text-center">
        <svg
          className="w-10 h-10 mx-auto mb-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        <div className="text-4xl font-black text-blue-600 mb-1">
          {data.cooling.value}
        </div>
        <div className="text-xs font-semibold text-gray-700">
          {data.cooling.label}
        </div>
      </div>
      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 text-center">
        <svg
          className="w-10 h-10 mx-auto mb-2 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <div className="text-4xl font-black text-green-600 mb-1">
          {data.total.value}
        </div>
        <div className="text-xs font-semibold text-gray-700">
          {data.total.label}
        </div>
      </div>
    </div>
    <p className="text-center text-xs text-gray-700 bg-gray-50 p-2 rounded">
      {data.impact}
    </p>
  </div>
);

export const AiUseCases = ({ title, data }) => (
  <div className="my-16 max-w-3xl mx-auto">
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="text-3xl">🧠</span>
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      <span className="text-3xl">💡</span>
    </div>
    <div className="grid md:grid-cols-2 gap-3">
      {data.cases.map((useCase, idx) => (
        <div
          key={idx}
          className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500"
        >
          <div className="text-sm font-bold text-gray-800 mb-1">
            {useCase.name}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-black text-purple-600">
              {useCase.benefit}
            </span>
            <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded">
              {useCase.metric}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const AiGlobalImpact = ({ title, data }) => (
  <div className="my-16 max-w-2xl mx-auto">
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="text-3xl">🌍</span>
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      <span className="text-3xl">🤖</span>
    </div>
    <div className="bg-green-600 rounded-lg p-4 text-white text-center mb-3">
      <div className="text-5xl font-black mb-1">{data.reduction.value}</div>
      <div className="text-sm">{data.reduction.label}</div>
    </div>
    <p className="text-center text-sm text-gray-700 bg-yellow-50 p-2 rounded mb-3">
      {data.equivalent}
    </p>
    <div className="flex gap-2 justify-center">
      {data.sectors.map((sector, idx) => (
        <div
          key={idx}
          className="bg-blue-600 text-white px-3 py-2 rounded text-xs font-semibold"
        >
          {sector}
        </div>
      ))}
    </div>
  </div>
);

export const KeyMetrics = ({ title, data }) => (
  <div className="my-16 max-w-3xl mx-auto">
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="text-3xl">📏</span>
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      <span className="text-3xl">📊</span>
    </div>
    <div className="space-y-3">
      {data.metrics.map((metric, idx) => (
        <div
          key={idx}
          className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="text-2xl font-black text-gray-800">
              {metric.name}
            </div>
            <div className="text-xs text-gray-600 bg-white px-2 py-1 rounded">
              {metric.formula}
            </div>
          </div>
          <div className="text-sm text-gray-700">{metric.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export const PueProgress = ({ title, data }) => (
  <div className="my-16 max-w-2xl mx-auto">
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="text-3xl">📈</span>
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      <span className="text-3xl">✨</span>
    </div>
    <div className="space-y-3">
      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500 text-center">
        <div className="text-4xl font-black text-red-600 mb-1">
          {data.past.value}
        </div>
        <div className="text-xs font-semibold text-gray-700">
          {data.past.label} ({data.past.year})
        </div>
      </div>
      <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500 text-center">
        <div className="text-4xl font-black text-yellow-600 mb-1">
          {data.current.value}
        </div>
        <div className="text-xs font-semibold text-gray-700">
          {data.current.label} ({data.current.year})
        </div>
      </div>
      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 text-center">
        <div className="text-4xl font-black text-green-600 mb-1">
          {data.ideal.value}
        </div>
        <div className="text-xs font-semibold text-gray-700">
          {data.ideal.label}
        </div>
      </div>
    </div>
  </div>
);

export const EsgInvestment = ({ title, data }) => (
  <div className="my-16 max-w-3xl mx-auto">
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="text-3xl">💼</span>
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      <span className="text-3xl">🌿</span>
    </div>
    <div className="grid md:grid-cols-3 gap-3">
      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500 text-center">
        <svg
          className="w-8 h-8 mx-auto mb-2 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="text-2xl font-black text-green-600 mb-1">
          {data.assets.value}
        </div>
        <div className="text-xs font-semibold text-gray-700">
          {data.assets.label}
        </div>
      </div>
      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 text-center">
        <svg
          className="w-8 h-8 mx-auto mb-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="text-2xl font-black text-blue-600 mb-1">
          {data.demand.value}
        </div>
        <div className="text-xs font-semibold text-gray-700">
          {data.demand.label}
        </div>
      </div>
      <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500 text-center">
        <svg
          className="w-8 h-8 mx-auto mb-2 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <div className="text-2xl font-black text-orange-600 mb-1">
          {data.csrd.value}
        </div>
        <div className="text-xs font-semibold text-gray-700">
          {data.csrd.label}
        </div>
      </div>
    </div>
  </div>
);

// Componente principal que renderiza o tipo correto
export const RenderInlineInfographic = ({ infographic }) => {
  if (!infographic) return null;

  const { type, title, data, compact } = infographic;

  switch (type) {
    case "impactComparison":
      return <ImpactComparison title={title} data={data} compact={compact} />;
    case "pillars":
      return <PillarsDiagram title={title} data={data} />;
    case "businessBenefits":
      return <BusinessBenefits title={title} data={data} compact={compact} />;
    case "carbonReduction":
      return <CarbonReduction title={title} data={data} />;
    case "oracleCommitment":
      return <OracleCommitment title={title} data={data} />;
    case "utilizationComparison":
      return <UtilizationComparison title={title} data={data} />;
    case "energyProjection":
      return <EnergyProjection title={title} data={data} />;
    case "pueExplainer":
      return <PueExplainer title={title} data={data} />;
    case "freeCooling":
      return <FreeCooling title={title} data={data} compact={compact} />;
    case "aiOptimization":
      return <AiOptimization title={title} data={data} compact={compact} />;
    case "eWasteGrowth":
      return <EWasteGrowth title={title} data={data} />;
    case "economicValue":
      return <EconomicValue title={title} data={data} />;
    case "oracleCircular":
      return <OracleCircular title={title} data={data} />;
    case "utilizationWaste":
      return <UtilizationWaste title={title} data={data} />;
    case "vmwareStudy":
      return <VmwareStudy title={title} data={data} />;
    case "spaceReduction":
      return <SpaceReduction title={title} data={data} />;
    case "renewableLeaders":
      return <RenewableLeaders title={title} data={data} />;
    case "carbonNegative":
      return <CarbonNegative title={title} data={data} compact={compact} />;
    case "renewableProjects":
      return <RenewableProjects title={title} data={data} compact={compact} />;
    case "deepMindSuccess":
      return <DeepMindSuccess title={title} data={data} />;
    case "aiUseCases":
      return <AiUseCases title={title} data={data} />;
    case "aiGlobalImpact":
      return <AiGlobalImpact title={title} data={data} />;
    case "keyMetrics":
      return <KeyMetrics title={title} data={data} />;
    case "pueProgress":
      return <PueProgress title={title} data={data} />;
    case "esgInvestment":
      return <EsgInvestment title={title} data={data} />;
    default:
      return null;
  }
};
