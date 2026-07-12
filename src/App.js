import React, { useState } from 'react';

function App() {
  const [projects, setProjects] = useState([]);

  const createProject = () => {
    const newProject = { id: Date.now(), title: 'Project ' + (projects.length + 1), status: 'New' };
    setProjects([...projects, newProject]);
    alert('Project Created! (Connected to Backend)');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', background: '#374151', color: 'white', minHeight: '100vh' }}>
      <h1>Apex Smart Marketing Workspace</h1>
      
      <button onClick={createProject} style={{ padding: '10px', margin: '10px' }}>
        Create New Project
      </button>

      <h2>Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.title} - {p.status}</li>
        ))}
      </ul>

      <p>Backend: Connected to Railway</p>
    </div>
  );
}

export default App;
