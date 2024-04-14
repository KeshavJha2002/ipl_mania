// Sidebar.jsx
import { NavLink } from 'react-router-dom';
import teams from '../../lib/teams'; // Assuming teams data is exported from './teams' file

const TeamSidebar = () => {
    return (
        <>
        <div className="flex">
            {/* Sidebar */}
            <div className="sidebar bg-black text-white h-screen"> 
                <h1 className="text-lg font-bold mb-4 text-center">Teams</h1>
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
        </div>
    </>
    );
}

export default TeamSidebar;
