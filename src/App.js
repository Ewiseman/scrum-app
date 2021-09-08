import { useState } from "react";
import Header from "./components/Header";
// import Tasks from "./components/Tasks";
import SprintsList from "./components/sprints/SprintsList";
function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "call doctor",
            day: "Feb 5th, at 3:00 PM",
            remider: true,
        },
        {
            id: 2,
            text: "call flower shop",
            day: "Feb 5th, at 3:00 PM",
            remider: true,
        },
        {
            id: 3,
            text: "eat breakfast",
            day: "Feb 5th, at 3:00 PM",
            remider: true,
        },
        {
            id: 4,
            text: "call doctor",
            day: "Feb 5th, at 3:00 PM",
            remider: true,
        },
    ]);
    return (
        <div className="App">
            <Header />
            {/* <Tasks tasks={tasks} /> */}
            <SprintsList />
        </div>
    );
}

export default App;
