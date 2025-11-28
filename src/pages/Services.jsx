import React from 'react';

export default function Services() {
  const services = ['Web Design', 'Frontend Dev', 'Backend Dev', 'Consulting'];
  return (
    <div>
      <h2>Services</h2>
      <ul className="list-group">
        {services.map((s, i) => <li key={i} className="list-group-item">{s}</li>)}
      </ul>
    </div>
  );
}
