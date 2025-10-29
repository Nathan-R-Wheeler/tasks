import React from "react";
import "./App.css";
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
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
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
                    <div
                        style={{
                            width: "100px",
                            height: "300px",
                            backgroundColor: "red",
                        }}
                    />
                </Row>
            </Container>
        </div>
    );
}

export default App;
