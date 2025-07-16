import './App.css';
import RaceContainer from './components/RaceContainer';
import StartButton from './components/StartButton';
import Title from './components/Title';

function App() {
  return (
    <div className="wrapper">
      <Title />
      <StartButton />
      <RaceContainer />
    </div>
  );
}

export default App;
