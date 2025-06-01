import { CDN_URL } from "../utils/contants";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, locality } = resData.info;

  return (
    <div className="m-4 p-4 w-[300px] h-[400px] rounded-lg bg-white bg-opacity-50 shadow-lg transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:bg-gray-800 dark:bg-opacity-50 backdrop-blur-lg dark:text-white">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="font-bold text-lg mb-2">{name}</h3>
          <p className="text-sm mb-2 flex items-center">
            <span className= "font-serif text-orange-500">{avgRating}⭐</span>
            <span className=" font-serif ml-2">||  {resData.info.sla.deliveryTime} mins</span>
          </p>
          <p className="font-bold text-sm mb-2 text-gray-700 dark:text-gray-300">
            {cuisines.join(", ")}
          </p>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400">{locality}</p>
        </div>
      </div>
    </div>
  );
};


// Higher order component

// input - RestaurantCar => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-xl"> Promoted </label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};



export default RestaurantCard;