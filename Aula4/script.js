
function buscarInfos(){
    divInfos = document.getElementById("divInfos");
    var xhttp = new XMLHttpRequest();

    //$("#divInfos").html = "Carregando...";
    divInfos.innerHTML = "CArregando...";
    console.log("Carregando...");
    
    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            resposta = this.responseText;
            //$("#divInfos").html = resposta;
            divInfos.innerHTML = resposta;
            console.log(resposta);
        }

        if(this.readyState == 4 && this.status == 404){
            alert("Página não encontrada");
        }

    };

    xhttp.open("GET", "info.txt", true);
    xhttp.send()

}

function gerarNumero(){
    valor = document.getElementById("txtValor").value;
    divNumeros = document.getElementById("divNumeros");
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        divNumeros.innerHTML = 'Carregando...';
        if( this.readyState == 4 && this.status == 200){
            divNumeros.innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "servidor.php?numero=" + valor, true);
    xhttp.send();
}