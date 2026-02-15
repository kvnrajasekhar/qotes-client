import useTheme from "./hooks/toggleTheme";

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    /* The 'dark' class is handled by your hook on the <html> tag. 
       These classes now look at the CSS variables and swap automatically.
    */
    <div className="min-h-screen transition-colors duration-300 bg-bg-primary text-text-primary">
      
      <h1 className="text-3xl font-bold text-center pt-10 text-accent-primary">
        Hello, World!
      </h1>

      <div className="flex justify-center mt-4">
        <button
          onClick={toggleTheme}
          className="px-6 py-2 font-semibold rounded transition-all shadow-md bg-btn-primary-bg text-btn-primary-text hover:opacity-90 active:scale-95"
        >
          Toggle Theme ({isDark ? "Dark" : "Light"})
        </button>
      </div>
      
      <div className="mt-10 p-6 text-center">
        <p className="text-text-secondary text-lg font-serif italic">
          "This is a sample quote styled with your custom Qotes theme."
        </p>
      </div>
    </div>
  );
}

export default App;