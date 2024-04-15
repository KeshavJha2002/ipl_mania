// Sidebar.jsx
import { NavLink } from 'react-router-dom';
import seasons from '../../lib/seasons';

const SeasonSidebar = () => {
    return (
        <>
        <div className="flex h-[100%] justify-center items-center">
            {/* Sidebar */}
            <div className="bg-black text-white w-64">
                <h1 className="text-[24px] font-bold mb-4 text-center">Seasons</h1>
                <ul className="flex flex-col item-center justify-center gap-[5px]">
                    {seasons.map((season) => (
                        <li key={season.id} className="text-center">
                            <NavLink 
                                to={`/seasons/${season.path}`} 
                                className="flex items-center text-[22px] px-2 py-1 rounded transition-colors hover:bg-red-300 hover:text-slate-600 text-center justify-center"
                                >
                                {season.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
    );
}

export default SeasonSidebar;
