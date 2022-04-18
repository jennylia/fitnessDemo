import { useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import workoutService from "../services/workout.service";
const Workout1 = () => {
  const SaveWorkout = async (e) => {
    e.preventDefault();
    console.log("save");

    let maxLen = workouts.length;
    for (let i = 0; i < maxLen; i ++){
      let curr = workouts[i];
      await workoutService.addWorkouts(curr);
      console.log("added cur")
    }

    alert("persisted")
  }



  const updateWorkout =  (newWorkout) => {
    console.log("handle submit");
    
    let updatedWorkouts=[];
    let filteredWorouts =workouts.filter((wo) => {return wo.name !== newWorkout.name});

    updatedWorkouts = filteredWorouts.concat(newWorkout);
    updatedWorkouts.sort((a, b) => (a.id > b.id) ? 1 : -1)
    setWorkouts(updatedWorkouts);
  }

  //TODO persist this somewhere in the DB
  const benchPress = {
    name: "Bench Press",
    maxWeight: 20,
    maxWeightUpdate: "April 18, 2022",
    set: [{rep: 8, weight: 20}, {rep: 8, weight: 20}, {rep: 8, weight: 20}],
    id: 0,
  }

  const legPress = {
    name: "Leg Press",
    maxWeight: 20,
    maxWeightUpdate: "April 18, 2022",
    rep: 8,
    set: [{rep: 8, weight: 20}, {rep: 8, weight: 20}, {rep: 8, weight: 20}],
    id: 1
  }

  const workouts1 = [benchPress, legPress];

  const [workouts, setWorkouts] = useState(workouts1);


  return(
  <div>
  {
    workouts.map((wo) => (<WorkoutCard submitHandler={updateWorkout} key={wo.id} workout={wo}></WorkoutCard>)
    )
  }
  <Stack><Button onClick={SaveWorkout} variant="contained">Finished The Day</Button></Stack>
  </div>)
}

export default Workout1