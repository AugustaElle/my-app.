import './App.css';
import Temperature from './Temperature';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Temperature city="Montreal"/>
      <Temperature city="New York"/>
      <Temperature city="Tokyo"/>
      <Temperature city="Hong Kong"/>
      <small>Coded by Leah L.  See my open source code on <a href="https://github.com/AugustaElle/my-app." target="_blank" rel="noopener noreferrer"> Github </a></small>
    </div></div>
  );
}

export default App;
