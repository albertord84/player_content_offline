/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */

import React, { Component } from 'react';
import Card from './card';
import List from './list';
import Modal from 'react-responsive-modal';
import ReactSWF from 'react-swf';
import Drawer from 'react-motion-drawer';
import { toXML } from 'jstoxml';
import _ from 'lodash';
import LeftItem from './leftItem';

var main;
export default class Index extends Component {

  constructor(){
      super();
      main = this;
      this.state = {
        open: false,
        openPdf:false,
        openAula:false,
        aula:{},
        materias:[
          {
            titulo:"Artes"
          },{
            titulo:"Ciências"
          },{
            titulo:"Espanhol"
          },{
            titulo:"Francês"
          },{
            titulo:"Geografia"
          },{
            titulo:"História"
          },{
            titulo:"Matemática"
          },{
            titulo:"Português"
          }
        ],
        video:true,
        list2:[],
        list:[]
      }

      fetch('/skin/aulas.json')
  			.then(response => response.json())
  			.then(data => {
  				console.log(data);
  		})
  		.catch(err => console.error(this.props.url, err.toString()))

      this.onOpenModal = this.onOpenModal.bind(this);
      this.onCloseModal = this.onCloseModal.bind(this);
      this.onCloseModalAnimacao = this.onCloseModalAnimacao.bind(this);
      this.onCloseModalPDF = this.onCloseModalPDF.bind(this);
      this.onChange = this.onChange.bind(this);

      this.setVideo = this.setVideo.bind(this);

  }

  componentWillReceiveProps(nextProps){
      //console.log("params",nextProps.params);
      //console.log("montou222");

      //console.log(parseInt(nextProps.params.ano));
      //main.setState({ list: [] });
      var temp = [];
      fetch('/aulasvideo/'+nextProps.params.materia+"/info_curso.json")
  			.then(response => response.json())
  			.then(data => {
  			//	console.log('aqui',parseInt(nextProps.params.ano));
        var ttsdf = [];
         temp = ttsdf.concat(data.capitulos[parseInt(nextProps.params.ano)].sub,temp);
         main.setState({ list2: temp });
        //  console.log(temp2);
          //main.setState({ list: temp2 });
  		})
  		.catch(err => console.error(this.props.url, err.toString()))

      fetch('/skin/aulas.json')
  			.then(response => response.json())
  			.then(data => {
  				//console.log(data.seletor.nivel[1].serie[parseInt(nextProps.params.ano)].disciplina);
          var dataFilt = data.seletor.nivel[1].serie[parseInt(nextProps.params.ano)].disciplina;
          var user = _.find(dataFilt, { _nome: nextProps.params.materia });
        //  console.log(user.aula[0]);



          //console.log(xml);

          for( var a = 0; a < user.aula.length;a++){
            user.aula[a].template = "animacao";
            var testessa = toXML(user.aula[a]);

          }

          var temps = [];
          //var temp2s = temps.concat(user.aula,temp);
          main.setState({ list: user.aula });
        //  console.log("megaResult",nextProps.params.materia);
          //console.log(user.aula);

        //  main.setState({ list: main.state.list + user.aula });

  		})
  		.catch(err => console.error(this.props.url, err.toString()))
  }

  onOpenModal(text){
    if(text.template == "video")
    {
      this.setState({ open: true , aula:text});
    }
    else if(text.template == "pdf"){
      this.setState({ openPdf: true , aula:text});
    }
    else if(text.template == "animacao"){
    //  console.log(text);

      var aulla = text;
      var xml = '<?xml version="1.0" encoding="utf-8"?><Aula><Titulo>'+aulla._nome+'</Titulo><Disciplina>'+aulla._disciplina+'</Disciplina><Serie>'+aulla._nivel+'</Serie><Paginas>';

      for(var s = 0; s < aulla.pagina.length;s++){
        var trs = '<Pagina><Subtitulo>'+aulla.pagina[s]._titulo+'</Subtitulo><Arquivo>'+aulla.pagina[s]._arquivo+'.swf</Arquivo></Pagina>';
        xml += trs;
      }

      var trest = '</Paginas><Fundo>'+aulla.pagina[0]._id_fundo+'</Fundo><Objetivos><linha><![CDATA[Geral:]]></linha><linha><![CDATA[Demonstrar, para reconhecimento, as características do gênero textual notícia.]]></linha><linha><![CDATA[]]></linha><linha><![CDATA[Específicos:]]></linha><linha><![CDATA[-Ler e interpretar notícias de jornal;]]></linha><linha><![CDATA[-Identificar as características do gênero textual;]]></linha><linha><![CDATA[-Sintetizar informações e organizá-las em forma de texto;]]></linha><linha><![CDATA[-Desenvolver habilidades de coesão e coerência;]]></linha><linha><![CDATA[-Escrever notícia de acordo com a estrutura e as características do gênero.]]></linha></Objetivos></Aula>';
      xml+= trest;
      console.log(xml);

      fetch('/savexml', {
       method: 'post',
       headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
       body: JSON.stringify({
          data: xml,
          secondParam: 'yourOtherValue',
        })
      });
      this.setState({ openAula: true , aula:text});
    }

  };



  onCloseModal() {
    this.setState({ open: false });
  };

  onCloseModalPDF() {
    this.setState({ openPdf: false });
  };

  onCloseModalAnimacao() {
    this.setState({ openAula: false });
  };

  onChange() {
    this.setState({ openAula: false });
  };

  setVideo(value){
    this.setState({ video: value });
  }

  render() {
    const { open,openPdf,openAula } = this.state;
    const openmodal = this.onOpenModal;

    return (
      <div className='container'>
      <Drawer open={true} width={300} onChange={this.onChange} drawerStyle={{"background":"#fff","boxShadow": "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"}}>

      </Drawer>
      <Modal open={open} onClose={this.onCloseModal} center>
        <div className="videomodal">
          <video width="320" height="240" controls>
            <source src={"/aulasvideo/Artes/"+this.state.aula.fileName} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
          <span className="videomodalTitulo">{this.state.aula.nome}</span>
          <span className="videomodalDesc">{this.state.aula.descricao}</span>
        </div>
      </Modal>
      <Modal open={openPdf} onClose={this.onCloseModalPDF} classNames={{  modal: 'pdfmodal' }} center>
        <div className="videomodal">
          <iframe id="fred" title="PDF in an i-Frame" src="/dist/1_Ano/Arte/Pdfs/Arte_1_Ano.pdf" height="600" width="800" ></iframe>
        </div>
      </Modal>
      <Modal open={openAula} onClose={this.onCloseModalAnimacao} classNames={{  modal: 'pdfmodal' }} center>
        <ReactSWF
          src="skin/skindev.swf"
          id="guid_001"
          width="800"
          height="600"
          wmode="transparent"
          flashVars={{foo: 'A', bar: 1}}
          />
      </Modal>
      <button className="botaoEscolher extramargin" style={{backgroundColor:this.state.video? 'rgb(31, 71, 141)' : '#ffffff',color:this.state.video? '#fff' : '#000'}} onClick={() => this.setVideo(true)}>AULAS INTERATIVAS</button>
      <button className="botaoEscolher" style={{backgroundColor:!this.state.video? 'rgb(31, 71, 141)' : '#ffffff',color:!this.state.video? '#fff' : '#000'}}  onClick={() => this.setVideo(false)}>VIDEOS</button>
      {this.state.video ? (
        <List list={this.state.list} openmodal={openmodal}/>
      ) : (
        <List list={this.state.list2} openmodal={openmodal}/>
      )}

      </div>

    )
  }
}
