window.onload = function(){
  var url = window.location.href;
  var ano = url.split("?");
  console.log(ano[1]);
  if (ano[1] == null){
    render();
  }else{
    load_prova(ano[1]);
  }

}

function render(){
    render = document.getElementById("root");
    render.innerHTML = '\
            <div id="index">\
    <img src="logo.png"><br><br>\
    selecione o ano da prova<br><br>\
    <select id="select">\
       <option value="2019">2019</option>\
       <option value="2018">2018</option>\
       <option value="2017">2017</option>\
       <option value="2016">2016</option>\
     </select><br><br>\
     <button onclick="iniciar()">iniciar</button>\
   </div>';
}

function load_prova(ano){
  document.body.innerHTML += '<div id="overlay"><img id="imgload" src="https://data.whicdn.com/images/265718366/original.gif"></div>';

  document.getElementById("overlay").style.display = "block";
  var script1 = document.createElement('script');
    script1.src = "pages/prova.js";
    document.body.appendChild(script1);

  script1.onload = function(){
    prova(ano); 
  }
}


function iniciar(){
  var select = document.getElementById("select");
  console.log(select.options[select.selectedIndex].value);
  window.history.pushState('Object', '', '?'+select.options[select.selectedIndex].value);
  var ano  = select.options[select.selectedIndex].value;

  render.innerHTML = '<img src="load.gif">';
      load_prova(ano);
      
  
}

window.onbeforeunload = function()
{
      return "Você perdera suas respostas";
}