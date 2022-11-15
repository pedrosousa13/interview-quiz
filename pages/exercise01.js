import styles from "../styles/Home.module.css";

const Exercise1 = () => {
  const petName = "Leo";
  const placeholder = "{NAME}";
  const reminderTemplate =
    "{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";

  const reminder = reminderTemplate.replace(placeholder, petName);

  return (
    <main className={styles.container}>
      <h4>Exercise 1</h4>
      <p>{reminder}</p>
    </main>
  );
};

export default Exercise1;
