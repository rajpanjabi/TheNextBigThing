import './Header.css'; // Import a CSS file for styling (create this file if not already present)
import Header from './Header';

let Users = ["User1", "Guest", "Kids"];

function App() {
  return (
    <div className="app-container">
      <div className="background-container">
        <Header />
      </div>
    </div>
  );
}

export default App;
