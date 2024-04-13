import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import seasons from '../../lib/seasons';
import Navbar from './navbar';
import { FaBars } from 'react-icons/fa';
import SeasonPage from '../../pages/SeasonPage';

const SeasonPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <SeasonPage />
            <Navbar />
            <div className="flex">
                {/* Hamburger menu */}
                <div className="fixed top-4 left-4 z-50 cursor-pointer text-white" onClick={toggleSidebar}>
                    <FaBars size={24} />
                </div>
                {/* Sidebar */}
                <div className={`bg-black text-white fixed top-0 left-0 p-4 overflow-y-auto h-full w-64 transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}> 
                    <h1 className="text-lg font-bold mb-4">Seasons</h1>
                    <ul>
                        {seasons.map((season) => (
                            <li key={season.id} className="mb-2">
                                <NavLink 
                                    to={`/season/${season.path}`} 
                                    className="flex items-center px-2 py-1 rounded hover:bg-red-600 hover:text-white transition duration-300">
                                    {season.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Main Content */}
                <div className={`ml-64 p-4 overflow-y-auto ${sidebarOpen ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
                    {/* Your main content here */}
                </div>
            </div>
        </div>
    );
}

export default SeasonPage;
