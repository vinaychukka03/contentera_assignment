import React from 'react'

const UserCard = ({ card }) => {
  const cardStyle={ display: 'flex', flexDirection: 'column', margin: '10px', padding: '10px', border: '1px solid white', width: '90%', borderRadius: '6px',backgroundColor:'rgba(52, 58, 70, .8)' };
  const titleStyle={display:'flex',justifyContent:'center',alignItems:'center',color:'#44ac99'};
  return (
    <div style={cardStyle}>
      <h4 style={titleStyle}>Title: <span style={{ color: 'white' }}>{card.data.title}</span></h4>
      
        {
          
          card.data.selftext_html==null?<div>No content to display</div>:
          <div
            dangerouslySetInnerHTML={{ __html: card.data.selftext_html }}>        
          </div>
        }
        
      
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'
      }}>
        
        <h5 className="card-title">score: {card.data.score}</h5>
        <a href={card.data.url} className="card-link">Click Here to Open</a>
      </div>
    </div>
  )
}

export default UserCard
