import styles from "../styles/Home.module.css";

const addTriple = (inputs: number[]): number => {
  return inputs[0] + inputs[1] + inputs[2];
}

const Exercise3 = () => {
  
  return (
    <main className={styles.container}>
      <h4>Exercise 3</h4>
      <p>{addTriple([1, 2, 3])}</p>
    </main>
  );
}

export default Exercise3