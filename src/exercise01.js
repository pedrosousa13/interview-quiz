const petName = "Leo";
const placeholder = "{NAME}";
const reminderTemplate =
  "{NAME} is due for another visit. Please call us, so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";

// We want to replace {Name} with our pet's name everywhere it appears. But our code has a bug, can you fix it or write it a better way?

const reminder = reminderTemplate.replace(placeholder, petName);

