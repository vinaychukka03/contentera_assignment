import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const redditURL = "https://www.reddit.com/r/reactjs.json?raw_json=1";
    const finalURL = `https://api.allorigins.win/get?url=${encodeURIComponent(redditURL)}`;

    axios.get(finalURL)
      .then((res) => {
        // AllOrigins returns the actual data as a string inside "contents"
        const redditData = JSON.parse(res.data.contents);
        console.log("Fetched Data:", redditData);
        setData(redditData.data.children);
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
