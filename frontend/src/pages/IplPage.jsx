import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const IplPage = () => {
    const [topBowlers, setTopBowlers] = useState([]);
    const [topBatters, setTopBatters] = useState([]);
    const [boundaryDetails, setBoundaryDetails] = useState([]);

    useEffect(() => {
        const fetchTopBowlers = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/get_top_bowlers`);
                setTopBowlers(response.data);
            } catch (error) {
                console.error("Error fetching top bowlers:", error);
            }
        };

        const fetchTopBatters = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/get_top_batter`);
                setTopBatters(response.data);
            } catch (error) {
                console.error("Error fetching top batters:", error);
            }
        };

        const fetchBoundaryDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/get_boundary_details`);
                setBoundaryDetails(response.data);
            } catch (error) {
                console.error("Error fetching boundary details:", error);
            }
        };

        fetchTopBowlers();
        fetchTopBatters();
        fetchBoundaryDetails();
    }, []);

    return (
        <div>
            <Box display="flex" justifyContent="space-between" mt={4} flexDirection="row" flexWrap="wrap">
                <Box mx={2} width={1/4}>
                    <TableContainer component={Paper}>
                        <Table aria-label="top batters table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Batter</b></TableCell>
                                    <TableCell align="right"><b>Total Runs</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {topBatters.map((batter, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {batter.batter}
                                        </TableCell>
                                        <TableCell align="right">{batter.tot_run}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box mx={2} width={1/4}>
                    <TableContainer component={Paper}>
                        <Table aria-label="top bowlers table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Bowler</b></TableCell>
                                    <TableCell align="right"><b>Wickets</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {topBowlers.map((bowler, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {bowler.bowler}
                                        </TableCell>
                                        <TableCell align="right">{bowler.wicket_count}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box mx={2} width={1/4}>
                    <TableContainer component={Paper}>
                        <Table aria-label="most runs table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Player</b></TableCell>
                                    <TableCell align="right"><b>No. of Boundaries</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {boundaryDetails.map((boundary, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {boundary.batter}
                                        </TableCell>
                                        <TableCell align="right">{boundary.no_of_boundary}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" mt={4} ml={6}>
                <Box textAlign="left">
                    <Typography variant="h3" gutterBottom style={{ fontSize: '1.6rem' }} className='underline font-[800]'>
                        Cool IPL Facts
                    </Typography>
                    <Typography variant="body1" style={{ fontSize: '1.3rem' }}>
                        1) The Selling price of the Podcasting rights of IPL 2018 was a screeching amount of rupees 16347.5 crores
                    </Typography>
                    <Typography variant="body1" style={{ fontSize: '1.3rem' }}>
                        2) Praveen Kumar has marked his name in the history of IPL by bowling the highest number of dot balls than anyone else up to date. He bowled 1075 dot balls in 119 Matches.
                    </Typography>
                    <Typography variant="body1" style={{ fontSize: '1.3rem' }}>
                        3) The Mumbai Indians hold the record for the most IPL titles, having won the tournament five times (in 2013, 2015, 2017, 2019, and 2020).
                    </Typography>
                    <Typography variant="body1" style={{ fontSize: '1.3rem' }}>
                        4) Dale Steyn has the record of most number of dot balls in one IPL Season. In 17 matches, he had bowled 212 dot balls out of a total of 407 balls in IPL 2013.
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}

export default IplPage;
