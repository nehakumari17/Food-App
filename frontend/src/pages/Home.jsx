import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoSearchOutline } from 'react-icons/io5';
import { MdStars } from "react-icons/md";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      let infoArray =
        jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      console.log(infoArray);
      setCards(infoArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  const handleSearch = () => {
     
    toast.success("Search done!!")}

  const handleFilter = () => {
    const filteredRestaurants = cards.filter(restaurant => restaurant.info.avgRating >= 4.0)
    console.log(filteredRestaurants)
    setFilteredCards(filteredRestaurants)
    toast.success("Showing restaurants with ratings above 4.0.")
  }

  return (
    <div>
      <Toaster position="top-right" />
      <div className="flex justify-evenly my-5">
        <button className="bg-gray-300 py-2 px-4 text-xl rounded-lg" onClick={handleFilter}>Filter</button>

        <div className="relative ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="border-2 rounded-full px-6 py-3 w-96"
          />
          <IoSearchOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl cursor-pointer" 
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className="w-[90%] min-h-screen ml-auto mr-auto rounded-lg mb-2">
      <div className="grid grid-cols-4 gap-3 p-2 ml-14">
        {(filteredCards.length > 0 ? filteredCards : cards).map((card, index) => (
          <div
            key={index}
            className="card w-64 bg-base-100 shadow-xl rounded-lg mt-2 p-2 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${card.info.cloudinaryImageId}`}
              alt=""
              className="h-44 w-full rounded-lg"
            />
            <h3 className="mt-2 text-lg w-40">{card.info.name}</h3>
            <h4 className="mr-1">
              {card.info.cuisines.length > 3
                ? card.info.cuisines.slice(0, 3).join(" ") + "..."
                : card.info.cuisines.join(" ")}
            </h4>
            <div className="flex gap-2">
              <MdStars className="mt-1 text-lg text-green-600" />
              <h4>{card.info.avgRating}</h4>
            </div>
            <h4>{card.info.areaName}</h4>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
