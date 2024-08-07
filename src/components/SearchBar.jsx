import { useState } from "react";
import "./SearchBar.css"

import SearchIcon from './lupa.jpg';
import CloseIcon from './tache.jpg';


const SearchBar = ({placeHolder,data}) => {
    const [filterData,setFilterdata] = useState([])
    const [actualWord, setActualWord] = useState("")

    
    const handleFilter = (e) =>{
    setActualWord(e.target.value)
    const filter = data.filter((v)=>{
        return v.author.toLowerCase().includes(e.target.value.toLowerCase()) + v.title.toLowerCase().includes(e.target.value.toLowerCase())
    })

     if(e.target.value ==""){
        setFilterdata([])
     }else{
        setFilterdata(filter)
    }   
}
const clearData = () =>{
    setFilterdata([])
    setActualWord("")
}

  return (
    <div className="search">
        <div className="searchInput">
            <input type="text" placeholder={placeHolder} value={actualWord} onChange={handleFilter} />
            <div className="searchIcon">
                
                {filterData.length ===0 ?(
                    <img className="cursor" src={SearchIcon} />
                ) : (
                    <img className="cursor" src={CloseIcon} onClick={clearData} /> 
                )
                }        
            </div>

        </div>
        {filterData.length !=0 &&(
        
        <div className="dataResults">
            {
                filterData.slice(0,15).map((item,key) =>{
                    return (
                        <a className="dataItem" href={item.link} target="_blank" key={key}>
                            <p>{item.title + " / " +item.author}</p>
                        </a>
                    )
                })
            }
        </div>
        )}
    </div>
  )
}

export default SearchBar