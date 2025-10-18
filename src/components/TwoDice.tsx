import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftNumber, setLeft] = useState(1);
    const [rightNumber, setRight] = useState(2);

    // Rolls left die
    function leftRoll(): void {
        setLeft(d6());
    }

    // Roll the right
    function rightRoll(): void {
        setRight(d6());
    }

    // Determines win/lose status
    function status(): string | null {
        //check for snake
        if (leftNumber === 1 && rightNumber === 1) {
            return "Lose";
        } else if (
            leftNumber === rightNumber &&
            leftNumber !== 1 &&
            rightNumber !== 1
        ) {
            return "Win";
        }
        return null;
    }

    return (
        <div>
            <div>
                <Button style={{ marginRight: "10px" }} onClick={leftRoll}>
                    Roll Left
                </Button>
                <Button onClick={rightRoll}>Roll Right</Button>
            </div>
            <span style={{ marginRight: "10px" }} data-testid="left-die">
                Left Die: {leftNumber}
            </span>
            <span data-testid="right-die">Right Die: {rightNumber}</span>
            {status() && <div>Status: {status()}</div>}
        </div>
    );
}
