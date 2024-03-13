import React,{ useEffect } from 'react'
import axios from 'axios'

const App:React.FC = () => {
    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then((res)=>{console.log(res.data)})
            .catch((e)=>{console.log(e)});
    }, []);
    return (
        <div>
            App
        </div>
    );
}

export default App
