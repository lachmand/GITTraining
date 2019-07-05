import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar>
                    {/* "Link" in brand component since just redirect is needed */}
                    <Navbar.Brand as={NavLink} to="/">
                        Brand link
                    </Navbar.Brand>
                    <Nav>
                        {/* "NavLink" here since "active" class styling is needed */}
                        <Nav.Link as={NavLink} to="/" exact>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/another">
                            Another
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/onemore">
                            One More
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <Route path="/" exact component={Home} />
                <Route path="/another" exact component={Another} />
                <Route path="/onemore" exact component={Onemore} />
            </div>
        </Router>
    );
}

function Home() {
    return <div>Home page</div>;
}
function Another() {
    return <div>Another page</div>;
}
function Onemore() {
    return <div>Onemore page</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
