import { Validator } from "../regex";

describe('Validator', () => {
  const validator = new Validator();

  test.each([
    ["simpleUser", true],
    ["user-123", true],
    ["user_name", true],
    ["user-name", true],
    ["123user", false],
    ["user1234", false],
    ["user!name", false],
    ["-user-", false],
    ["user__", false],
    ["__user", false], // Проверка случая, когда имя начинается с двух подчёркиваний
    ["us--er", true],
    ["123", false],
    ["user_123", true],
  ])('validateUsername("%s") should return %s', (username, expected) => {
    expect(validator.validateUsername(username)).toBe(expected);
  });
});
