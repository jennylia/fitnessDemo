import OutlinedCard from "./OutlinedCard";
import WorkoutForm from "./WorkoutForm";

const WorkoutCard = (props) => {
    return(
        <WorkoutForm submitHandler={props.submitHandler} workout={props.workout}/>
    )
}

export default WorkoutCard