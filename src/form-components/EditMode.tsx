import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [edit, makeEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <div className="form-switch">
                <input
                    type="checkbox"
                    role="checkbox"
                    checked={edit}
                    onChange={(event) => {
                        makeEdit(event.target.checked);
                    }}
                />
            </div>

            {!edit && (
                <div>
                    {name} is {student ? "a student" : "not a student"}
                </div>
            )}

            {edit && (
                <div>
                    <div>
                        <input
                            type="text"
                            role="textbox"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <label>
                            <input
                                type="checkbox"
                                role="checkbox"
                                aria-label="student"
                                checked={student}
                                onChange={(event) => {
                                    setStudent(event.target.checked);
                                }}
                            />
                            student
                        </label>
                    </div>
                </div>
            )}
        </div>
    );
}
