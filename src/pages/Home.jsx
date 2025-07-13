import { useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner";
import HomeRestaurantCard from "../components/HomeRestaurantCard";
import { categoriesData, restaurantList, restaurantType } from "../config/homeData.js"
import CategoryCard from "@/components/CategoryCard";
import RestaurantsCard from "@/components/RestaurantsCard";
import { Link } from "react-router-dom";
import DownloadSection from "@/components/DownloadSection";
import PartnerRideSection from "@/components/PartnerRideSection";
import KnowMoreSection from "@/components/KnowMoreSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

export const Home = () => {
    const [restaurantFilter, setRestaurantFilter] = useState("all")
    const [restaurantsData, setRestaurantData] = useState([]);
    const [restaurantTypes, setRestaurantTypes] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const cuisineMap = {};
        setRestaurantData(restaurantList)
        setRestaurantTypes(restaurantType)
        setCategories(categoriesData)
    }, [restaurantType, restaurantList])

    function filterRestaurants(filter) {
        setRestaurantFilter(filter)
    }

    function getCategoryRestaurantCount(categoryName) {
        return restaurantsData?.filter((restaurant) =>
            restaurant?.categories?.includes(categoryName?.toLowerCase())
        ).length;
    };

    return (
        <>
            <div className="sm:max-w-[95%] md:max-w-[90%] m-auto">
                <HomeBanner />
                <div className="flex flex-col sm:flex-row justify-between gap-2 m-5">
                    <h2 className="text-sm sm:text-md md:text-xl font-bold">Up to -40% 🎊 Order.uk exclusive deals</h2>
                    <div className="flex gap-1 sm:gap-2 md:gap-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                        {restaurantTypes.map((data) => {
                            return <button key={data.id} type="button" onClick={() => filterRestaurants(data.type)} className={`${restaurantFilter == data.type ? "text-orange-500 rounded-full border border-orange-500" : ""} hover:text-orange-500 hover:rounded-full px-4 py-1 text-[10px] sm:text-lg md:text-xl whitespace-nowrap`}>{data.title}</button>
                        })}

                    </div>
                </div>

                <div className="pb-4 px-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {restaurantsData?.slice(0, 3).map((data) => {
                            return <HomeRestaurantCard key={data.id} image={data.image} name={data.name} offer={data.offPercent} />
                        })}
                    </div>
                    <div className="text-right mt-4 me-4">
                        <Link to="/restaurants" className="text-orange-500 hover:underline text-sm font-medium">
                            See More →
                        </Link>
                    </div>
                </div>

                <div className="pb-4 px-3">
                    <h2 className="text-sm mb-4 sm:text-md md:text-xl font-bold">Craveo's Popular Categories 🤩</h2>

                    <div className="flex gap-4 overflow-x-auto scrollbar-thin" id="categories-section" style={{ scrollbarWidth: "none" }}>
                        {categories.map((data) => {
                            return <CategoryCard key={data.name?.replaceAll(" ")} count={getCategoryRestaurantCount(data.name)} image={data.image} title={data.name} />
                        })}
                    </div>
                </div>

                <div className="pb-4 px-3">
                    <h2 className="text-sm mb-4 sm:text-md md:text-xl font-bold">Popular Restaurants</h2>

                    <div className="flex gap-4 overflow-x-auto scrollbar-thin" style={{ scrollbarWidth: "none" }}>
                        {restaurantsData.map((data) => {
                            return <RestaurantsCard key={data.name?.replaceAll(" ")} image={data.brandLogo} title={data.name} />
                        })}
                    </div>
                </div>

                <div className="mb-4 px-3">
                    <DownloadSection />
                </div>

                <div className="mb-4 px-3">
                    <PartnerRideSection />
                </div>

                <div className="mb-4 px-3">
                    <KnowMoreSection />
                </div>

                <div className="mb-4 px-3 sm:px-12 md:px-20 lg:px-24">
                    <StatsSection />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home;