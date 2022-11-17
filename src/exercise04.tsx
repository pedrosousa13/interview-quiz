import styles from "../styles/Home.module.css";
import {useEffect} from "react";

// ** Spot the bug **
// There's a case here where initializeAudio wouldn't work as expected.

interface VolumeStorage {
  volume?: number;
}

function initializeAudio({volume}: VolumeStorage) {
  return volume || 0.5;
}

initializeAudio({volume: 3})