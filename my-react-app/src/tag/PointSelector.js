import { useState } from "react";
import Select from 'react-select';

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ];

const PointSelector = () => {
 const [pointSelector, SetpointSelector] = useState([])

 const handlePoint = (selected) => {
    SetpointSelector(selected);
 }
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