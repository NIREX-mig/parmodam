import React from "react";

const similarPosts = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    title: "To me Life is either a daring adventure or nothing",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    title: "Life begins at the end of your comfort zone",
  },
];

const SimilarPosts = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-8">
        Similar Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {similarPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarPosts;
