const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialize", () => {
    it("should have a name, id, email and office property", () => {
      const manager = new Manager("Loreto", 3, "ldeladothethird@gmail.com", 1);

      expect("name" in manager).toEqual(true);
      expect("id" in manager).toEqual(true);
      expect("email" in manager).toEqual(true);
      expect("office" in manager).toEqual(true);
    });
    it('should return "Manager" when .getRole() is called', () => {
      const manager = new Manager("Loreto", 3, "ldeladothethird@gmail.com", 1);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
