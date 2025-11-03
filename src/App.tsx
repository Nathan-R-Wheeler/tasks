import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import spiderMan from "./images/Spider-Man_With_a_Wrench.jpg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img src={spiderMan} alt="SpiderMan holding Wrench"></img>
            <ul>
                <li>Whack</li>
                <li>Smack</li>
                <li>Stupid ants</li>
            </ul>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr /> Nathan Wheeler Hello World
            <ChangeType></ChangeType>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "100px",
                                    height: "300px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
