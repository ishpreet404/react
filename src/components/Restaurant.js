import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId} = resData?.info;
    return (
    <div className="res-card">
        <img alt="cardlogo" className="cardimg" src={CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3> 
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
    </div>
  )}
  export default Restaurant;