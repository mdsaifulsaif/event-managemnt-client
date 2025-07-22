const ImpactTracker = () => {
  const data = [
    { label: "Community Goal", percent: 72 },
    { label: "Event Success Rate", percent: 96 },
  ];

  return (
    <section className="px-5 md:px-20  ">
      {/* Section Title */}

      <h2 className="text-3xl text-center  md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
        ImpactHub Progress Dashboard
      </h2>

      {/* Progress Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-6 border border-[#129990] rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold text-gray-800">
                {item.label}
              </h4>
              <span className="text-[#129990] font-bold">{item.percent}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div
                className="h-3 bg-[#129990] rounded-full"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactTracker;
