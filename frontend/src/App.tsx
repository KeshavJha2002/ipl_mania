import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios'; // Import AxiosResponse type
import './App.css'
import Header from './components/Header';
const App: React.FC = () => {
    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then((res: AxiosResponse) => { // Specify the type of 'res' as AxiosResponse
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div>
            
            <Header />
        </div>
    );
}

export default App;
