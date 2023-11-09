import React from 'react';

function Header({title}) {
  return (
    <div className="header">
      <h1>Accessibility Hub</h1>
      <p>Welcome! This is the accessibility score of PDFs in these repositories</p>
    </div>
  );
}

export default Header;
