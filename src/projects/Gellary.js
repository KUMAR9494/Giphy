import React,{useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './counter';






const apiKey = "27842409-d263c5fb34a4d09f95ba87dbd";
const  Gellary = () =>{
    const [search,setSearch] = useState('')
    const [data,setData] = useState([]) 
    const changeHandler = e => {
        setSearch(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.get("https://pixabay.com/api/?key=27842409-d263c5fb34a4d09f95ba87dbd&q=yellow+flowers&image_type=photo").then(
            response => setData(response.data.photos.photo)

        )
      
        console.log(search);
    }

    
    
    return(
            <div>
                <center>
                     <h2>Gellary snapshots</h2><br/>
                        <form onSubmit={submitHandler}>
                            <input type="text" value={search} onChange={changeHandler}/> <br/><br/>
                            <input type="submit" name="Search"/>
                        </form>
                        <br/>
                        {data.length>=1? <Counter data={data}/>:<h4> No Data Loaded</h4>}
                        
                </center>

            </div>
    )
}
export default Gellary;