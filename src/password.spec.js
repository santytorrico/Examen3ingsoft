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
    it("Se compara si el pasword es igual a lo que uno espera", () => {
        newPassword.setPass("Es")
        expect(newPassword.getPass()).toEqual("Es");
    });
});
describe("ingresar password", () => {
    let newPassword;
    beforeEach(() => {
        newPassword=new Password();
      });
    it("Verifica que una frase dada sea igual al valor de password", () => {
        newPassword.setPass("Hola")
        expect(newPassword.comparePhrase("hola")).toEqual(true);
    });
});