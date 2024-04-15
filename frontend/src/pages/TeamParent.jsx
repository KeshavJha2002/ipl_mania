import TeamSidebar from "../components/shared/TeamSidebar"
import TeamPage from "./TeamPage"
import teams from '../lib/teams'
import { Routes, Route } from 'react-router-dom'
import IplPage from "./IplPage"

const TeamParent = () => {
  return (
    <div className="pt-20 flex flex-row">
      <TeamSidebar/>
    <div className="mt-10 w-4/5">
        <Routes>
          <Route index element={<IplPage/>}></Route>
            {teams.map((team) => (
                <Route key={team.id} path={`/${team.path}`} element={<TeamPage tag={`${team.path}`}/>}/>
            ))}
        </Routes>
      </div>
    </div>
  )
}

export default TeamParent
