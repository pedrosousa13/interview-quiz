import styles from "../styles/Home.module.css";

const localStorage: { volume?: number } = { volume: 4 };

function initializeAudio() {
  let volume = localStorage.volume || 0.5;
}

const Exercise4 = () => {
  return (
    <main className={styles.container}>
      <h4>Exercise 4</h4>
    </main>
  );
};

export default Exercise4;
