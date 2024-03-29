import React, { useState } from 'react';
import './ComplaintBox.css';
import { useNavigate } from 'react-router-dom';

const ComplaintBox = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      user: 'User1',
      complaint: 'This is the first complaint.',
      replies: [],
      isReplying: false,
      replyText: '', // Track admin's reply text
    },
    {
      id: 2,
      user: 'User2',
      complaint: 'This is the second complaint.',
      replies: [],
      isReplying: false,
      replyText: '',
    },
    {
      id: 3,
      user: 'User3',
      complaint: 'This is the third complaint.',
      replies: [],
      isReplying: false,
      replyText: '',
    },
  ]);

  const handleReply = (id) => {
    const updatedComplaints = complaints.map((complaint) => {
      if (complaint.id === id) {
        return { ...complaint, isReplying: !complaint.isReplying };
      }
      return complaint;
    });

    setComplaints(updatedComplaints);
  };

  const handleAdminReply = (id) => {
    const updatedComplaints = complaints.map((complaint) => {
      if (complaint.id === id) {
        const newReply = `Admin reply: ${complaint.replyText}`;
        return {
          ...complaint,
          replies: [...complaint.replies, newReply],
          replyText: '',
          isReplying: false,
        };
      }
      return complaint;
    });

    setComplaints(updatedComplaints);
  };



  const handleLogin = () => {
    navigate('/Signedpage');
  };

  const handleTiming = () => {
    navigate('/Timings');
  };

  return (
    <div className="complaint-box-container">
      <div className="title-bar">
      <div className="title-bar-links">
          <span>Home</span>
          <span onClick={handleLogin}>Signedpage</span>
          <span onClick={handleTiming}>Timings</span>
        </div>
        <div className="profile">
          <img src="profile-image.jpg" alt="Profile" />
          <span>UserEmail</span>
        </div>
      </div>




      <div className="complaint-box">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="complaint">
            <div className="complaint-header">
              <span>{complaint.user}</span>
              <button className="reply-button" onClick={() => handleReply(complaint.id)}>
                Reply
              </button>
            </div>
            <div className="complaint-text">{complaint.complaint}</div>
            {complaint.isReplying && (
              <div className="reply-section">
                <textarea
                  className="reply-textarea"
                  placeholder="Type your reply..."
                  value={complaint.replyText}
                  onChange={(e) => {
                    const replyText = e.target.value;
                    const updatedComplaints = complaints.map((c) => {
                      if (c.id === complaint.id) {
                        return { ...c, replyText };
                      }
                      return c;
                    });
                    setComplaints(updatedComplaints);
                  }}
                />
                <button
                  className="send-reply-button"
                  onClick={() => handleAdminReply(complaint.id)}
                >
                  Send Reply
                </button>
              </div>
            )}
            {complaint.replies.map((reply, index) => (
              <div key={index} className="complaint-reply">
                {reply}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintBox;
