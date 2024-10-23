import React from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'




export default function Login(){

    const clientID = 'Ov23lihVZfDSQ6qysIRW'
    const redirectUri = 'http://localhost:5173/callback'

    const redirectToGithub = () => {
    
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&scope=repo,user:email`
}

    return(
        <div style={{display:"flex", justifyContent:"center",alignItems:"center", marginTop:"200px"}}> 
            <button onClick = {redirectToGithub} style={{width:"200px",height:"50px",borderRadius:"20px"}}>Login for github</button>
            {/* <Link to = '/callback'><button onClick = {redirectToGithub} style={{width:"200px",height:"50px",borderRadius:"20px"}}>Login for github</button></Link> */}
        </div>
    )
}