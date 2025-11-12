import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const redditURL = "https://www.reddit.com/r/reactjs.json?raw_json=1";

    const finalURL = isProduction
      ? `https://api.allorigins.win/get?url=${encodeURIComponent(redditURL)}`
      : redditURL;

    axios
      .get(finalURL)
      .then((res) => {
        console.log("Fetched Data:", res.data);
        // AllOrigins returns data inside 'contents' key
        const jsonData = isProduction ? JSON.parse(res.data.contents) : res.data;
        setData(jsonData.data.children);
      })
      .catch((err) => {
        console.error("Error fetching Reddit data:", err);
      });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: ' black' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5rem' }}>
          <h2>Contentera Assignment</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
          {data.map((card) => (
            <UserCard key={card.data.title} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
