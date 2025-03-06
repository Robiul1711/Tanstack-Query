import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { fetchPosts } from "./Api/api";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
console.log(data)
  return (
    <div className="transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">
        {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-3 rounded-xl text-lg font-semibold bg-blue-600 dark:bg-yellow-500 hover:bg-blue-700 dark:hover:bg-yellow-400 transition"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {/* Data Fetch Section */}
      <div className="container mx-auto p-4 space-y-5">
        <h1 className="text-4xl font-bold text-center">Data Fetch</h1>

        {/* Handle Loading and Error States */}
        {isLoading && (
          <div className="flex justify-center items-center space-x-2">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
            <p className="text-xl">Loading...</p>
          </div>
        )}

        {isError && <p>Error: {error.message}</p>}

        {/* Display Data */}
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="border p-4 rounded-md">
              <h2 className="text-xl font-semibold">ID: {item.id}</h2>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.body}</p>
              <div className="flex justify-end space-x-2">

              <button className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md">Delete</button>
              <button className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-md">Edit</button>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default App;
