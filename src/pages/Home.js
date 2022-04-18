import {Router} from "react-router-dom";
import { Route, Routes, Link} from "react-router-dom";
import OutlinedCard from "../components/OutlinedCard";
const Home = () => {
    return <div>
            <Link to="/Workout1">
                <OutlinedCard displayText={"Workout1"}/>
            </Link>

            <Link to="/Workout2">
                <OutlinedCard displayText={"Workout2"}/>
            </Link>

            <Link to="/Workout3">
                <OutlinedCard displayText={"Workout3"}/>
            </Link>


            <Link to="/Workout4">
                <OutlinedCard displayText={"Workout4"}/>
            </Link>
    </div>;
}

export default Home
