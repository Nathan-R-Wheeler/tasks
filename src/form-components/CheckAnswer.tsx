import React, { useState } from "react";
import { isCorrect } from "../objects";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    const question = { expected: expectedAnswer };
    const checkAnswer = isCorrect(question, answer);

    return (
        <div>
            <h3>Check Answer</h3>

            <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows={10}
                cols={50}
            />
            <div>{checkAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
