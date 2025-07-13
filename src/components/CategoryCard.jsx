export const CategoryCard = ({ image, title, count }) => {
    return (
      <div className="sm:min-w-[220px] min-w-[160px] rounded-xl overflow-hidden shadow-sm bg-white">
        <img src={image} alt={title} className="w-full h-18 sm:h-36 object-cover" />
        <div className="bg-[#030722] p-3 text-white">
          <h3 className="text-sm font-semibold text-orange-400">{title}</h3>
          <p className="text-xs text-gray-200">{count} Restaurants</p>
        </div>
      </div>
    );
  };
  
  export default CategoryCard;
  