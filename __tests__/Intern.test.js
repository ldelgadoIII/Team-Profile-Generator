const Employee = require("../lib/Employee");

describe("Intern", () => {
  describe("Initialize", () => {
    //should have a school property
    it("should have a school property", () => {
      const intern = new Intern("");

      expect("name" in employee).toEqual(true);
      expect("role" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
      expect("email" in employee).toEqual(true);
    });
  });
});
