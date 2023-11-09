import React from 'react';

function RepositoryList() {
  return (
    <div className="repo-list">
      {/* Repeat this structure for each repository */}
      <div className="repo-item">
        <span>arXiv</span>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <button>Details →</button>
      </div>
      {/* ... other repositories */}
    </div>
  );
}

export default RepositoryList;
