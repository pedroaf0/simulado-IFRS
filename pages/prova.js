function prova(ano){
        $.getJSON('provas/'+ano+'/index.json', function(data) {
          
          for (i = 0; i < 6; i++) {
            document.getElementById("root").innerHTML += '<div id="'+i+'"></div>';
      
            document.getElementById(i).innerHTML += data.perguntas[i].pergunta+"<br>";
      
            document.getElementById(i).innerHTML += "<span id=\""+i+"\"><input type=\"radio\" name=\""+i+"\" id=\"A\">" +data.perguntas[i].A+"</span><br>";
            document.getElementById(i).innerHTML += "<span id=\""+i+"\"><input type=\"radio\" name=\""+i+"\" id=\"B\">" +data.perguntas[i].B+"</span><br>";
            document.getElementById(i).innerHTML += "<span id=\""+i+"\"><input type=\"radio\" name=\""+i+"\" id=\"C\">" +data.perguntas[i].C+"</span><br>";
            document.getElementById(i).innerHTML += "<span id=\""+i+"\"><input type=\"radio\" name=\""+i+"\" id=\"D\">" +data.perguntas[i].D+"</span><br>";
            document.getElementById(i).innerHTML += "<span id=\""+i+"\"><input type=\"radio\" name=\""+i+"\" id=\"E\">" +data.perguntas[i].E+"</span><br>";
          }
                      console.log(data);
      }); 
}
      
