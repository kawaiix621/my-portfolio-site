import React from 'react';
import './Sidebar.css'; // Optional: You can add styles for your Sidebar here

const Sidebar = () => {

  // Function to open links in a new tab
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='sidebar'>
      <button onClick={() => openLink('https://www.linkedin.com')}>Linkedin</button>
      <button onClick={() => openLink('https://github.com')}>Github</button>
      <button onClick={() => openLink('https://www.instagram.com')}>Instagram</button>
    </div>
  );
};

export default Sidebar;
