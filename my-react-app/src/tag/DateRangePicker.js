import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


const DateRangePicker = () => {
 const [startDate, setStartDate] = useState(null);
 const [endDate, setEndDate] = useState(null);

 const handleStartDate = (date) => {
    setStartDate(date);
    if(date>endDate) {
        setEndDate(null);
    }
 }

 const handleEndDate = (date) => {
    setEndDate(date);
 }

    return ( 
        <div className="row">
            <div className="date-picker mt-2">
                <label className="col-2">From:</label>
                <DatePicker 
                     className="col-8"
                     selected={startDate}
                     onChange={handleStartDate}
                     selectsStart
                     startDate={startDate}
                     endDate={endDate}
                     dateFormat="dd/MM/yyyy"
                     placeholderText="Select start date"
                   />
            </div>
            <div>
            <div className="date-picker mt-2 mb-1">
                <label className="col-2">To:</label>
                <DatePicker
                   className="col-8"
                    selected={endDate}
                    onChange={handleEndDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select end date"
                    />
            </div>
            </div>

        </div>
     );
}
 
export default DateRangePicker;