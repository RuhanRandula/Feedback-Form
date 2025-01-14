import React, { useState } from 'react';
import './FeedbackForm.css'; // Import the CSS file

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmationMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nFeedback: ${formData.feedback}\nRating: ${formData.rating}`;
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);

    if (isConfirmed) {
      console.log(formData);
      alert('Thank you for your feedback!');
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: '',
      });
    }
  };

  return (
    <>
      <nav>
        Tell Us What You Think
      </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Enter your feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
        <div className="rating">
          <p>Rate Us:</p>
          <div className="rating-container"> {/* Added a new container div */}
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="rating-label">
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  checked={formData.rating === value.toString()}
                  onChange={handleChange}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;