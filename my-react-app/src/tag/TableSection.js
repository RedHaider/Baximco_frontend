import { useState, useEffect } from "react";
import '../css/table.css';

const TableSection = ({ setUniqueNames,filteredNames,setDate }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/tag')
            .then((response) => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);

                const names = Array.from(new Set(data.map(item => item.directory.name)));
                setUniqueNames(names);

                // Extract time_string values and set them using setDate
                const datetime = data.map(item => item.time_string);
                setDate(datetime);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                setError(error);
                setLoading(false);
            });
    }, [setUniqueNames, setDate]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    const groupedData = data.reduce((acc, item) => {
        const timeString = item.time_string;
        if (!acc[timeString]) {
            acc[timeString] = { time_string: timeString };
        }
        acc[timeString][item.directory.name] = item.var_value;
        return acc;
    }, {});

    const rows = Object.values(groupedData);


    return (
        <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '800px', maxWidth: '1000px' }} >
            <table border="1" className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th className="sticky-timestring">Time String</th>
                        {filteredNames.map(name => (
                            <th className="sticky-header" key={name}>{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className="sticky-column">{row.time_string}</td>
                            {filteredNames.map(name => (
                                <td key={name}>
                                    {row[name] !== undefined ? row[name] : 'N/A'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableSection;
