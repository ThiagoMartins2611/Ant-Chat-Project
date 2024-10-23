let selectedText = document.getElementById('exemplo');

function trocaDeValoresEscolhidos(selectedText){

      text = selectedText.textContent;

      let textArray = text.split("");

      textArrayLength = textArray.length;



      for(let i = 0; i<=textArrayLength; i++){
          
         

      }

      
      text = textArray.join("")
}


function formula(){

}

function ChangeText(text){

      text = selectedText.textContent;

      let textArray = text.split("");

      textArrayLength = textArray.length;



      for(let i = 0; i<=textArrayLength; i++){
          
            if(isNaN(textArray[i])){

            }else if(textArray[i] != " "){

                  if(!isNaN(textArray[i-1])){
                  textArray[i] = Math.trunc(Math.random()*10);
                  }


            }

      }

      
      text = textArray.join("")

      console.log(text)
      return text;

      
}



document.addEventListener('copy', function (event){

      event.preventDefault();
      event.clipboardData.setData('text/plain',  ChangeText(selectedText));



    

});




