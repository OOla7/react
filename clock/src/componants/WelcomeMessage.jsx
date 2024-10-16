import { useEffect, useState } from "react";

const WelcomeMessage = () => {
    const [message,setMessage] = useState('');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let newMessage ='';

useEffect (()=>{
    
    

    if (hours < 12) {
        newMessage = 'Goedemorgen';
      } else if (hours < 18) {
        newMessage = 'Goedemiddag';
      } else {
        newMessage = 'Goedenavond';
      }
  
      setMessage(newMessage);

})

    return (
        <section>
            {message}
        </section>
    );
}

 
export default WelcomeMessage;