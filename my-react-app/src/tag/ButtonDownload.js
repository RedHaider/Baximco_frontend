import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";


const ButtonDownload = () => {


    return (
        <div className="row mt-4 mb-4">
            <div className="col-10"></div>
            <div className="justify-content-end col-2">
                <button
                    type="button"
                    className="btn btn-danger"
                >
                    Download PDF
                </button>
            </div>
        </div>
    );
}

export default ButtonDownload;
