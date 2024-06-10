import { useState, useEffect, useRef } from "react";
import FilterSection from "./tag/FilterSection";
import ButtonDownload from "./tag/ButtonDownload";
import ChartBody from "./chart/chartBody";

const Tag = () => {
    const [uniqueNames, setUniqueNames] = useState([]);
    const [filteredName, setFilteredNames] = useState([]);



    return ( 
        <div>
            <div className="container">
                <FilterSection 
                uniqueNames={uniqueNames} 
                setFilteredNames = {setFilteredNames}
                 />
                <ChartBody
                setUniqueNames={setUniqueNames} 
                filteredNames = {filteredName}
                />
                <ButtonDownload  />

            </div>
        </div>
    );
}
 
export default Tag;
