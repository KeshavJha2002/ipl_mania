// Sidebar.jsx
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import teams from '../../lib/teams'; // Assuming teams data is exported from './teams' file
import TeamPage from '../../pages/TeamPage'; // Assuming TeamPage component is defined in a separate file
import Navbar from './navbar';

const Sidebar = () => {
    return (
        <>
        <Navbar/>
        <div className="flex">
            {/* Sidebar */}
            <div className="sidebar bg-black text-white h-screen fixed top-20 "> 
                <h1 className="text-lg font-bold mb-4">Teams</h1>
                <ul>
                    {teams.map((team) => (
                        <li key={team.id} className="mb-2">
                            <NavLink 
                                to={`/teams/${team.path}`} 
                                className="flex items-center  text-xl  px-2 py-1 rounded hover:bg-red-300 hover:text-slate-600 "
                                >
                                <img src={team.team_icon} alt={team.name} className="w-12 h-12 mr-2" />
                                {team.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Team Page */}
            {/* <div className="team-page mt-10 w-4/5">
                <Routes>
                    {teams.map((team) => (
                        
                        <NavLink to={`/teams/${team.path}`} />
                    ))}
                </Routes>
            </div> */}
        </div>
     </>
    );
}

export default Sidebar;
