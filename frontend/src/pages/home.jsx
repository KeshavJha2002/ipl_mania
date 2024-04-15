import teams from '../lib/teams'
import ipl from '../assets/ipl.jpeg'
const HomePage = () => {
    // Mock data for teams
    // const teams = [
    //     {
    //         id: 1,
    //         name: 'Mumbai Indians',
    //         logo: 'https://via.placeholder.com/150',
            // description: 'Mumbai Indians is a franchise cricket team representing the city of Mumbai, Maharashtra, in the Indian Premier League.'
    //     },
    //     {
    //         id: 2,
    //         name: 'Chennai Super Kings',
    //         logo: 'https://via.placeholder.com/150',
    //         description: 'Chennai Super Kings is a franchise cricket team based in Chennai, Tamil Nadu, India. It is one of the most successful teams in the IPL.'
    //     },
    //     // Add more teams as needed
    // ];

    return (
        <div>
            <section className="bg-black text-white min-h-screen flex justify-center items-center ">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-4xl font-bold mb-4">Welcome to IPL Mania!</h1>
                        <p className="text-lg">
                            IPL Mania is your ultimate destination for all things related to the Indian Premier League. 
                            Whether you&aposre a die-hard fan or a casual observer, we&aposve got you covered with the latest news, match updates, player stats, and much more!
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src={ipl} alt="Random Image" className="w-full h-auto" />
                    </div>
                </div>
            </section>

            <section className="bg-gray-900 text-white h-screen flex justify-center items-center ">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8">IPL Statistics</h2>
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-2">
      {/* Total Matches Card */}
      <div className="bg-gray-800 p-8 rounded-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-8 mr-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 9a2 2 0 114 0 2 2 0 01-4 0zm0 2a2 2 0 114 0 2 2 0 01-4 0zm0 2a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
        </svg>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Total Matches</h3>
          <p className="text-4xl font-bold">964</p>
        </div>
      </div>
      
      {/* Total Sixes Card */}
      <div className="bg-gray-800 p-8 rounded-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 3a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V3zm10 6a1 1 0 100-2 1 1 0 000 2zM5 9a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V9zm10 6a1 1 0 100-2 1 1 0 000 2zM5 15a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2z" clipRule="evenodd" />
        </svg>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Total Sixes</h3>
          <p className="text-4xl font-bold">24,645</p>
        </div>
      </div>
      
      {/* Total Balls Card */}
      <div className="bg-gray-800 p-8 rounded-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 3a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V3zm10 6a1 1 0 100-2 1 1 0 000 2zM5 9a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V9zm10 6a1 1 0 100-2 1 1 0 000 2zM5 15a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2z" clipRule="evenodd" />
        </svg>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Total Balls</h3>
          <p className="text-4xl font-bold">89,088</p>
        </div>
      </div>
      
      {/* Total Wickets Card */}
      <div className="bg-gray-800 p-8 rounded-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7 4a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zM4.707 6.293a1 1 0 001.414 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707zm10.586 0a1 1 0 11-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM8 14a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000 12zm0 2a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20zm0 2a12 12 0 100-24 12 12 0 000 24zm0 2a14 14 0 100-28 14 14 0 000 28zm0 2a16 16 0 100-32 16 16 0 000 32z" clipRule="evenodd" />
        </svg>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Total Wickets</h3>
          <p className="text-4xl font-bold"> 3,865</p>
        </div>
      </div>
    </div>
  </div>
</section>


            <section className="bg-gray-800 text-white h-screen flex justify-center items-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Featured Content</h2>
                    {/* Carousel */}
                    <div className="flex overflow-x-hidden overflow-y-hidden hover:overflow-x-scroll  ">
                        {teams.map(team => (
                            <div key={team.id} className="flex-shrink-0 mr-4 scroll-smooth focus:scroll-auto ">
                                <div className="bg-black text-white p-10 rounded-lg shadow-md hover:z-10 hover:cursor" style={{ width: '300px', height:'480px' }}>
                                    <img src={team.team_icon} alt={team.name} className="w-25 h-25 mb-4 mx-auto text-center" />
                                    <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
                                    <p className="text-sm">{team.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
