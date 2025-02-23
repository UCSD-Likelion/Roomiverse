const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

export const formValidation = (formData) => {
  let errors = {};

  // Checks if any field is empty
  Object.keys(formData).forEach((key) => {
    if (key !== "birthdate") {
      if (formData[key].trim() === "") {
        errors[key] = "This field is required.";
      }
    }
  });

  const today = new Date();
  const birthdate = new Date(formData.birthdate);

  // Checks if the birthdate is today
  if (
    birthdate.getMonth() === today.getMonth() &&
    birthdate.getDate() === today.getDate() &&
    birthdate.getFullYear() === today.getFullYear()
  ) {
    errors.birthdate = "This field is required.";
  }

  // Checks if email is valid
  if (!validateEmail(formData.email)) {
    errors.email = "Your email is invalid.";
  }

  // Checks if password is at least 6 characters long
  if (formData.password.length < 6) {
    errors.password = "Your password must be at least 6 characters long.";
  }

  // Check if the date is in the past
  console.log();
  if (birthdate > today) {
    errors.birthdate = "Your birthdate cannot be in the future.";
  }

  return errors;
};

export const loginValidation = (formData) => {
  let errors = {};

  // Checks if any field is empty
  Object.keys(formData).forEach((key) => {
    if (formData[key].trim() === "") {
      errors[key] = "This field is required.";
    }
  });

  // Checks if email is valid
  if (!validateEmail(formData.email)) {
    errors.email = "Your email is invalid.";
  }

  return errors;
}
