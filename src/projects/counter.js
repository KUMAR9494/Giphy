import React from "react";
import axios from 'axios';


  const  Counter = ({data}) => {
    return(
            <div>
                    <div className="row">
                    {data.map((image)=> 
                    <div key={image.id}>
                            <div className="col-md-4">
                                    <img src={"https://pixabay.com/en/blossom-bloom-flower-195893/"} 
                                                 height = "200"  width =" 250"alt={image.title}/>
                                               
                                      
                                </div>

                    </div>)}
                    </div>
            </div> 
    )
}
  export default Counter;