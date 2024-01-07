import { Link } from "react-router-dom";

function MovieNotFound() {
  return (
    <div className="fixed grid h-screen w-screen place-items-center bg-slate-50">
      <div>
        Opp! Look Like there is not movie show up sorry
        <Link to="/">Go Back home</Link>
      </div>
    </div>
  );
}

export default MovieNotFound;
