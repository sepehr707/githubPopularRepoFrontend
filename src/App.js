import {ThemeProvider} from '@material-ui/core';
import './App.css';
import Header from "./Components/App/Header";
import GithubRepo from "./Components/Github/GithubRepo";
import Theme from "./Components/UIComponents/Theme";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Context from "./store/Context";
import {useState} from "react";

function App() {
    const [showAll, setShowAll] = useState(true);
    const [language, setLanguage] = useState(null);
    return (
        <Context.Provider value={{
            showAll: showAll,
            setShowAll: setShowAll,
            language: language,
            setLanguage: setLanguage
        }}>
            <Router>
                <ThemeProvider theme={Theme()}>
                    <div className="App">
                        <Header></Header>
                        <Route path='/' exact component={GithubRepo}/>
                    </div>
                </ThemeProvider>
            </Router>
        </Context.Provider>
    );
}

export default App;
