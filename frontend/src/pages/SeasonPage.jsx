import { useState, useEffect } from 'react'
import axios from 'axios'

const SeasonPage = ({ tag }) => {
  const [top_bowlers, set_top_bowlers] = useState([]);
  const [top_batters, set_top_batters] = useState([]);
  const [win_details, set_win_details] = useState([]);
  const [boundary_details, set_boundary_details] = useState([]);
  
  useEffect(() => {
    const fetchTopBowlers = async () => {
      try {
          const response = await axios.get(`http://localhost:7000/season/get_top_bowlers/${tag}`);
          set_top_bowlers(response.data);
      } catch (error) {
          console.error("Error fetching top bowlers:", error);
      }
    };

    const fetchTopBatters = async () => {
      try {
          const response = await axios.get(`http://localhost:7000/season/get_top_batter/${tag}`);
          set_top_batters(response.data);
      } catch (error) {
          console.error("Error fetching top batters:", error);
      }
    };

    const fetchWinDetails = async () => {
      try {
          const response = await axios.get(`http://localhost:7000/season/get_win_details/${tag}`);
          set_win_details(response.data);
      } catch (error) {
          console.error("Error fetching win details:", error);
      }
    };

    const fetchBoundaryDetails = async () => {
      try {
          const response = await axios.get(`http://localhost:7000/season/get_boundary_details/${tag}`);
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

  console.log(top_bowlers);
    console.log(top_batters);
    console.log(win_details);
    console.log(boundary_details);

  return (
    <div>
        Hello
    </div>
  )
}

export default SeasonPage
