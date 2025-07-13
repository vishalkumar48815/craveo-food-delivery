export const RestaurantsCard = ({ image, title }) => {
    return (
      <div className="sm:min-w-[220px] min-w-[160px] rounded-xl overflow-hidden shadow-sm bg-white">
        <img src={image} alt={title} className="w-full h-28 sm:h-40" />
        <div className="p-3 bg-orange-500 text-white">
          <h3 className="text-sm text-center font-semibold">{title}</h3>
        </div>
      </div>
    );
  };
  
  export default RestaurantsCard;
  