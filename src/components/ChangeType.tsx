import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, typeChange] = useState<QuestionType>(
        "short_answer_question",
    );

    const toggleType = () => {
        typeChange((prevType) =>
            prevType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };
    return (
        <div>
            <Button onClick={toggleType}>Change Type</Button>
            <div>
                {questionType === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </div>
        </div>
    );
}
