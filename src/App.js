import './App.css';

import Footer from "./components/footer/footer"
import Presentation from "./section/presentation";

import About from "./section/about";
import Skills from "./section/skills";
import Contacts from "./section/contacts";

function App() {

    return(
        <div className="App">
            <div className="pageContent">
                <Presentation />
                <About />
                <Skills />
                <Contacts />
                <Footer />
            </div>
        </div>
    );
}

export default App;
