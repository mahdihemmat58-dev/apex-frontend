import React, { useState, useEffect } from 'react';

function App() {
  const [projects, setProjects] = useState([]);
  const [newProjectTitle, setNewProjectTitle] = useState('');

  useEffect(() => {
    // Fetch from Backend
    fetch('https://your-railway-url.up.railway.app/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(() => console.log('Backend not connected yet'));
  }, []);

  const createProject = () => {
    if (!newProjectTitle) return;
    const newP = { title: newProjectTitle, status: 'New' };
    setProjects([...projects, newP]);
    setNewProjectTitle('');
    alert('Project Created and sent to Backend!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', background: '#374151', color: 'white', minHeight: '100vh' }}>
      <h1>Apex Smart Marketing Workspace</h1>
      
      <input 
        type="text" 
        value={newProjectTitle}
        onChange={(e) => setNewProjectTitle(e.target.value)}
        placeholder="Project Title"
        style={{ padding: '10px', margin: '10px' }}
      />
      <button onClick={createProject} style={{ padding: '10px' }}>
        Create New Project
      </button>

      <h2>Projects List</h2>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>{p.title} - {p.status}</li>
        ))}
      </ul>

      <p>Backend Connected</p>
    </div>
  );
}

export default App;
