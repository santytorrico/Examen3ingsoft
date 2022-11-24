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
        expect(newPassword.comparePhrase("Hola")).toEqual(true);
    });
    it("Verifica que una frase dada no sea igual al valor de password", () => {
        newPassword.setPass("Hola")
        expect(newPassword.comparePhrase("alo")).toEqual(false);
    });
    it("Verifica si una oracion tiene una misma frase", () => {
        newPassword.setPass("Hola como estas")
        expect(newPassword.countSamePhrasesOnASentence("Hola como estas")).toEqual(true);
    });
});