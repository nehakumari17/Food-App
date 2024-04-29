import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const RestaurantMenu = () => {

  const [menuCard, setMenuCard] = useState([]);
  const {id} = useParams()


  const fetchData = async () => {
    try {
      const response = await fetch(
       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId="+id
      )
      
      const jsonData = await response.json();

      let infoArray =
        jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

      setMenuCard(infoArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-blue-50">
      <h1 className="uppercase font-bold text-xl ml-2">Recommended</h1>
      <div className="w-[90%] min-h-screen border ml-auto mr-auto rounded-lg pb-4">
        <div className="grid grid-row gap-2">
          <div className=" ">
            {menuCard.map((card, index) => (
              <div key={card.card.info.id} className="flex justify-between">
                <div>
                <h1>{card.card.info.name}</h1>
                <p>{card.card.info.defaultPrice}</p>
                <p>{card.card.info.ratings.aggregatedRating.rating}</p>
                <p>{card.card.info.ratings.aggregatedRating.ratingCountV2}</p>
                <p>{card.card.info.description}</p>
                </div>
                
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${card.card.info.imageId}`}
                  alt=""
                  className="w-40 h-32 my-4 ml-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
