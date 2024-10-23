import React from 'react';

function ErrorState({ error, onRetry }) {
  return (
    <div style={{ color: "red"}}>
      
      <button onClick={onRetry} style={{margin:"20px", borderRadius:"20px",width:"200px",position:"absolute",right:"100px",height:"30px",top:"20px"}}>Retry</button>
    </div>
  );
}

export default ErrorState;