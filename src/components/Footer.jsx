const Footer = () => {
    return (
      <footer className="bg-[#f5f5f5] text-black">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Store Buttons */}
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
            <h2 className="text-3xl font-bold text-black mb-4">Craveo</h2>
            <div className="flex gap-3 mb-4">
              <img src="src/assets/images/appstore.png" alt="App Store" className="w-24 sm:w-30 md:w-32" />
              <img src="src/assets/images/playstore.png" alt="Google Play" className="w-24 sm:w-30 md:w-32" />
            </div>
            <p className="text-sm text-gray-700 text-center md:text-left">
              Company # 490039–445, Registered with House of companies.
            </p>
          </div>
  
          {/* Newsletter */}
          <div className="flex flex-col justify-center md:justify-start items-center">
            <h3 className="text-sm text-center md:text-left font-semibold mb-2">Get Exclusive Deals in your Inbox</h3>
            <div className="relative flex items-center w-fit rounded-full overflow-hidden md:shadow-sm mb-2">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="px-4 py-2 w-[250px] sm:w-[300px] shadow-sm bg-white md:w-100 text-sm outline-none"
              />
              <button className="bg-orange-500 rounded-full absolute right-0 text-white px-5 py-2 font-medium text-sm">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-600">
              we won’t spam, read our <a href="#" className="underline">email policy</a>
            </p>
            <div className="flex gap-4 mt-4 text-lg">
              <a href="#"><i className="fab fa-facebook text-[#030722]"></i></a>
              <a href="#"><i className="fab fa-instagram text-[#030722]"></i></a>
              <a href="#"><i className="fab fa-tiktok text-[#030722]"></i></a>
              <a href="#"><i className="fab fa-snapchat text-[#030722]"></i></a>
            </div>
          </div>
  
          {/* Legal Pages */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Legal Pages</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#" className="hover:underline">Terms and conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Cookies</a></li>
              <li><a href="#" className="hover:underline">Modern Slavery Statement</a></li>
            </ul>
          </div>
  
          {/* Important Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Important Links</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a href="#" className="hover:underline">Get help</a></li>
              <li><a href="#" className="hover:underline">Add your restaurant</a></li>
              <li><a href="#" className="hover:underline">Sign up to deliver</a></li>
              <li><a href="#" className="hover:underline">Create a business account</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="bg-[#030722] text-white text-xs sm:text-sm py-3 px-6 flex flex-col sm:flex-row justify-between items-center">
          <p>Craveo Copyright 2024, All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Do not sell or share my personal information</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  