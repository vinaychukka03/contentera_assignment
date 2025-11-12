import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
  const redditURL = "https://www.reddit.com/r/reactjs.json?raw_json=1";

  // 💡 Use corsproxy.io (stable alternative to AllOrigins)
  const finalURL = `https://corsproxy.io/?${encodeURIComponent(redditURL)}`;

  axios
    .get(finalURL)
    .then((res) => {
      console.log("Fetched Data:", res.data);
      setData(res.data.data.children);
      console.log(data);
    })
    .catch((err) => {
      console.error("Error fetching Reddit data:", err);
    });
}, []);



  return (
    <>
      <div style={{ backgroundColor: ' black' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5rem' }}>
          <h2>Contentera Assignment 1</h2>
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
