import React, { useState, useEffect } from "react";
import axios from "axios";

const UserSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce function to limit API calls
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/users/search?q=${query}`);
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <div className="absolute top-full left-0 mt-1 text-gray-500">Loading...</div>}

      {results.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border rounded mt-1 max-h-64 overflow-y-auto shadow-lg z-50">
          {results.map((user) => (
            <li
              key={user._id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => window.location.href = `/profile/${user._id}`} // navigate to user profile
            >
              <img
                src={user.avatar || "/default-avatar.png"}
                alt={user.username}
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <div className="font-semibold">{user.username}</div>
                <div className="text-sm text-gray-500">{user.firstName} {user.lastName}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserSearch;
