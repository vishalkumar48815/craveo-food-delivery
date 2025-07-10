import SearchInput from "./searchInput"

export const HomeBanner = () => {
    return (
        <>
            <div className="relative">
                <img className="px-3" style={{ width: "100%" }} src="src/assets/images/home-banner-img.png" alt="banner-image" />
                <div className="absolute bottom-[15%] left-[4%] text-white flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm">Order Restaurant food, takeaway and groceries.</span>
                        <h2 className="text-6xl">Feast Your Senses, <br /><span style={{ color: "#FC8A06" }}>Fast and Fresh</span></h2>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[11px] ms-4">Enter a postcode to see what we deliver</span>
                        <SearchInput />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner