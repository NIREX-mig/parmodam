"use client";

import React, { useState } from "react";

const initialComments = [
  {
    id: 1,
    name: "Indie Rossi",
    avatar: "https://via.placeholder.com/50",
    date: "17 Apr 2020",
    comment:
      "Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima veniam quis nostrum exercitationem molestiae autem.",
    replies: [],
  },
  {
    id: 2,
    name: "Patricia Doe",
    avatar: "https://via.placeholder.com/50",
    date: "19 Apr 2020",
    comment:
      "Repository-hosted Themes are required to support display of comments on static Pages as well as on single blog Posts.",
    replies: [],
  },
  {
    id: 3,
    name: "Indie Rossi",
    avatar: "https://via.placeholder.com/50",
    date: "14 Apr 2020",
    comment:
      "Repository-hosted Themes are required to support display of comments on static Pages as well as on single blog Posts.",
    replies: [],
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState(initialComments);
  const [replyingTo, setReplyingTo] = useState(null); // Track which comment is being replied to
  const [replyText, setReplyText] = useState("");

  const handleReply = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(),
              name: "You", // Replace with dynamic user name if needed
              avatar: "https://via.placeholder.com/50",
              date: new Date().toLocaleDateString(),
              comment: replyText,
            },
          ],
        };
      }
      return comment;
    });
    setComments(updatedComments);
    setReplyingTo(null); // Close the reply form after submission
    setReplyText(""); // Reset the reply input
  };

  return (
    <div className="max-w-4xl p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">
        Comments
      </h2>
      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start space-x-6">
              <img
                src={comment.avatar}
                alt={comment.name}
                className="w-14 h-14 rounded-full shadow-md"
              />
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg text-gray-900">
                    {comment.name}
                  </h3>
                  <p className="text-sm text-gray-500">{comment.date}</p>
                </div>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  {comment.comment}
                </p>
                <button
                  className="mt-3 text-gladeGreen-600 hover:text-gladeGreen-800 text-sm font-semibold transition-colors"
                  onClick={() =>
                    setReplyingTo(replyingTo === comment.id ? null : comment.id)
                  }
                >
                  {replyingTo === comment.id ? "Cancel" : "Reply"} &raquo;
                </button>
                {/* Reply form */}
                {replyingTo === comment.id && (
                  <div className="mt-4">
                    <textarea
                      className="w-full border border-gladeGreen-300 outline-none p-2 text-sm"
                      rows="3"
                      placeholder="Write your reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    ></textarea>
                    <button
                      className="mt-2 px-4 py-2 bg-gladeGreen-600 text-white text-sm rounded-lg shadow hover:bg-gladeGreen-700 transition"
                      onClick={() => handleReply(comment.id)}
                    >
                      Submit Reply
                    </button>
                  </div>
                )}
                {/* Replies */}
                <div className="mt-4 space-y-4">
                  {comment.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className="flex items-start space-x-4 bg-gladeGreen-100 p-3 rounded-lg"
                    >
                      <img
                        src={reply.avatar}
                        alt={reply.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-medium text-sm text-gray-800">
                          {reply.name}
                        </h4>
                        <p className="text-sm text-gray-500">{reply.date}</p>
                        <p className="text-gray-700 mt-1">{reply.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
