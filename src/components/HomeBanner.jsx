import SearchInput from "./searchInput"

export const HomeBanner = () => {
    return (
        <>
            <div className="relative h-[250px] md:h-auto bg-[#E2E2E2] md:bg-transparent flex justify-center items-center md:block ">
                <img className="px-3 hidden md:block" style={{ width: "100%" }} src="src/assets/images/home-banner-img.png" alt="banner-image" />
                <div className="md:absolute md:bottom-[15%] md:left-[4%] text-black text-center md:text-left md:text-white flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] md:text-sm">Order Restaurant food, takeaway and groceries.</span>
                        <h2 className="text-xl lg:text-6xl font-semibold">Feast Your Senses, <br /><span style={{ color: "#FC8A06" }}>Fast and Fresh</span></h2>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[11px] md:ms-4">Enter a postcode to see what we deliver</span>
                        <SearchInput />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner