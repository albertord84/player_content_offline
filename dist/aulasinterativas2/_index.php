<?php 

//include_once('../inc/sistema.php');
if (session_status() == PHP_SESSION_NONE) { session_start(); }
$_SESSION['CHAVE_PRODUTO'] = $_GET['chaveAula'];
$_skin = $_GET['skin'];

$skin = $_skin=='ei'?'skin_ei/main.swf':'skin_dev/skin.swf';
 ?>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<title>Titulo</title>
<script type="text/javascript" src="swfobject.js"></script>
<script type="text/javascript">
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
	var $_GET = {};
	var w = '880px';
	var h = '660px';
	
	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
		function decode(s) {
			return decodeURIComponent(s.split("+").join(" "));
		}
		$_GET[decode(arguments[1])] = decode(arguments[2]);
	});

	aula = '<?=$chaveAula?>';
	//aula = $_GET["idaula"];
	retornaHtml = '<?=@$_GET["retornaHtml"]?>';
	var flashvars = {},
	params = {/*wmode:"transparent"*/};
	flashvars.idAula = aula;
	//flashvars.retornaHtml = retornaHtml;
    swfobject.embedSWF("<?=$skin?>?rand=" + Math.random(), "player", w, h, "9.0.0","expressInstall.swf", flashvars, params);


    </script>
</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" bgcolor='#FFFFFF'>
	
<div id='tudo' style='width:880px; height:660px; margin:0 auto;'>
<div id='player'><center><a href="http://get.adobe.com/br/flashplayer/"><img src="icone_flash.png"><br>Clique aqui para instalar o flash player</a></center></div>
</div></body>
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
