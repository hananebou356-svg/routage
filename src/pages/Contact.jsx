import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true); // مجرد رسالة شكراً
  }

  return (
    <div>
      <h2>Contact</h2>
      {sent ? (
        <div className="alert alert-success">Thanks {form.name || 'User'}! Your message has been recorded.</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="4" required></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
