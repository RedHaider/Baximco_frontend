import { useState, useEffect, useRef } from "react";
import FilterSection from "./tag/FilterSection";
import TableSection from "./tag/TableSection";
import ButtonDownload from "./tag/ButtonDownload";

const Tag = () => {
    const [uniqueNames, setUniqueNames] = useState([]);
    const [filteredName, setFilteredNames] = useState([]);
    const [Date, setDate] = useState([])

    console.log(filteredName)



    return ( 
        <div>
            <div className="container">
                <FilterSection 
                uniqueNames={uniqueNames} 
                setFilteredNames = {setFilteredNames}
                Date = {Date}
                 />
                <TableSection 
                setUniqueNames={setUniqueNames} 
                filteredNames = {filteredName}
                setDate = {setDate}
                />
                <ButtonDownload  />

            </div>
        </div>
    );
}
 
export default Tag;
