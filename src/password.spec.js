import Password from "./password.js"

describe("ingresar password", () => {
    let newPassword;
    beforeEach(() => {
        newPassword=new Password();
      });
    it("se introduce un password", () => {
        newPassword.setPass(1)
        expect(newPassword.getPass()).toEqual(1);
    });
});