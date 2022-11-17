const petName = "Leo";
const placeholder = "{NAME}";
const reminderTemplate =
  "{NAME} is due for another visit. Please call us, so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";

// What we want
// Current output: "Leo is due for another visit. Please call us, so we can set up a new appointment. We look forward to seeing you and Leo soon.";

// There is a problem with `replace`, do you know what it is?
const reminder = reminderTemplate.replace(placeholder, petName);

