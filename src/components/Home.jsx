import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';
import LanguageDropdown from './LanguageDropdown';
import RepoList from './RepoList';
import ErrorState from './ErrorState';
 
// import Loader from './Loader';
import './App.css';
import {Link} from 'react-router-dom'




function Home() {
  const [repos, setRepos] = useState([]);
  // const [auths, setAuths] = useState("")
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const octokit = new Octokit({

    
    auth: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN,
  });


  // const fetchGitHubUserData = async (token) => {
  //   try {
  //     const response = await fetch('https://api.github.com/user', {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error fetching GitHub user data', error);
  //   }
  // };

  
  const fetchLanguages = async () => {
    try {
      const res = await fetch("https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json");
      const data = await res.json();
      setLanguages(data);
    } catch (e) {
      console.error("Failed to fetch languages", e);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  const fetchUserRepos = async () => {
    if (!selectedLanguage) {
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await octokit.request('GET /user/repos', {
        per_page: 100,
      });
      let fetchedRepos = response.data;
      if (selectedLanguage) {
        fetchedRepos = fetchedRepos.filter(repo => repo.language === selectedLanguage);
      }
      if (fetchedRepos.length === 0) {
        setError("No repositories found for the selected language");
      } else {
        setRepos(fetchedRepos);
      }
    } catch (error) {
      setError("Failed to fetch repositories");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setRepos([]);
    setError("");
    setSelectedLanguage("");
  };


  return (
    <div className="App">
      {/* <a href="/login" ><button style={{position:"absolute",left:"10px",top:"20px",width:"150px",borderRadius: "50px"}}>Login To Github</button></a> */}
      <Link to="/login"><button style={{position:"absolute",left:"10px",top:"20px",width:"150px",borderRadius: "50px"}}>Login To Github</button></Link>
      <h1 className='main-text'>Your GitHub Repositories by Language</h1>
      {error && <ErrorState error={error} onRetry={handleRetry} />}
      <LanguageDropdown
        languages={languages}
        selectedLanguage={selectedLanguage}
        handleLanguageChange={(e) => setSelectedLanguage(e.target.value)}
      />
      <button className="search" onClick={fetchUserRepos} disabled={loading}>
        Search Repositories
      </button>
    
      <RepoList repos={repos} loading={loading} />
      {repos.length > 0 && !loading && (
        <button onClick={handleRetry} style={{borderRadius:"20px", position:"absolute",top:"100px",left:"200px", height:"30px", width:"150px"}}>
          Refresh Search
        </button>
      )}
    </div>
  );
}
export default Home;