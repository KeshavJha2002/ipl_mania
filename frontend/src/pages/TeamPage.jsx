import axios from 'axios';
import { useState, useEffect } from 'react';
import teams from '../lib/teams'

const TeamPage = ({ tag }) => {
    const [top_bowlers, set_top_bowlers] = useState([]);
    const [top_batters, set_top_batters] = useState([]);
    const [win_details, set_win_details] = useState([]);
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
                set_win_details(response.data);
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

    // console.log(top_bowlers[2]);
    // console.log(top_batters);
    // console.log(win_details);
    // console.log(boundary_details);

    return (
        <div>
            
        </div>
    );
}

export default TeamPage;
