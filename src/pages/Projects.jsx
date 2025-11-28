import React from 'react';

export default function Projects() {
  const projects = [
    { title: 'Project 1', desc: 'Short description.' },
    { title: 'Project 2', desc: 'Another description.' }
  ];

  return (
    <div>
      <h2>Projects</h2>
      <div className="row">
        {projects.map((p, i) => (
          <div className="col-md-6 mb-3" key={i}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

