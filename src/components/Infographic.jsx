const Infographic = ({ data, title, type = "bar" }) => {
  if (type === "bar") {
    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-5 my-6 border-2 border-green-200 shadow-lg h-full flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-1 gap-3 flex-grow">
          {data.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium text-sm">
                  {item.label}
                </span>
                <span className="text-green-700 font-bold text-base">
                  {item.value}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full flex items-center justify-end pr-2 transition-all duration-1000 ease-out"
                  style={{ width: `${item.percentage || 100}%` }}
                >
                  <span className="text-white text-xs font-semibold">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "stats") {
    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-5 my-6 border-2 border-green-200 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 border border-green-100"
            >
              <div className="text-2xl font-bold text-green-600 mb-1">
                {item.value}
              </div>
              <div className="text-gray-700 font-medium text-sm mb-0.5">
                {item.label}
              </div>
              {item.description && (
                <div className="text-gray-500 text-xs mt-1.5">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "comparison") {
    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-5 my-6 border-2 border-green-200 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 shadow-md ${
                index === 0
                  ? "bg-red-50 border-2 border-red-300"
                  : "bg-green-50 border-2 border-green-300"
              }`}
            >
              <div className="text-center">
                <div className="text-base font-bold text-gray-800 mb-2">
                  {item.label}
                </div>
                <div
                  className={`text-3xl font-bold mb-2 ${
                    index === 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "timeline") {
    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-5 my-6 border-2 border-green-200 shadow-lg h-full flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-1 gap-3 flex-grow">
          {data.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-bold text-xs">
                  {item.year}
                </span>
              </div>
              <div className="flex-grow bg-white rounded-xl p-4 shadow-md border border-green-100 min-w-0">
                <div className="font-bold text-gray-800 text-sm mb-1">
                  {item.label}
                </div>
                <div className="text-gray-600 text-xs leading-relaxed">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default Infographic;
