import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { margin } from '@mui/system';

export default function WorkoutForm(props) {

  /*
    const benchPress = {
    name: "Bench Press",
    maxWeight: 20,
    maxWeightUpdate: "April 18, 2022",
    set: [{rep: 8, weight: 20}, {rep: 8, weight: 20}, {rep: 8, weight: 20}],
    id: 0,
  }
   */


  const submitHandler = (e) => {
    e.preventDefault();

    let maxSet = props.workout.set.length;

    let newSet = props.workout.set;
    for (let i = 0; i < maxSet; i ++){
      let id = props.workout.name + "-" + i;
      let setV=document.getElementById(id);
      console.log(setV.value)
      newSet[i].weight = setV.value;
    }

    // TODO : update the max
    let newWorkout={...props.workout, set: newSet}


    console.log("pass this back up");
    props.submitHandler(newWorkout);
    
  }
  return (
  <Box   sx={{ padding: 2, margin: 2 }}
  >
      <form onSubmit={console.log("submit 2")}>
        <p>{props.workout.name}</p>
        <p>You acheived max of: {props.workout.maxWeight} on {props.workout.maxWeightUpdate}</p>

        {props.workout.set.map( (rw, index) => (
        
          <TextField
            key={index}
            id={`${props.workout.name}-${index}`}
            label={`try for ${rw.weight} in weight`}
            defaultValue={rw.weight}
            helperText={`${rw.rep} reps`}
          />
        ))
        }
        <div>
        <Button variant="outlined" onClick={submitHandler}>
        Save Data
      </Button>
        </div>

    </form>

  </Box>
  );
}