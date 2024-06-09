import { useState, useEffect } from "react";
import '../css/table.css';

const TableSection = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [uniqueNames, setUniqueNames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/tag')
            .then((response) => {
                console.log('Response status:', response.status);  // Log the status code
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);

                // Extracting the unique directory names
                const names = Array.from(new Set(data.map(item => item.directory.name)));
                setUniqueNames(names);
            })
            .catch((error) => {
                console.error('Fetch error:', error);  // Log the error message
                setError(error);
                setLoading(false);
            });
    }, []);

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
        <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '800px', maxWidth:'1000px' }} >
            <table border="1"class="table table-striped table-bordered " >
                <thead>
                    <tr>
                        <th className="sticky-timestring ">Time String</th>
                        {uniqueNames.map(name => (
                            <th 
                            className="sticky-header"
                             key={name}>{name}
                             </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className="sticky-column">{row.time_string}</td>
                            {uniqueNames.map(name => (
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
