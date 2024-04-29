import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../auth/cartSlice";

const RestaurantMenu = () => {
  const [menuCard, setMenuCard] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=" +
          id
      );

      const jsonData = await response.json();

      let infoArray =
        jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card
          .card.itemCards;

      setMenuCard(infoArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = (cardInfo) => {
    dispatch(addToCart(cardInfo))
  }

  return (
    <div className="bg-blue-50">
      <h1 className="uppercase font-bold text-xl ml-2">Recommended</h1>
      <div className="w-[90%] min-h-screen border ml-auto mr-auto rounded-lg pb-4">
        <div className="grid grid-row gap-2">
          <div className="w-[60%] ml-auto mr-auto mb-5 mt-5">
            {menuCard.map((card, index) => (
              <div
                key={card.card.info.id}
                className="flex justify-between border-b-2 p-5 shadow-lg rounded-lg mb-5 border border-slate-300"
              >
                <div className="w-9/12">
                  <FaRegSquareCaretUp className="w-5 h-auto" />
                  <h1 className="font-semibold text-lg tracking-wide ">
                    {card.card.info.name}
                  </h1>
                  <p className="text-lg">
                    ₹ {card.card.info.defaultPrice / 100}
                  </p>
                  <div className="flex">
                    <IoIosStar className="mt-1 mr-1" />
                    <p>{card.card.info.ratings.aggregatedRating.rating}</p>
                  </div>

                  <p>{card.card.info.description}</p>
                </div>
                <div className="flex flex-col w-3/12" >
                  
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${card.card.info.imageId}`}
                    alt=""
                    className="w-[70%] h-auto my-4 mx-auto mt-2 rounded-lg"
                  />
                  <button className="text-green-600 font-bold text-xl mt-[-28px] ml-auto mr-auto shadow-sm bg-white py-2 px-4 border border-gray-200 rounded-xl w-28" onClick={() => handleAdd((card.card.info))}>ADD</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
