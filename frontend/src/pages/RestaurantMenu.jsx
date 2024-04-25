import React, { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [menuCard, setMenuCard] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=608589&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();

      let infoArray =
        jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

      console.log(infoArray);
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
        <div className="grid grid-flow-row gap-2">
        {menuCard.map((card, index) => (
          <div key={card.card.info.id}>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${card.card.info.imageId}`} alt="" />
          </div>
        ))}
        </div>
        
      </div>
    </div>
  )
};

export default RestaurantMenu;
