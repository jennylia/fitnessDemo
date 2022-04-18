import { db } from "../firebase/firebaseConfig";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const workoutCollectionRef = collection(db, "workouts");
class WorkoutDataService {
  addWorkouts = (newWorkout) => {
    return addDoc(workoutCollectionRef, newWorkout);
  };

  updateWorkout = (id, updatedWorkout) => {
    const workoutDoc = doc(db, "workouts", id);
    return updateDoc(workoutDoc, updatedWorkout);
  };

  deleteWorkout = (id) => {
    const workoutDoc = doc(db, "workouts", id);
    return deleteDoc(workoutDoc);
  };

  getAllWorkouts = () => {
    return getDocs(workoutCollectionRef);
  };

  getWorkout = (id) => {
    const workoutDoc = doc(db, "workouts", id);
    return getDoc(workoutDoc);
  };
}

export default new WorkoutDataService();
