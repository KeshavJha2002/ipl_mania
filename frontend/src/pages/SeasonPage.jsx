import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

const iplTeams = [
  { name: 'Chennai Super Kings', brand: 'CSK' },
  { name: 'Delhi Capitals', brand: 'DC' },
  { name: 'Kolkata Knight Riders', brand: 'KKR' },
  { name: 'Mumbai Indians', brand: 'MI' },
  { name: 'Punjab Kings', brand: 'PBKS' },
  { name: 'Rajasthan Royals', brand: 'RR' },
  { name: 'Royal Challengers Bangalore', brand: 'RCB' },
  { name: 'Sunrisers Hyderabad', brand: 'SRH' },
  { name: 'Deccan Chargers', brand: 'DC' },
  { name: 'Gujarat Titans', brand: 'GT' },
  { name: 'Gujarat Lions', brand: 'GL' },
  { name: 'Kings XI Punjab', brand: 'KXIP' },
  { name: 'Kochi Tuskers Kerala', brand: 'KTK' },
  { name: 'Pune Warriors', brand: 'PWI' },
  { name: 'Lucknow Super Giants', brand: 'LSG' },
  { name: 'Rising Pune Supergiant', brand: 'RPS' },
  { name: 'Delhi Daredevils', brand: 'DD' }
];

const SeasonPage = ({ tag }) => {
  const [top_bowlers, set_top_bowlers] = useState([]);
  const [top_batters, set_top_batters] = useState([]);
  const [win_details, set_win_details] = useState([]);
  const [boundary_details, set_boundary_details] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bowlersResponse = await axios.get(`http://localhost:7000/season/get_top_bowlers/${tag}`);
        const battersResponse = await axios.get(`http://localhost:7000/season/get_top_batter/${tag}`);
        const winResponse = await axios.get(`http://localhost:7000/season/get_win_details/${tag}`);
        const boundaryResponse = await axios.get(`http://localhost:7000/season/get_boundary_details/${tag}`);

        set_top_bowlers(bowlersResponse.data);
        set_top_batters(battersResponse.data);
        set_win_details(winResponse.data);
        set_boundary_details(boundaryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [tag]);

  const win_array = win_details.map(detail => parseFloat(detail.wins));
  const loss_array = win_details.map(detail => parseFloat(detail.losses));

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <Grid item xs={4}>
              {top_bowlers.length > 0 && (
                <TableContainer component={Paper}>
                  <Table aria-label="top bowlers table">
                    <TableHead>
                      <TableRow>
                        <TableCell><b>Bowler</b></TableCell>
                        <TableCell align="right"><b>Wicket Count</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {top_bowlers.map((bowlerData, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {bowlerData.bowler}
                          </TableCell>
                          <TableCell align="right">{bowlerData.wicket_count}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Grid>
            <Grid item xs={4}>
              {top_batters.length > 0 && (
                <TableContainer component={Paper}>
                  <Table aria-label="top batters table">
                    <TableHead>
                      <TableRow>
                        <TableCell><b>Batter</b></TableCell>
                        <TableCell align="right"><b>Total Runs</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {top_batters.map((batterData, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {batterData.batter}
                          </TableCell>
                          <TableCell align="right">{batterData.tot_run}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Grid>
            <Grid item xs={4}>
              {boundary_details.length > 0 && (
                <TableContainer component={Paper}>
                  <Table aria-label="boundary details table">
                    <TableHead>
                      <TableRow>
                        <TableCell><b>Batter</b></TableCell>
                        <TableCell align="right"><b>Number of Boundaries</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {boundary_details.map((boundaryData, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {boundaryData.batter}
                          </TableCell>
                          <TableCell align="right">{boundaryData.no_of_boundary}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          {win_details.length > 0 && (
            <LineChart
              series={[
                { curve: "linear", data: win_array, color: "green", label: "wins" },
                { curve: "linear", data: loss_array, color: "red", label: "losses" }
              ]}
              xAxis={[{ scaleType: 'point', data: win_details.map(detail => iplTeams.find(team => team.name === detail.team)?.brand) }]}
              width={1100}
              height={300}
              margin={{ top: 30, right: 20, left: 40, bottom: 30 }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default SeasonPage;
