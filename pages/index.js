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
    var script = document.createElement('script');
    script.src = "pages/prova.js";
    document.body.appendChild(script);
    var select = document.getElementById("select");
  //  prova(select.options[select.selectedIndex].value)
    console.log(select.options[select.selectedIndex].value + "a");
    render.innerHTML = '';
}