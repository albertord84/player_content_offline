<?php
//include_once('../inc/sistema.php');
if (session_status() == PHP_SESSION_NONE) { session_start(); }
header("Content-type: text/xml");
?>
<configs>	
	<!--caminhoXmlAula>http://aplicativos.vivainovacoes.com.br/RetornaXmlAulaSeguro2.php?idaula=</caminhoXmlAula-->	
	<caminhoXmlAula>//<?=$_SERVER['HTTP_HOST']?>/retornaXmlAula.php?idaula=<?=$_SESSION['CHAVE_PRODUTO']?></caminhoXmlAula>	
	<caminhoArquivosAula>//<?=$_SERVER['HTTP_HOST']?>/aulas/</caminhoArquivosAula>	
	<caminhoCarregamentoExterno>//<?=$_SERVER['HTTP_HOST']?>/aulas/</caminhoCarregamentoExterno>	 
	<caminhoFundo>//<?=$_SERVER['HTTP_HOST']?>/aulas/fundos/</caminhoFundo>
	<toff>0</toff>
</configs> 