import React, { useState } from "react";
import { isCorrect } from "../objects";
import { Question } from "../interfaces/question";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    const question: Question = {
        id: 0,
        name: "",
        body: "",
        type: "short_answer_question",
        options: [],
        expected: expectedAnswer,
        points: 0,
        published: false,
    };
    const checkAnswer = isCorrect(question, answer);
    console.log("The answer is: " + expectedAnswer);

    return (
        <div>
            <h3>Check Answer</h3>

            <textarea
                value={answer}
                onChange={(e) => {
                    setAnswer(e.target.value);
                }}
                rows={10}
                cols={50}
            />
            <div>{checkAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
