const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

export const formValidation = (formData) => {
  let errors = {};

  // Checks if any field is empty
  Object.keys(formData).forEach((key) => {
    console.log(key);
  });

  // Checks if email is valid
  if (!validateEmail(formData.email)) {
    errors.email = "Your email is invalid.";
  }
};
