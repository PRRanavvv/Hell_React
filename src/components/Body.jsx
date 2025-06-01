import RestaurantCard, {withPromotedLabel} from "./RestaurantCard"; 
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.597532477425457&lng=77.06201834770293&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();

            console.log(json);
            const restaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestaurants(restaurantData);
            setFilteredRestaurants(restaurantData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Looks like you're offline brrr</h1>

    return filteredRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body-component bg-white dark:bg-gray-800 opacity-90">
            <div className="body-filter flex flex-col sm:flex-row p-4">
                <div className="body-search m-4 p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center">
                    <input 
                        type="text" 
                        className="border border-solid border-gray-300 p-2 rounded-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white w-full sm:w-64"
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} 
                    />                    
                    <button 
                        className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white ml-2 rounded-lg"
                        onClick={() => {
                            const filtered = restaurants.filter(
                                (res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filtered);
                        }}
                    >
                        Search
                    </button>
                </div>

                <div className="body-search m-4 p-4 items-center flex">
                    <button
                        className="px-4 py-2 bg-cyan-200 dark:bg-cyan-700 text-black dark:text-white rounded-lg w-full sm:w-auto"
                        onClick={() => {
                            const topRated = restaurants.filter(
                                (res) => res.info.avgRating > 4.1
                            );
                            setFilteredRestaurants(topRated);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}
                        >   
                            {restaurant.info.promoted? (
                                <RestaurantCardPromoted resData = {restaurant}/>
                            ) : (
                                <RestaurantCard resData={restaurant} />
                            )}
                        </Link>
                    )) 
                ) : (
                    <p>No restaurants available</p>
                )}
            </div>
        </div>
    );
};

export default Body;