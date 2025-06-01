import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // State variables to store the extracted data
  const [name, setName] = useState("");
  const [cuisines, setCuisines] = useState("");
  const [costForTwo, setCostForTwo] = useState("");
  const [itemCards, setItemCards] = useState([]);

  useEffect(() => {
    if (resInfo && resInfo.data) {
      console.log("resInfo:", resInfo); // Log the entire resInfo to inspect its structure

      // Safely access nested properties using optional chaining
      const name = resInfo.data.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.name || "Name not found";
      console.log("Name:", name);
      setName(name);

      const cuisines = resInfo.data.cards?.[2]?.card?.card?.info?.cuisines || "Cuisines not found";
      console.log("Cuisine:", cuisines);
      setCuisines(cuisines);

      const costForTwo = resInfo.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.costForTwo || "Cost for two not found";
      console.log("Cost for Two:", costForTwo);
      setCostForTwo(costForTwo);

      const itemCards = resInfo.data.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
      console.log("Item Cards:", itemCards);
      setItemCards(resInfo.data.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
  }, [resInfo]);

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines} - {costForTwo}</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item, index) => (
            <li key={index}>{item.card.info.name} - {item.card.info.price}</li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
