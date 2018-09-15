import React from "react";
import ReactDOM from "react-dom";
import './styles/index.css';
import Top from './top';
import Mid from './mid';
import Bot from './bot';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPeopleCarry, faGlobe, faCubes, faChartBar, faLock, faUsers, faCalendarTimes, faHandshake, faTasks, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faPeopleCarry, faGlobe, faCubes, faChartBar, faLock, faUsers, faCalendarTimes, faHandshake, faTasks, faBars);

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Top/>
                <Mid />
                <Bot/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));