import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LineChart } from '@mui/x-charts/LineChart';

const TeamPage = ({ tag }) => {
    const [top_bowlers, set_top_bowlers] = useState([]);
    const [top_batters, set_top_batters] = useState([]);
    const [win_details, set_win_details] = useState({ win_data: [], loss_data: [] });
    const [boundary_details, set_boundary_details] = useState([]);

    tag = tag.replace('%20', '');

    useEffect(() => {
        const fetchTopBowlers = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/team/get_top_bowlers/${tag}`);
                set_top_bowlers(response.data);
            } catch (error) {
                console.error("Error fetching top bowlers:", error);
            }
        };

        const fetchTopBatters = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/team/get_top_batter/${tag}`);
                set_top_batters(response.data);
            } catch (error) {
                console.error("Error fetching top batters:", error);
            }
        };

        const fetchWinDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/team/get_win_details/${tag}`);
                const { win_data, loss_data } = response.data;
                // Sort win_data and loss_data based on season
                const sorted_win_data = win_data.sort((a, b) => a.season - b.season);
                const sorted_loss_data = loss_data.sort((a, b) => a.season - b.season);
                set_win_details({ win_data: sorted_win_data, loss_data: sorted_loss_data });
            } catch (error) {
                console.error("Error fetching win details:", error);
            }
        };

        const fetchBoundaryDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/team/get_boundary_details/${tag}`);
                set_boundary_details(response.data);
            } catch (error) {
                console.error("Error fetching boundary details:", error);
            }
        };

        fetchTopBowlers();
        fetchTopBatters();
        fetchWinDetails();
        fetchBoundaryDetails();
    }, [tag]);
    

    return (
        <div>
            <div>
                {top_bowlers.length > 0 && (
                    <TableContainer component={Paper}>
                        <Table aria-label="top bowlers table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Bowler</TableCell>
                                    <TableCell align="right">Wicket Count</TableCell>
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
            </div>
            <div>
                {top_batters.length > 0 && (
                    <TableContainer component={Paper}>
                        <Table aria-label="top batters table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Batter</TableCell>
                                    <TableCell align="right">Total Runs</TableCell>
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
            </div>
            <div>
                {boundary_details.length > 0 && (
                    <TableContainer component={Paper}>
                        <Table aria-label="boundary details table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Batter</TableCell>
                                    <TableCell align="right">Number of Boundaries</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {boundary_details.map((boundaryData, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {boundaryData.batter}
                                        </TableCell>
                                        <TableCell align="right">{boundaryData.total_boundaries}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </div>
            <div>
                {win_details.win_data.length > 0 && (
                    <LineChart
                    series={[
                        { curve: "linear", data: win_details.win_data.map(data => parseFloat(data.matches_won)), color: "green", label: "Wins" },
                        { curve: "linear", data: win_details.loss_data.map(data => parseFloat(data.matches_lost)), color: "red", label: "Losses" }
                    ]}
                    xAxis={[
                        { scaleType: 'point', data: win_details.win_data.map(data => data.season) }
                    ]}
                    width={1000}
                    height={300}
                    margin={{ top: 30, right: 10, left: 30, bottom: 30 }}
                    />
                )}
            </div>
        </div>
    );
}

export default TeamPage;
