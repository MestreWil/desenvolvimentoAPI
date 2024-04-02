<?php
    header("Content-type: aplication/json");

    if( isset( $_REQUEST["buscar"]) ){
        try{
            $conecao = mysqli_connect("localhost", "root", "", "loja");
            if( $conecao ){
                $result = mysqli_query($conecao, "SELECT * FROM produto");
                $linhas = array();
                 while( $row = mysqli_fetch_assoc($result) ){
                     $linhas[] = $row;
                }
                mysqli_close($conecao);

                echo '{ "produtos" : '.json_encode($linhas).'}';

        }else{
            echo '{ "resposta": "Erro ao conectar com o <strong>Bando de Dados</strong>"}';
        }
        }catch(\Throwable $th){
            echo '{"resposta": "Erro ao conectar com o <strong>Bando de Dados</strong>"}"}';
        }
        
    }