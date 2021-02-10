const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialize", () => {
    //should have a github property
    it("should have a github property", () => {
      const engineer = new Engineer(
        "Loreto",
        3,
        "ldeladothethird@gmail.com",
        "ldelgadoIII"
      );

      expect("github" in engineer).toEqual(true);
    });
    it("should return a school when .getSchool() is called", () => {
      const engineer = new Engineer(
        "Loreto",
        3,
        "ldeladothethird@gmail.com",
        "ldelgadoIII"
      );
      expect(engineer.getGithub()).toEqual("ldelgadoIII");
    });
    it('should return "Engineer" when .getRole() is called', () => {
      const engineer = new Engineer(
        "Loreto",
        3,
        "ldeladothethird@gmail.com",
        "ldelgadoIII"
      );
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
