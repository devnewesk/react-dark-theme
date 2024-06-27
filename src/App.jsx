import { useState } from "react";
import "./App.css";
import { PiLightbulbLight } from "react-icons/pi";
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <div className="" style={{ height: "100%" }}>
        <form className="form">
          <h2 className="text">Login</h2>
          <input type="text" placeholder="enter your mail" />
          <input type="password" placeholder="enter your password" />
          <button type="submit" className="login">
            {" "}
            login
          </button>
          <div className="remember">
            <input type="checkbox" name="chk" />
            <label className="text" htmlFor="chk">
              Remember me
            </label>
          </div>

          <div className="btn-group">
            <button type="button">forget password</button>
            <button>register</button>
          </div>
        </form>
      </div>

      <PiLightbulbLight
        size={32}
        className={theme === "light" ? "toggle" : "toggle active"}
        onClick={toggleTheme}
      />
    </div>
  );
}

export default App;
