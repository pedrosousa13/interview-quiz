import styles from "../styles/Home.module.css";

const Exercise1 = () => {

  const petName = "Leo";
  const placeholder = "{NAME}";
  const reminderTemplate =
    "{NAME} is due for another visit. Please call us, so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";

  // There is a problem with `replace`, do you know what it is?
  const reminder = reminderTemplate.replace(placeholder, petName);

  // Current output: "Leo is due for another visit. Please call us, so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";

  // What we want
  // Current output: "Leo is due for another visit. Please call us, so we can set up a new appointment. We look forward to seeing you and Leo soon.";

  return (
    <main className={styles.container}>
      <h4>Exercise 1</h4>
      <p>{reminder}</p>
    </main>
  );
};

export default Exercise1;
