import React from "react";
import'./Body.css';
import flotw1 from '../../img/flotw1.jpg';
import Logo from '../Logo/Logo.js'
import Like from '../../img/like.jpeg';




function  Body(){
    return (
        <div className="body">
            <div className="b-left">
            <div className="b-name">

           
            <span> Hy! I Am </span>
            <span>Kumar Sai</span>
            <span> Frontend Developer with 2 years of Experience in 
                web designing and development,
                 producting the Quality work</span><br/>
                 
            <button className="hire">Hire me</button>

             <div className="i-icons">
                
                <a href="https://github.com/KUMAR9494" ><img className="img"src='./image/pgit.png'/></a>
                <a href=""><img className="img"src='./image/pinsta.png'/></a>
                <a href="" ><img className="img"src='./image/pfb.png'/></a>
                 

             </div>
            
            </div>
             </div>
            
        
            
             <div className="b-right"></div>

             <table>
                       <tr>
                                <th><img className="img1"src='./image/sai1.jpg'/></th>
                      </tr>
                      <tr>
                           <th><img className="img2" src='./image/emoji2.jpg'/></th>
                      </tr>
           </table>
                 
                 <div>
                     <Logo img={flotw1} txt1='Web' txt2='Developer ' />
                 </div>

                 <div className="like">
                     <Logo  img={Like} txt1='Best Design' txt2='Award ' />
                 </div>
                

                        
                  
                

        </div>
              
              

    )
}
 export default Body;
