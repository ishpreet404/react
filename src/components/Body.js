import Restaurant from "./Restaurant";
import reslist from "../utils/mockdata";
const Body = () => (
    <div className="body">
    
        <div className="filter"><button className="top-btn" onClick={()=>{console.log("buttonclicked");
        }}>Top Rated Restaurant</button>
        </div>
        <div className="res-cont">
         {
            reslist.map(restaurant => <Restaurant key={restaurant.info.id} resData={restaurant}/>)
         }
        
        </div>
    </div>
)
export default Body;