function CambioColor(id){
var corazon=document.getElementById(id).style.color;
document.getElementById(id).style.color='red';
if(corazon=='red')
document.getElementById(id).style.color='grey';
else document.getElementById(id).style.color='red';


}
/*var corazon=document.querySelectorAll(".fa.fa-heart");
for (var i = 0; i < corazon.length; i++) {
        corazon[i].addEventListener("click",function(){

          if(this.className=="fa fa-heart grey")
            this.className="fa fa-heart red";
          else this.className="fa fa-heart grey";


});
}*/
function yaCompartido(){
var compartir=document.getElementsByClassName('fa-share-alt')
alert("Se ha compartido la imagen");
}
function ocultar(id){
document.getElementById(id).style.display='none';
}
function mostrar(id){
  document.getElementById(id).style.display = 'block';
}
function MostrarCampos(id){
  var posicion=document.getElementById('GradoProfesionalidad').options.selectedIndex;

  if(posicion==0){
mostrar(id);
  }else {
        document.getElementById('NombreDelEstudio').required=false;
        document.getElementById('Direccion').required=false;
        document.getElementById('Direccion2').required=false;

    ocultar(id);

  }
}

function comenta(id1,id2){
mostrar(id1);
mostrar(id2);

}

function comentarioTexto(id1,id2,id3){
var x=document.getElementById(id1).value;
if(x.length>15){

  var sub=x.substr(0,15);
  var para = document.createElement("div");
  para.setAttribute("id","textoM")
    var t = document.createTextNode(sub);
    para.appendChild(t);
    document.getElementById(id3).appendChild(para);
    var btn = document.createElement("BUTTON");
    var t2 = document.createTextNode("+");
    btn.appendChild(t2);
    document.getElementById(id3).appendChild(btn);
    btn.setAttribute("id","BotonID");
    btn.setAttribute('onclick','mostrarMensajeCompleto(x,btn,para,id3,id2,id1);');
    btn.onclick=function(){mostrarMensajeCompleto(x,btn,para,id3,id2,id1);};

}

else{
var para = document.createElement("P");
  var t = document.createTextNode(x);
  para.appendChild(t);
  document.getElementById(id3).appendChild(para);
}
}

//x es comentario entero y BOTON ID ES CON EL MAS DEL TEXTO RECORTADO
function mostrarMensajeCompleto(x,btn,para,id3,id2,id1){
btn.style.display='none';
  var sub2=x.substr(15,x.length-1);
  var t3=document.createTextNode(sub2);
  document.getElementById(id3).appendChild(t3);
  ocultar(id2);
  ocultar(id1);

}
function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1){
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}

function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}
/*Da un error del estilo.
if(getCookie('tiendaaviso')!="1"){
document.getElementById("barraaceptacion").style.display='block';
}*/
function PonerCookie(){
    setCookie('tiendaaviso','1',365);
    document.getElementById("barraaceptacion").style.display='none';
}

function crearCookie(user, contras) {

	//Generar el cookie.
	var usuarioo = user.concat(",");
	var contrass = usuarioo.concat(contras);
	var cookie = contrass.concat(";");

	//Guardamos el cookie.
	localStorage.setItem("UsuarioContraseña", cookie);
}


function comprobarCookie(id1, id2) {
	//id1 es la id del campo usuario
	//id2 es la id del campo password

	var user = document.getElementById(id1).value;
	var contras = document.getElementById(id2).value;
	var usuarioo = user.concat(",");
	var contra = usuarioo.concat(contras);
	var buscador = contra.concat(";");

	var aux = localStorage.getItem("UsuarioContraseña");
	if(aux == buscador){

		window.location="Ejercicio2ConPerfil.html";

		var aux2 = document.createElement("P");
    	var t3 = document.createTextNode(user);
    	aux2.appendChild(t3);
    	document.getElementById('UsuarioFoto').appendChild(aux2);
    	aux2.setAttribute("class","UsuarioConNombre");
	}
	else{
		alert("Los datos son incorrectos.");
	}
}

function cambiarUsuario() {
	var aux = localStorage.getItem("UsuarioContraseña");

	var array = aux.split(",");

	var aux2 = document.createElement("P");
    var t3 = document.createTextNode(array[0]);
    aux2.appendChild(t3);
    document.getElementById('UsuarioFoto').appendChild(aux2);
    aux2.setAttribute("class","UsuarioConNombre");

    var btn = document.createElement("BUTTON");
	var t4 = document.createTextNode("LOGOUT");
	btn.appendChild(t4);
	document.getElementById('UsuarioFoto').appendChild(btn);
	btn.setAttribute("class","BotonDeSalida");

	btn.setAttribute('onclick','Salir();');
   	btn.onclick = function() {Salir();};
}

function Salir(){
  window.location="Ejercicio2.html";
}
function ValidacionFormulario(){
  var Email = document.getElementById("Email").value;
	var ConfirmarEmail = document.getElementById("ConfirmarEmail").value;
	if(ConfirmarEmail != Email){
		alert("Los emails introducidos son distintos.");
		return -1;
	}

	alert("Email introducido correctamente , recibirás un mensaje de confirmación");

	var contras = document.getElementById("contras").value;
	var ConfirmarPass = document.getElementById("ConfirmarPass").value;
	if(ConfirmarPass != contras){
		alert("Las contraseñas son distintos.");
		return -1;
	}

	var user = document.getElementById("user").value;
	crearCookie(user, contras);

	alert("Te has registrado correctamente");
}
