<?php 
include ('../controle/conexao.php');  

if (isset($_GET['idaula']) || isset($_GET['id'])){
	if (isset($_GET['id'])){
	$idaula = $_GET['id'];
	}else{
		$idaula = $_GET['idaula'];
		}
	
	if(isset($_GET['idmunicipio'])){
		$idMunicipio =  $_GET['idmunicipio'];
	}else { 
		$idMunicipio = '';
	}
	if(isset($_GET['retornaHtml'])){
		$retornaHtml = '&retornaHtml=' . $_GET['retornaHtml'];
	}else {
		$retornaHtml = '&retornaHtml=' .$_SERVER['HTTP_REFERER'];
	}
	$retornaHtml = '&retornaHtml=false' ;
	if(isset($_GET['entraProfessor'])){
		$entraProfessor = '&entraProfessor=' . $_GET['entraProfessor'];
	}else {
		$entraProfessor = '&entraProfessor=true';
	}
	
	$sql_query = "select disciplinas.cor,aulas_titulo.as3,aulas_titulo.classe,aulas_titulo.disciplina,aulas_titulo.titulo from disciplinas  left join aulas_titulo on (disciplinas.nm_disciplina = aulas_titulo.disciplina) where aulas_titulo.id_aula = ".$idaula;
	$resposta = mysql_query($sql_query);
	while($row = mysql_fetch_array($resposta))
	{
		$Cor =  $row[0];
		$AS3 =  $row[1];
		$title = $row[2] . ' - ' . $row[3] . ' - ' . $row[4];
	}
	if ($Cor == '') {
	$Cor = 'CCCCCC';
	}
	
	$sql_query = "insert into acessos_aula (id_aula) values (".$idaula.")";
	$resposta = mysql_query($sql_query);
	
	?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<title><?php echo $title;?></title>
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" bgcolor='<?php echo '#'.$Cor?>'>
<?php 
// Verifica se a aula eh em as3
if ($AS3 == '0') { 
// Mostra Aula AS2
?>
<object width="100%" height="100%" >
  <param name="movie" value="skin_AS2.swf">
  </param>
  <param name="allowFullScreen" value="true">
  </param>
  <param name="allowscriptaccess" value="always">
  </param>
  <param name="flashVars" value="idAula=<?php echo $idaula?>&idMunicipio=<?php echo $idMunicipio?>&corfundo=<?php echo $Cor?><?php echo $entraProfessor?><?php echo $retornaHtml?>">
  </param>
  <param name="bgcolor" value="<?php echo '#'.$Cor?>">
  </param>
  <embed bgcolor=<?php echo '#'.$Cor?> src="skin_AS2.swf" width="100%" height="100%" type="application/x-shockwave-flash" allowscriptaccess="always" flashVars="idAula=<?php echo $idaula?>&idMunicipio=<?php echo $idMunicipio?>&corfundo=<?php echo $Cor?><?php echo $entraProfessor?><?php echo $retornaHtml?>" allowfullscreen="true"></embed>
</object>
<?php } else if ($AS3 == '1') {
// Mostra Aula AS3
 ?>
<object width="100%" height="100%" >
  <param name="movie" value="SkinAs3v0.swf">
  </param>
  <param name="allowFullScreen" value="true">
  </param>
  <param name="allowscriptaccess" value="always">
  </param>
  <param name="flashVars" value="idAula=<?php echo $idaula?>&SairURL=<?php echo $retornaHtml?><?php echo $entraProfessor?>">
  </param>
  <param name="bgcolor" value="#cccccc">
  </param>
  <embed bgcolor="#cccccc" src="SkinAs3v0.swf" width="100%" height="100%" type="application/x-shockwave-flash" allowscriptaccess="always" flashVars="idAula=<?php echo $idaula?>&SairURL=<?php echo $retornaHtml?>" allowfullscreen="true"></embed>
</object>

<?
}} else { ?>
<h1>Aula inválida</h1>
<? } ?></body>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-9687924-5");
pageTracker._trackPageview();
} catch(err) {}</script>
</html>
