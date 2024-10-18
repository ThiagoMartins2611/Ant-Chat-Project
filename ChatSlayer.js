
function ChangeText(text){

      text = selectedText.textContent;

      let textArray = text.split("");

      textArrayLength = textArray.length;



      for(let i = 0; i<=textArrayLength; i++){
          
            if(isNaN(textArray[i])){

            }else if(textArray[i] != " "){

                  textArray[i] = Math.trunc(Math.random()*10);
            }

      }

      
      text = textArray.join("")

      return text;
}

let selectedText = document.getElementById('exemplo');

document.addEventListener('copy', function (event){

      event.preventDefault();
      event.clipboardData.setData('text/plain',  ChangeText(selectedText));

});




