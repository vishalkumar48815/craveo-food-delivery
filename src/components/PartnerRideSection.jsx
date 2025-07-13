const PartnerRideSection = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Partner Card */}
        <div
          className="relative rounded-xl overflow-hidden text-white p-6 flex flex-col justify-end min-h-[350px]"
          style={{
            backgroundImage: `url('src/assets/images/partner-ride-img-1.png')`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Badge */}
          <div className="absolute z-10 top-0 left-8 bg-white text-black text-sm font-semibold px-3 py-2 rounded rounded-b-[6px] rounded-t-none">
            Earn more with lower fees
          </div>
  
          {/* Content */}
          <div className="z-10">
            <p className="text-orange-400 text-sm mb-1">Signup as a business</p>
            <h3 className="text-2xl font-bold mb-4">Partner with us</h3>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
              Get Started
            </button>
          </div>
  
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30 z-0"></div>
        </div>
  
        {/* Rider Card */}
        <div
          className="relative rounded-xl overflow-hidden text-white p-6 flex flex-col justify-end min-h-[350px]"
          style={{
            backgroundImage: `url('src/assets/images/partner-ride-img-2.png')`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Badge */}
          <div className="absolute z-10 top-0 left-8 bg-white text-black text-sm font-semibold px-3 py-2 rounded rounded-b-[6px] rounded-t-none">
            Avail exclusive perks
          </div>
  
          {/* Content */}
          <div className="z-10">
            <p className="text-orange-400 text-sm mb-1">Signup as a rider</p>
            <h3 className="text-2xl font-bold mb-4">Ride with us</h3>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
              Get Started
            </button>
          </div>
  
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent z-0"></div>
        </div>
      </div>
    );
  };
  
  export default PartnerRideSection;
  