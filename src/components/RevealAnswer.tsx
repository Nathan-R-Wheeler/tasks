import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answer, showAnswer] = useState<boolean>(false);
    const answerToggle = () => {
        showAnswer((hidden) => !hidden);
    };
    return (
        <div>
            <Button onClick={answerToggle}>Reveal Answer</Button>
            {answer && <div>The answer is: 42</div>}
        </div>
    );
}
