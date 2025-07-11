import { Card } from "antd";

const HomeRestaurantCard = ({ image, name, offer }) => {
    return (
        <Card
            className="relative overflow-hidden rounded-xl text-white shadow-lg"
            style={{
                width: "auto",
                minWidth: 300,
                height: 250,
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            {/* Dark overlay shadow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent z-0" />
            {/* Offer Badge */}
            <div className="absolute top-0 right-3 bg-[#0B0C1E] px-1.5 py-1 rounded-md rounded-t-none text-sm font-semibold">
                {offer}
            </div>

            {/* Info Section */}
            <div className="absolute bottom-3 left-3">
                <span className="text-[10px] text-orange-500 font-medium">Restaurant</span>
                <h3 className="text-lg font-semibold">{name}</h3>
            </div>
        </Card>
    );
};

export default HomeRestaurantCard;
