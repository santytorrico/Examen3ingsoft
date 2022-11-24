let tweetTxt =document.querySelector("#tweetText");
let tweetBtn =document.querySelector("#tweetButton")

function addTexttoTweet(){
    tweetBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if(tweetTxt.value==""){
            alert("no se puede ingresar un post sin texto");
        }
        div.innerHTML = "<p>" + tweetTxt.value + "</p>";
        console.log(tweetTxt.value);
      });
}
  