function lerDados(){
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            dados = JSON.parse( this.responseText );
            //console.log( dados );
            texto = "Nome: " + dados.nome + "<br>";
            texto += "Idade: " + dados.idade + "<br>";
            texto += "Anos de Formação: " + dados.anoFormacoes + "<br>";
            texto += "Titulaçôes: <br>";
            dados.graus.forEach( titulo => {
                texto += titulo + "<br>";
            });
            dados.filhos.forEach( filho => {
                texto += filho.nome + " - " + filho.idade + " anos <br>";
            });
            document.getElementById("divDados").innerHTML = texto;
        }
    };
    xhttp.open("GET", "meujson.JSON", true);
    xhttp.send();
}

function lerProdutos(){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            dados =  JSON.parse(this.responseText);
            if( dados.resposta ){
                alert(dados.resposta);
            }else{
                tabela = "<table border ='1'> ";
                tabela += "       <tr> ";
                tabela += "          <th>Código</th> ";
                tabela += "          <th>Nome</th> ";
                tabela += "          <th>Preço</th> ";
                tabela += "          <th>Quantidade </th> ";
                tabela += "          <th>codCategoria </th> ";
                tabela += "        <tr> ";
                
                dados.produtos.forEach( prod => {
                    tabela += "<tr>";
                    tabela += "         <td>"+prod.id+"</td>";
                    tabela += "         <td>"+prod.nome+"</td>";
                    tabela += "         <td>"+prod.preco+"</td>";
                    tabela += "         <td>"+prod.quantidade+"</td>";
                    tabela += "         <td>"+prod.codCategoria+"</td>";
                    tabela += "</tr>";
                });
                tabela += "</table>";
                document.getElementById("divProdutos").innerHTML = tabela;
            }
        }
    };
    xhttp.open("GET", "servidor.php?buscar", true);
    xhttp.send()
}