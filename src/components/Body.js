import React from "react";
import Restaurant from "./Restaurant";
import { useState } from "react";
import reslist from "../utils/mockdata";
const Body = () => {
    // State variable for the list of restaurants
    const [listofres, setListOfRes] = useState([
        {
            "info": {
                "id": "831065",
                "name": "Chinese Wok",
                "cloudinaryImageId": "f996b31033fd07603bfb28cb4e526683",
                "locality": "Chandni Chowk",
                "areaName": "Omaxe mall",
                "costForTwo": "₹250 for two",
                "cuisines": ["Chinese", "Asian", "Tibetan", "Desserts"],
                "avgRating": 4.1,
                "availability": { "opened": true },
            },
        },
        {
            "info": {
                "id": "804071",
                "name": "Pizza Hut",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/1848de26-14f7-444f-9cb8-f59342077782_804071.jpg",
                "locality": "H.C. Sen Marg",
                "areaName": "Omaxe ChandniChowk",
                "costForTwo": "₹350 for two",
                "cuisines": ["Pizzas"],
                "avgRating": 3,
                "availability": { "opened": true },
            },
        },
    ]);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="top-btn"
                    onClick={() => {
                        // Update the state with filtered restaurants
                        setListOfRes(reslist);
                        // setListOfRes(listofres.filter((res) => res.info.avgRating > 4));
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-cont">
                {listofres.map((restaurant) => (
                    <Restaurant key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;