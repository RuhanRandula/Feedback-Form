import React, { useState } from 'react';
import './FeedbackForm.css'; // Import the CSS file

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nFeedback: ${formData.feedback}\nRating: ${formData.rating}`;
    setConfirmationMessage(message);
    setShowModal(true);
  };

  const handleConfirm = () => {
    console.log(formData);
    setShowModal(false);
    setThankYouMessage('Thank you for your feedback!');
    setFormData({
      name: '',
      email: '',
      feedback: '',
      rating: '',
    });
  };

  const handleCancel = () => {
    setShowModal(false);
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
          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className={`rating-label ${formData.rating === value.toString() ? 'selected' : ''}`}>
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

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Your Details</h2>
            <p>{confirmationMessage}</p>
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}

      {thankYouMessage && (
        <div className="thank-you-message">
          <p>{thankYouMessage}</p>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;