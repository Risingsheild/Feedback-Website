import './Components/style.css'
import FeedbackForm from './Components/FeedbackForm';
import Legal from './Components/Legal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Legal />
        <FeedbackForm />
      </header>
    </div>
  );
}

export default App;
