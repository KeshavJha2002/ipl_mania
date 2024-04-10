import React from 'react';
// import Chart from 'react-chartjs-2';
import teams from '../lib/teams'; // Assuming teams data is exported from './teams' file
import Navbar from '../components/shared/navbar';
import Sidebar from '../components/shared/sidebar';

const TeamPage = () => {
    // Sample data for charts
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56]
        }]
    };
    // console.log(team);
    return (
        <>
        <Navbar />
            <div className="ml-30 flex" style={{ height: '100vh', width: '100vw' }}>
                <Sidebar />
                <div className="teamcontent w-2/3 pt-32 ml-30 bg-gradient-to-tr from-gray-900 to-gray-700 text-white">
                    {teams.map((team) => (
                        <div key={team.id} className="team-container mb-8 flex items-center">
                            <img src={team.team_icon} alt={team.name} className="w-16 h-16 mr-4 rounded-full" />
                            <div className="team-info">
                                <h2 className="text-xl font-semibold">{team.name}</h2>
                                <p>{team.description}</p>
                                <div className="team-stats mt-2">
                                    {/* <p>Trophies: {team.trophies}</p>
                                    <p>Orange Caps: {team.orange_caps}</p>
                                    <p>Purple Caps: {team.purple_caps}</p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
       
    </>
    );
}

export default TeamPage;
