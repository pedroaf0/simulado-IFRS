function prova(ano){
        $.getJSON('provas/'+ano+'/index.json', function(data) {
          
          for (i = 0; i < 6; i++) {
            document.getElementById("root").innerHTML += '<div id="'+i+'"></div>';
      
            document.getElementById(i).innerHTML += data.perguntas[i].pergunta+"<br>";
      
            document.getElementById(i).innerHTML += "<input type=\"radio\" name=\""+i+"\" id=\"A\" ><span id=\""+i+"\">" +data.perguntas[i].A+"</span><br>";
            document.getElementById(i).innerHTML += "<input type=\"radio\" name=\""+i+"\" id=\"B\">" +data.perguntas[i].B+"<br>";
            document.getElementById(i).innerHTML += "<input type=\"radio\" name=\""+i+"\" id=\"C\">" +data.perguntas[i].C+"<br>";
            document.getElementById(i).innerHTML += "<input type=\"radio\" name=\""+i+"\" id=\"D\">" +data.perguntas[i].D+"<br>";
            document.getElementById(i).innerHTML += "<input type=\"radio\" name=\""+i+"\" id=\"E\">" +data.perguntas[i].E+"<br>";
      
      
            n_perguntas += 1;
      
      
          }
                      console.log(data);
      }); 
}
      
