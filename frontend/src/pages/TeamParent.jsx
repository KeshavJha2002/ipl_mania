import TeamSidebar from "../components/shared/TeamSidebar"
import TeamPage from "./TeamPage"
import teams from '../lib/teams'
import { Routes, Route } from 'react-router-dom'

const TeamParent = () => {
  return (
    <div className="pt-20">
      <TeamSidebar/>
    <div className="mt-10 w-4/5">
        <Routes>
            {teams.map((team) => (
                <Route key={team.id} path={`/${team.path}`} element={<TeamPage tag={`${team.path}`}/>}/>
            ))}
        </Routes>
      </div>
    </div>
  )
}

export default TeamParent
