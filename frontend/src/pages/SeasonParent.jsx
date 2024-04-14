import SeasonSidebar from "../components/shared/SeasonSidebar"
import SeasonPage from "./SeasonPage"
import seasons from '../lib/seasons'
import { Routes, Route } from 'react-router-dom'

const SeasonParent = () => {
  return (
    <div className="pt-20">
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
