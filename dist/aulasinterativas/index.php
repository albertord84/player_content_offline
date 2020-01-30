<?php 

if(file_exists('class/portalEducacional.class.php')){
	include_once('class/portalEducacional.class.php');
} else if(file_exists('../class/portalEducacional.class.php')) {
	include_once('../class/portalEducacional.class.php');
} else if(file_exists('../class/portalEducacional.class.php')) {
	include_once('../../class/portalEducacional.class.php');
} else {
	include_once('../../../class/portalEducacional.class.php');
}
$sistema = new portalEducacional();
if (session_status() == PHP_SESSION_NONE) { session_start(); }
$url = explode('/',$_SERVER['REQUEST_URI']);

$_SESSION['CHAVE_PRODUTO'] = $url[3];
$aula = $sistema->retornaAula($url[3]);
$_skin = $url[2];
if($_skin=='ei')
{
	$skin = '//'.$_SERVER['HTTP_HOST'].'/aulasinterativas/skin_ei/main.swf';
} else {
	$skin = '//'.$_SERVER['HTTP_HOST'].'/aulasinterativas/skin_dev/skin.swf';
}
 ?>

<script type="text/javascript" src="//<?=$_SERVER['HTTP_HOST']?>/js/jquery.js"></script>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<script type="text/javascript" src="//<?=$_SERVER['HTTP_HOST']?>/swfobject.js"></script>
		
		<script type="text/javascript">
		var wTela = function(){
			var widthTela = '';
			if('<?=$_skin?>'=='ef')
			{
				widthTela = '880px';
			} else {
				widthTela = window.innerWidth+'px';
			}

			var heightTela = '';
			if('<?=$_skin?>'=='ef')
			{
				heightTela = '660px';
			} else {
				heightTela = window.innerHeight+'px';
			}
			return [widthTela,heightTela];
		};
			$(document).ready(function(){

				swfobject.embedSWF('<?=$skin?>', 'player', wTela()[0], wTela()[1], '9.0.0');

			});
			
			
			if('<?=$_skin?>'=='ef')
			{
				var w = '880px';
				var h = '660px';
			} else {
				var w = window.innerWidth+'px';
				var h = window.innerHeight+'px';
			}
			
			
			
			var flashvars = {},
			params = {};
			flashvars.idAula = "<?=intval($aula['id_aula'])?>";
			//console.log("{{ $skin }}?rand=" + Math.random(), "player", w, h, "9.0.0","expressInstall.swf", flashvars, params);
		    swfobject.embedSWF("<?=$skin?>?rand=" + Math.random(), "player", wTela()[0], wTela()[1], "9.0.0","expressInstall.swf", flashvars, params);
	    </script>
	</head>
<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" bgcolor='#FFFFFF'>

	



		<div id='tudo' <?php if($skin=='/aulasinterativas/skin_ei/main.swf') { ?> style='margin:0 0;' <?php } else { ?> style='margin:0 auto;' <?php } ?> >
			<div id='player'>
				<center>
					<center>
					<object id="myId" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
						<param name="movie" value="<?=$skin?>?rand=" />
		        		
						<object  id="playson"  type="application/x-shockwave-flash" data="<?=$skin?>?rand=">
						
							<div class="row">
							<h1>Olá!</h1>
							<div class="panel panel-default">
								<div class="panel-heading">
									Ops! Talvez falte o plugin do flash.
								</div>
								<div class="panel-body">
									Talvez você ainda não tenha o plugin do Flash instalado em seu navegador. Se for este o caso, a solução é clicar no link abaixo.
								</div>
								<div class="panel-footer">
									<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a>
								</div>
							</div>

						  	<h2>Uma outra possibilidade:</h2>
								<div class="jumbotron">
								  <p>Nossas aulas interativas são uma forma muito fácil de adquirir conhecimento. Para acessá-las, você deve habilitar seu navegador para que ele permita que nosso site disponibilize o conteúdo pra você.</p>
								  <br>
								  <h2>Por quê isso acontece?</h2>
								  <p>Nosso conteúdo foi feito em Flash, uma ferramenta incrível que por muito tempo revolucionou a internet permitindo animações e interações. Contudo, nem todos utilizaram o Flash com as melhores intenções. Foram descobertas algumas falhas no flash que geraram desconfiança por parte do público e como consequência, mesmo com as correções de segurança, alguns dos maiores navegadores (Google Chrome e Mozilla Firefox) resolveram por padrão impedir o uso do Flash como medida de segurança. Mas permitiram que houvessem exceções para que todo o conteúdo que é seguro (como é o nosso caso) não se perca.</p>
								  <br>
								  <h2>O que fazer?</h2>
								  <p>Você deve habilitar o uso do Flash no domínio específico. Abaixo seguem os tutoriais dos dois navegadores para que você possa acessar o conteúdo: </p>
								</div>
								<div class="col-md-12">
									<div class="col-md-6">
										<h1>Google Chrome</h1>
										<p>
											<ul class="list-group">
												<li class="list-group-item">1 - Digite <b>chrome://settings/content/flash</b> na barra de endereços e tecle <b>ENTER</b></li>
												<li class="list-group-item">2 - Na listagem "Permitir", clique em "Adicionar" e preencha com o domínio {{$_SERVER['HTTP_HOST']}}</li>
												<li class="list-group-item">3 - Pronto! Agora atualize esta página (F5) e acesse o conteúdo. Isso terá que ser feito apenas uma vez.</li>
											</ul>
										</p>
									</div>
									<div class="col-md-6">
										<h1>Mozilla Firefox</h1>
										<p>
											<ul class="list-group">
												<li class="list-group-item">1 - Digite na barra de endeços <b>about:addons</b> e tecle <b>ENTER</b></li>
												<li class="list-group-item">2 - Verifique se o Plugin do Shockwave Flash está instalado. Se estiver, certifique-se de que esteja marcado como "Perguntar para ativar" (recomendado) ou "Sempre ativar" (não recomendado). </li>
												<li class="list-group-item">3 - Pronto! Agora atualize esta página (F5) e acesse o conteúdo. Isso terá que ser feito apenas uma vez.</li>
											</ul>
										</p>
									</div>
									
									<!--h1>Alternative content</h1>
									<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p-->
								</div>
							</div>
						<!--[if !IE]>-->
						</object>
						<!--<![endif]-->
					</object>
					<!--a href="http://get.adobe.com/br/flashplayer/">
						<img src="contents/acessoaulas/icone_flash.png">
						<br>
						Clique aqui para instalar o flash player
					</a-->
				</center>
				</center>
			</div>
		</div>
	<script type="text/javascript">
		
		$(document).ready(function()
		{
			$('#tudo').width(wTela()[0]);
			$('#myId').width(wTela()[0]);
			$('#playson').width(wTela()[0]);
			$('#tudo').height(wTela()[1]);
			$('#myId').height(wTela()[1]);
			$('#playson').height(wTela()[1]);
		});
	</script>

</body>

	

</html>
