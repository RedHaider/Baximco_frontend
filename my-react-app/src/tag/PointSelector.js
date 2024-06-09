import { useState } from "react";
import Select from 'react-select';



const PointSelector = ({uniqueNames, setFilteredNames}) => {
 const [pointSelector, setpointSelector] = useState([])

 const handlePoint = (selected) => {
    setpointSelector(selected);
    setFilteredNames(selected.map(point=>point.value));
 }
 const options = uniqueNames.map(name => ({ value: name, label: name }));
    return ( 
        <div className="m-3">
          <Select
          isMulti
          value={pointSelector}
          onChange={handlePoint}
          options={options}
          />
          </div>
     );
}
 
export default PointSelector;