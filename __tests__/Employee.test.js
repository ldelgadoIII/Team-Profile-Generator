const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialize", () => {
    //should have a name, role, id and email property
    it("should have a name, role, id and email property", () => {
      const employee = new Employee("Loreto", "Employee", 1, "ldelgad1");

      expect("name" in employee).toEqual(true);
      expect("role" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
      expect("email" in employee).toEqual(true);
    });
  });
});
