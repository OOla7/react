import { useState } from "react";
import PackageCard from "./PackageCard";


const DeliveryList = () => {

    const [data, setData ] = useState([
      {title: "Rotterdam",
        order: "91751",
        status: "on the way"
      },

      {title:"Amsterdam",
        order:"34134",
        status:"Recieved"

      },

      {title:"Eindhoven",
        order:"56723",
        status:"Recieved"
      },

      {title:"Barcelona",
        order:"74687",
        status:"Recieved"

      },

      {
        title:"Paris",
        order:"23466",
        status:"Recieved"
      },

      {
        title:"Toronto",
        order:"95678",
        status:"Recieved"
      },

      {
        title:"Berlin",
        order:"24579",
        status:"Recieved"
      },
      {
        title:"Vienna",
        order:"24578",
        status:"Recieved"
      },
    ]) ;

    
   
    return (
        <>
        <PackageCard />
        </>
      );
}
 
export default DeliveryList; 