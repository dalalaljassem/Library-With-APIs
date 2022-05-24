import "./App.css";
import Members from "./Components/Members";
import Books from "./Components/Books";
import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    // big div
    <div className="App">
      <div className="headerbg">
        <h1>Library System</h1>
      </div>

      <br></br>
      <div class="container">
        <Tab.Container id="top-tabs-example" defaultActiveKey="first">
          <Row>
            <Row sm={3} class="tabBar justify-content-center">
              <Nav variant="pills" className="flex-column tabBar">
                <Nav.Item>
                  <Nav.Link eventKey="first">Members</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Books</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
            <Row sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Members />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Books />
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default App;
