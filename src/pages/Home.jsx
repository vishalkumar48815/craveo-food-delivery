import { useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner";
import HomeRestaurantCard from "../components/HomeRestaurantCard";
import { restaurantList, restaurantType}  from "../config/homeData.js"

export const Home = () => {
    const [restaurantFilter, setRestaurantFilter] = useState("all")
    const [restaurantsData, setRestaurantData] = useState([]);
    const [restaurantTypes, setRestaurantTypes] = useState([]);

    useEffect(() => {
        setRestaurantData(restaurantList)
        setRestaurantTypes(restaurantType)
    }, [restaurantType, restaurantList])

    function filterRestaurants(filter) {
        setRestaurantFilter(filter)
    }

    return (
        <>
            <HomeBanner />
            <div className="flex justify-between m-5">
                <h2 className="text-xl font-bold">Up to -40% 🎊 Order.uk exclusive deals</h2>
                <div className="flex gap-4">
                    {restaurantTypes.map((data) => {
                        return <button key={data.id} type="button" onClick={() => filterRestaurants(data.type)} className={`${restaurantFilter == data.type ? "text-orange-500 rounded-full border border-orange-500" : ""} hover:text-orange-500 hover:rounded-full px-4 py-1`}>{data.title}</button>
                    })}
                    
                </div>
            </div>
            <div className="pb-3 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {restaurantsData.map((data) => {
                   return <HomeRestaurantCard key={data.id} image={data.image} name={data.name} offer={data.offPercent} />
                })}
            </div>
        </>
    )
}

export default Home;