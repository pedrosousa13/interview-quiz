import styles from "../styles/Home.module.css";
import {useEffect} from "react";

interface VolumeStorage {
  volume: number;
}

function initializeAudio({volume}: VolumeStorage) {
  return volume || 0.5;
}

const Exercise4 = () => {
  useEffect(() => {
    initializeAudio({volume: 1})
  }, [])

  return (
    <main className={styles.container}>
      <h4>Exercise 4</h4>
    </main>
  );
};

export default Exercise4;
