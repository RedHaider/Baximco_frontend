import DateRangePicker from "./DateRangePicker";
import PointSelector from "./PointSelector";

const FilterSection = ({uniqueNames, setFilteredNames}) => {


    return ( 
<div className="mt-2 mb-2">
        <div className="row">
        <div className="col-sm-4">
            <div class="card">
                <h5 className="card-title">Point Selector</h5>
                <PointSelector 
                uniqueNames={uniqueNames} 
                setFilteredNames = {setFilteredNames}
                />
            </div>
        </div>
        <div className="col-sm-4">
        <div class="card ">
                <h2 className="m-4">Tag</h2>
            </div>
            </div>
        <div className="col-sm-4">
        <div class="card">
            <h5 className="card-title">Date Range</h5>
             <DateRangePicker/>
            </div>
            </div>
        </div>
</div>
     );
}
 
export default FilterSection;