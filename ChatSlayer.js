document.addEventListener('copy', function (event){

      event.preventDefault();
  
      let selectedText = document.getElementById('exemplo');
  

      let modifiedText = selectedText.textContent + " - Texto modificado após copiar!";
  

      event.clipboardData.setData('text/plain', modifiedText);
});