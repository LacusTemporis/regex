export class Validator {
    validateUsername(username) {
      return /^[a-zA-Z]([a-zA-Z0-9-_]*[a-zA-Z0-9])?$/.test(username) && !/\d{4,}/.test(username);
    }
  }
  
  