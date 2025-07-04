import './App.css';
import "./css/main.css"
import Main from './components/Main';
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
