import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, chooseAnswer] = useState<string>(options[0]);

    function updateOptions(event: React.ChangeEvent<HTMLSelectElement>) {
        chooseAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <select value={answer} onChange={updateOptions}>
                    {options.map((opt: string, index: number) => (
                        <option key={index} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>
            <p>{answer === expectedAnswer ? "✔️ Correct!" : "❌ Incorrect"}</p>
        </div>
    );
}
