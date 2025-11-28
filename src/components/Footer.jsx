import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-0">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
