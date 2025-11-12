import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {  
    axios.get("https://www.reddit.com/r/reactjs.json?raw_json=1",{
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then((res) => {
        console.log(res.data.data.children.data)
        setData(res.data.data.children.data)
      })
      .catch((err) => {
        console.error("Error fetching Reddit data:", err);
      });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5rem' }}>
          <h2>Contentera Assignment</h2>
        </div>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          width: '100%', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          {data.map((card) => (
            <UserCard key={card.data.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
