

import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

export default function Callback() {
  const navigate = useNavigate();
  // const[state,setState] = useState(0)
  let code;

 
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    code = searchParams.get('code');
    
    if (code) {
      console.log('Authorization Code:', code);
      // getAccessToken(code); 
    } else {
      console.error('No authorization code found.');
    }
  }, []);

  // const getAccessToken = async (code) => {
  //   const clientId = "Ov23lihVZfDSQ6qysIRW";
  //   const clientSecret = "10c7d1fdae932719ad684ba11eeb03964955b7a2";
    
  //   try {
  //     const response = await fetch('https://github.com/login/oauth/access_token', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',  
  //       },
  //       body: JSON.stringify({
  //         client_id: clientId,
  //         client_secret: clientSecret,
  //         code: code,
  //       }),
  //     });
      
  //     const data = await response.json();
      
  //     if (data.access_token) {
  //       console.log('Access Token:', data.access_token);
  //       setState(data.access_token)
      
  //     } else {
  //       // console.error('Error getting access token:', data.error);
  //     }
  //   } catch (error) {
  //     console.error('Request failed: ', error);
  //   }
  // };


  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "200px" }}>
      <h1>Finally we got the code.</h1>
      {/* <a href="/" ><button style={{position:"absolute",left:"10px",top:"20px",width:"150px",borderRadius: "50px", height:"50px"}}>Back to Home Page</button></a>  */}
      <Link to="/"><button style={{position:"absolute",left:"10px",top:"20px",width:"150px",borderRadius: "50px", height:"50px"}}>Back to Home Page</button></Link>
    </div>
  );
}
