import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Restaurant";
import reslist from "../utils/mockdata";
import { useState } from "react";
//State Variable React hooks
const {listofres} = useState([
    {
        "info": {
          "id": "831065",
          "name": "Chinese Wok",
          "cloudinaryImageId": "f996b31033fd07603bfb28cb4e526683",
          "locality": "Chandni Chowk",
          "areaName": "Omaxe mall",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "61955",
          "avgRatingString": "4.1",
          "totalRatingsString": "276",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-12 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-aefac506-ff80-4663-a71f-5e82e0380eda"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/delhi/chinese-wok-chandni-chowk-omaxe-mall-rest831065",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "804071",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/1848de26-14f7-444f-9cb8-f59342077782_804071.jpg",
          "locality": "H.C. Sen Marg",
          "areaName": "Omaxe ChandniChowk",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 3,
          
          "availability": {
            "nextCloseTime": "2025-03-12 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ]
          }}} 
]);
//  listofresjs = [ {
//     "info": {
//       "id": "831065",
//       "name": "Chinese Wok",
//       "cloudinaryImageId": "f996b31033fd07603bfb28cb4e526683",
//       "locality": "Chandni Chowk",
//       "areaName": "Omaxe mall",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Chinese",
//         "Asian",
//         "Tibetan",
//         "Desserts"
//       ],
//       "avgRating": 4.1,
//       "parentId": "61955",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "276",
//       "sla": {
//         "deliveryTime": 32,
//         "lastMileTravel": 1.2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "1.2 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2025-03-12 23:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹129"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-aefac506-ff80-4663-a71f-5e82e0380eda"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/delhi/chinese-wok-chandni-chowk-omaxe-mall-rest831065",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "804071",
//       "name": "Pizza Hut",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/1848de26-14f7-444f-9cb8-f59342077782_804071.jpg",
//       "locality": "H.C. Sen Marg",
//       "areaName": "Omaxe ChandniChowk",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Pizzas"
//       ],
//       "avgRating": 3,
      
//       "availability": {
//         "nextCloseTime": "2025-03-12 23:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Pizza.png",
//             "description": "Delivery!"
//           }
//         ]
//       }}}]
const Body = () => (
    <div className="body">
    
            <div className="filter"><button className="top-btn" onClick={()=>{  
                listofres =listofres.filter((res)=> res.info.avgRating>4);
             }}> 
            Top Rated Restaurant</button>
        </div>
        <div className="res-cont">
         {
            listofres.map(restaurant => <Restaurant key={restaurant.info.id} resData={restaurant}/>)
         }
        
        </div>
    </div>
)
export default Body;