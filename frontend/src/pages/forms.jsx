import React, { useState } from "react";
import teamsData from "../lib/teams"; // Assuming teams data is exported from './teams' file
import Navbar from "../components/shared/navbar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FormsPage = () => {
  // Sample data for charts
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  // State variables
  const [selectedTeam1, setSelectedTeam1] = useState("");
  const [selectedTeam2, setSelectedTeam2] = useState("");
  const [error, setError] = useState("");
  const [teamInfo, setTeamInfo] = useState({});

  // Function to fetch team information from the database
  const fetchTeamInfo = () => {
    // Reset error message
    setError("");

    // Check if exactly two teams are selected
    if (!selectedTeam1 || !selectedTeam2 || selectedTeam1 === selectedTeam2) {
      setError("Please select two different teams.");
      return;
    }

    // Here you would make an API call to fetch team information from the database based on selectedTeams
    // For demonstration purposes, I'll just log the selected teams
    console.log("Selected Teams:", selectedTeam1, selectedTeam2);

    // Set team information
    setTeamInfo({ selectedTeam1, selectedTeam2 });

    // Reset selectedTeams after fetching information
    setSelectedTeam1("");
    setSelectedTeam2("");
  };

  return (
    <>
      <Navbar />
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
          className="teamcontent flex bg-gradient-to-tr from-gray-900 to-gray-700 text-white p-8 rounded items-center justify-center"
          style={{
            paddingLeft: "20px",
            paddingTop: "20px",
            marginRight: "20px",
            marginTop: "60px",
          }}
        >
          {/* Team selection form */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              fetchTeamInfo();
            }}
          >
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

            {error && (
              <p className="text-red-500 mb-4 flex justify-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={!selectedTeam1 || !selectedTeam2}
              className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center w-full justify-center"
              style={{
                cursor: !selectedTeam1 || !selectedTeam2 ? "not-allowed" : "pointer",
                fontSize: "1.2rem",
              }}
            >
              Get Team Info
            </button>
          </form>

          {/* Display team information */}
          
        </div>
        {teamInfo.selectedTeam1 && teamInfo.selectedTeam2 && (
            <div
              className="teamcontent bg-gradient-to-tr from-white to-white text-black p-8 rounded items-center"
              style={{
                paddingLeft: "40px",
                margin: "25px",
                marginTop: "40px",
                paddingTop: "40px",
                width: "1400px",
                height: "auto",
              }}
            >
              <p>Selected Team 1: {teamInfo.selectedTeam1}</p>
              <p>Selected Team 2: {teamInfo.selectedTeam2}</p>
            </div>
          )}
      </div>
    </>
  );
};

export default FormsPage;

