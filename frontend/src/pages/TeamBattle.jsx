import { useState, useEffect } from "react";
import teamsData from "../lib/teams"; // Assuming teams data is exported from './teams' file
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import axios from "axios";

const TeamBattle = () => {
  // State variables
  const [selectedTeam1, setSelectedTeam1] = useState("");
  const [selectedTeam2, setSelectedTeam2] = useState("");
  const [matchResults, setMatchResults] = useState([]);

  // Function to fetch team information from the database
  const fetchResult = async () => {
    try {  
      const res = await axios.get(`http://localhost:7000/battle/get_battle_result/${selectedTeam1}/${selectedTeam2}`);
      setMatchResults(res.data);
    } catch (error) {
      console.error("Error fetching battle result:", error);
    }
  };

  useEffect (() => {
    if (selectedTeam1 && selectedTeam2) {
      fetchResult();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTeam1, selectedTeam2]);

  return (
    <>
      <div
        className=" items-center bg-gray-900"
        style={{
          height: "100vh",
          width: "100vw",
          paddingTop: "50px",
          paddingLeft: "20px",
          overflowX: "hidden", // Remove horizontal scroll
          overflowY: "auto",
        }}
      >
        <div
          className="flex bg-gradient-to-tr from-gray-900 to-gray-700 text-white p-8 rounded items-center justify-center"
          style={{
            paddingLeft: "20px",
            paddingTop: "20px",
            marginRight: "20px",
            marginTop: "60px",
          }}
        >
          {/* Team selection form */}
          <form>
            <h1 className=" flex text-4xl font-semibold mb-4 justify-center">
              Select Two Teams
            </h1>
            <div className="mb-8 flex justify-between">
              <FormControl className="w-1/2 mr-4 " style={{ width: "400px" }}>
                <InputLabel id="team1-label">Team 1</InputLabel>
                <Select
                  labelId="team1-label"
                  id="team1"
                  value={selectedTeam1}
                  autoWidth
                  onChange={(event) => setSelectedTeam1(event.target.value)}
                  style={{ backgroundColor: "white" }}
                >
                  {teamsData.map((team, index) => (
                    <MenuItem key={index} value={team.name}>
                      {team.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                className="w-1/2 mr-4"
                style={{ width: "400px", marginLeft: "15px" }}
              >
                <InputLabel id="team2-label">Team 2</InputLabel>
                <Select
                  labelId="team2-label"
                  id="team2"
                  value={selectedTeam2}
                  onChange={(event) => setSelectedTeam2(event.target.value)}
                  style={{ backgroundColor: "white" }}
                >
                  {teamsData.map((team, index) => (
                    <MenuItem key={index} value={team.name}>
                      {team.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </form>
        </div>
        {selectedTeam1.length > 0 && selectedTeam2.length > 0 && (
          <TableContainer component={Paper}>
            <Table aria-label="match results table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Season</b></TableCell>
                  <TableCell><b>Venue</b></TableCell>
                  <TableCell><b>Winning Team</b></TableCell>
                  <TableCell><b>Player of the Match</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {matchResults.map((match, index) => (
                  <TableRow key={index}>
                    <TableCell>{match.season}</TableCell>
                    <TableCell>{match.venue}</TableCell>
                    <TableCell>{match.winning_team}</TableCell>
                    <TableCell>{match.player_of_match}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
};

export default TeamBattle;
