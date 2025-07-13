const StatsSection = () => {
    const stats = [
      { number: "546+", label: "Registered Riders" },
      { number: "789,900+", label: "Orders Delivered" },
      { number: "690+", label: "Restaurants Partnered" },
      { number: "17,457+", label: "Food items" },
    ];
  
    return (
      <div className="bg-orange-500 text-white rounded-xl px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-0 text-center">
          {stats.map((item, index) => (
            <>
            <div key={index} className="px-6">
              <h2 className="text-4xl font-light">{item.number}</h2>
              <p className="text-lg font-light mt-1">{item.label}</p>
            </div>
            {/* Divider except last */}
            {index < stats.length - 1 && (
                <div className="hidden sm:block h-20 w-px bg-white/70" />
              )}
            </>
          ))}
        </div>
      </div>
    );
  };
  
  export default StatsSection;
  