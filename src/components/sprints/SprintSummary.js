import { Link } from "react-router-dom";

const setSprints = ({ sprint, removeSprint }) => {
    return (
        <div className="sprint" key={sprint.id}>
            <Link to={`/sprints/${sprint.id}`}>
                <h4 className="sprint-title">{sprint.name}</h4>
            </Link>
            <p>{sprint.recipes}</p>

            <button
                onClick={() => removeSprint(sprint.id)}
                className="mt-6 bg-pink-600 hover:bg-pink-500 text-white font-semibold p-3 rounded-md"
            >
                Remove
            </button>
        </div>
    );
};

export default setSprints;
