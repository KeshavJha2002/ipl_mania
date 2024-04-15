// import SeasonSidebar from "../components/shared/seasonSidebar"
import SeasonSidebar from "C:/Users/sugni/Documents/Code Workspace/dbms_fin_proj/ipl_mania/frontend/src/components/shared/seasonSideBar.jsx"
import SeasonPage from "./SeasonPage"
import seasons from '../lib/seasons'
import { Routes, Route } from 'react-router-dom'

const SeasonParent = () => {
  return (
    <div className="pt-20 flex flex-row">
      <SeasonSidebar/>
    <div className="mt-10 w-4/5">
        <Routes>
            {seasons.map((season) => (
                <Route key={season.id} path={`/${season.path}`} element={<SeasonPage tag={`${season.path}`}/>}/>
            ))}
        </Routes>
      </div>
    </div>
  )
}

export default SeasonParent
