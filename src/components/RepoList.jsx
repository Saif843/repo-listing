import React from 'react';

function RepoList({ repos, loading }) {
  return (
    <div className="repo-list">
    
      {loading ? (
        <p>Loading repositories...</p>
      ) : (
        <>
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div key={repo.id} className="repo-item">
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description available."}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  Visit Repo
                </a>
              </div>
            ))
          ) : (
            <p>No repositories found for the selected language.</p>
          )}
        </>
      )}
    </div>
  );
}

export default RepoList;
