import './App.css';
import Header from './Test/Header';
import Footer from './Test/Footer';
import Reading from "./reading";
// end of Importing



function App() {
  return (
    <div className="App">
         <Header />
            <header className="App-header">
                <Reading />
            </header>
         <Footer />    
    </div>
  )
}

export default App;
