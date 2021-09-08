import React, { useState, useEffect } from "react";
import axios from "axios";

const SprintsList = (props) => {
    useEffect(() => {
        axios
            .get("http://localhost:3001/api/v1/sprints.json")
            .then((res) => setSprints(res.data));
    }, []);

    const [sprints, setSprints] = useState([]);

    return (
        <div>
            <div className="sprints-list">
                {sprints.map((sprint, index) => (
                    <div key={index}> - {sprint.sprint_date}</div>
                ))}
            </div>
        </div>
    );
};
export default SprintsList;
