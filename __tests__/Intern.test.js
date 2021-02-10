const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialize", () => {
    //should have a school property
    it("should have a school property", () => {
      const intern = new Intern(
        "Loreto",
        3,
        "ldeladothethird@gmail.com",
        "Columbia University"
      );

      expect("school" in intern).toEqual(true);
    });
    it("should return a school when .getSchool() is called", () => {
      const intern = new Intern(
        "Loreto",
        3,
        "ldeladothethird@gmail.com",
        "Columbia University"
      );
      expect(intern.getSchool()).toEqual("Columbia University");
    });
    it('should return "Intern" when .getRole() is called', () => {
      const intern = new Intern(
        "Loreto",
        3,
        "ldeladothethird@gmail.com",
        "Columbia University"
      );
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
