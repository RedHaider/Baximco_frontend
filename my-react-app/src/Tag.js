import { Button } from "bootstrap";
import FilterSection from "./tag/FilterSection";
import TableSection from "./tag/TableSection";
import ButtonDownload from "./tag/ButtonDownload";

const Tag = () => {
    return ( 
        <div>
            <div className="container">
            <FilterSection/>
            <TableSection />
            <ButtonDownload/>
            </div>
        </div>
     );
}
 
export default Tag;