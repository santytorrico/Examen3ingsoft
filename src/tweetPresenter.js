let tweetTxt =document.querySelector("#tweetText");
let tweetBtn =document.querySelector("#tweetButton")

function addTexttoTweet(){
    tweetBtn.addEventListener("click", (event) => {
        event.preventDefault();
       
        div.innerHTML = "<p>" + tweetTxt.value + "</p>";
        console.log(tweetTxt.value);
      });
}
  