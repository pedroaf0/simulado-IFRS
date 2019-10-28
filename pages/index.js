window.onload = function(){
    render = document.getElementById("root");
    render.innerHTML = '\
            <div id="index">\
    <img height="50%" src="logo.png"><br><br>\
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



function iniciar(){
  var select = document.getElementById("select");
  console.log(select.options[select.selectedIndex].value + "a");
  window.history.pushState('Object', '', '?prova='+select.options[select.selectedIndex].value);

  render.innerHTML = '<img src="load.gif">';

    var script1 = document.createElement('script');
    script1.src = "pages/prova.js";
    document.body.appendChild(script1);
  script1.onload = function() {
    var script2 = document.createElement('script');
    script2.src = "jquery.min.js";
    document.body.appendChild(script2);
     script2.onload = function() {
      console.log("loaded");
      render.innerHTML = '';
      prova(select.options[select.selectedIndex].value);
  
    }
  }
};