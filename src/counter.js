import React from "react";

  const  Counter = ({data}) => {
    return(
            <div>
                    <div className="row">
                    {data.map((image)=> 
                    <div key={image.id}>
                            <div className="col-md-4">
                                    <img src={`"https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg"`} 
                                                 height = "200"  width =" 250"alt={image.title}/>
                                               
                                      
                                </div>

                    </div>)}
                    </div>
            </div> 
    )
}
  export default Counter;