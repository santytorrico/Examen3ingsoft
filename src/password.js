
class Password{
    
    constructor()
    {
        this.pass=0;
        
    }
    getPass(){
        return this.pass;
    }
    comparePhrase(phrase){
        if(this.pass==phrase){
            return true;
        }
        return false;
    }
    countSamePhrasesOnASentence(sentence){
        return this.comparePhrase(sentence);
    }
    setPass(password)
    {
        this.pass=password;
    }
}

export default Password;