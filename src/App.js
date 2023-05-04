import React, { useState, useEffect } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3333/projects/346504566173965?caching=disallowed",
        {
          headers: {
            Authorization: "Bearer 1/451927151844254:48bb302ba96ecce6eb33b174f3f53ae6",
          },
        }
      );
      const json = await response.json();
      console.log(json);
      setProjects(json);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.gid}>
            <strong>{project.gid}</strong> - {project.name} ({project.resource_type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;