import React from 'react'
import { TheToddler4hr, TheToddler6hr, TheToddler8hr } from './PayPalCheckOut';


export const CheckOutForm = () => {
    // const onSubmit = (data, e) => console.log(data, e);

    const handleSubmit = (e)=>{
        const time = document.getElementById("time")
           const selection = time.options[time.selectedIndex].value;
           console.log(selection)
           if(selection === "4hrs"){
            e.preventDefault();
               return <TheToddler4hr />
           } else if (selection === "6hrs"){
            e.preventDefault();
               return <TheToddler6hr />
           }else if(selection == "8hrs"){
            e.preventDefault();
               return <TheToddler8hr />
           } else{
            e.preventDefault();
               return <p>please make a sele</p>
           }
       }
    
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label for="time">Choose a Duration:</label>
                <select name="time" id="time">
                    <option value="4hr">4Hrs</option>
                    <option value="6hr">6Hrs</option>
                    <option value="8hr">8Hrs</option>
                </select>
                <button type="submit">helllo</button>
            </form>


        </div>
    )
}




