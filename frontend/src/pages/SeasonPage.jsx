import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/shared/navbar';

const SeasonPage1 = () => {
    const { season } = useParams();
    const [seasonData, setSeasonData] = useState([]);
    const [coolFacts, setCoolFacts] = useState([]);

    useEffect(() => {
        // Fetch data for the selected season from backend API
        fetch(`your_backend_api_url/season/${season}`)
            .then(response => response.json())
            .then(data => setSeasonData(data))
            .catch(error => console.error('Error fetching season data:', error));

        // Fetch cool facts about IPL from backend API
        fetch('your_backend_api_url/cool-facts')
            .then(response => response.json())
            .then(data => setCoolFacts(data))
            .catch(error => console.error('Error fetching cool facts:', error));
    }, [season]);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Season {season}</h1>
                <h2 className="text-xl font-bold mb-2">Season Data</h2>
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            {/* Add more columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {seasonData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.column1}</td>
                                <td>{item.column2}</td>
                                {/* Add more cells as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h2 className="text-xl font-bold mb-2">Cool Facts About IPL</h2>
                <ul>
                    {coolFacts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SeasonPage;
