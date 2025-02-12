export default (input: string, name: string): boolean => {
  switch (name) {
    case "email":
      const patternMail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
      return patternMail.test(input);
    case "password":
      const patternPassword = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/
      );
      return patternPassword.test(input);
    default:
      return false;
  }
};
