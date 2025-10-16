import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import picture from "./images/Spider-Man_With_a_Wrench.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>
                {" "}
                <span style={{ color: "red" }}>
                    AUUUGH THE ANTS ARE EATING MEEEEEEE
                </span>
            </h1>
            <img
                src={picture}
                width="400"
                height="400"
                alt="The image failed to load"
            />
            <ol>
                <li>Smack</li>
                <li>WACK</li>
                <li>STUPID ANTS!</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World!
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Nathan Wheeler Hello World
            </p>

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
