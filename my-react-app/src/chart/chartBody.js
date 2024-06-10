import { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale } from 'chart.js/auto'; // Import Chart and CategoryScale separately

const ChartBody = ({ setUniqueNames, filteredNames }) => {
    const [chartData, setChartData] = useState(null);
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
                const names = Array.from(new Set(data.map(item => item.directory.name)));
                setUniqueNames(names);

                const groupedData = data.reduce((acc, item) => {
                    const timeString = item.time_string;
                    if (!acc[timeString]) {
                        acc[timeString] = { time_string: timeString };
                    }
                    acc[timeString][item.directory.name] = item.var_value;
                    return acc;
                }, {});

                const rows = Object.values(groupedData);

                const labels = rows.map(row => row.time_string);
                const datasets = filteredNames.map(name => {
                    return {
                        label: name,
                        data: rows.map(row => row[name] || 0), // Default to 0 if the data point is missing
                        borderColor: getRandomColor(), // Assign a random color to each dataset
                        tension: 0.1,
                    };
                });

                setChartData({
                    labels: labels,
                    datasets: datasets,
                });

                setLoading(false);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                setError(error);
                setLoading(false);
            });
    }, [filteredNames]);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Line Chart Example</h2>
            {chartData && <Line data={chartData} />}
        </div>
    );
};

export default ChartBody;
