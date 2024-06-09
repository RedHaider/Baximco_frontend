import { useState, useEffect } from "react";
import FilterSection from "./tag/FilterSection";
import TableSection from "./tag/TableSection";
import ButtonDownload from "./tag/ButtonDownload";

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
                <TableSection 
                uniqueNames={uniqueNames} 
                setUniqueNames={setUniqueNames} 
                filteredNames = {filteredName}
                />
                <ButtonDownload />
            </div>
        </div>
    );
}
 
export default Tag;
