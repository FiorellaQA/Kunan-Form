

for(var i = 18 ; i < 101 ; i++){
	var newElement = document.createElement("option");
		newElement.setAttribute("value",i);
	var text = document.createTextNode(i);  
	newElement.appendChild(text);
	document.getElementById("edad").appendChild(newElement);
}
var regiones = ["Amazonas", "Ancash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", 
				"Callao", "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", 
				"La Libertad", "Lambayeque","Lima Metropolitana","Loreto","Madre de Dios", "Moquegua", 
				"Pasco", "Piura","Puno","San Martin","Tacna","Tumbes","Ucayali"];

for(var i = 0 ; i < regiones.length ; i++){
	var newElement = document.createElement("option");
		newElement.setAttribute("value",regiones[i]);
	var text = document.createTextNode(regiones[i]);  
	newElement.appendChild(text);
	document.getElementById("regionNacimiento").appendChild(newElement);
}
for(var i = 0 ; i < regiones.length ; i++){
	var newElement = document.createElement("option");
		newElement.setAttribute("value",regiones[i]);
	var text = document.createTextNode(regiones[i]);  
	newElement.appendChild(text);
	document.getElementById("regionResidencia").appendChild(newElement);
}
var array = document.getElementsByClassName("input-registro");
for(i = 0 ; i < array.length; i++){
	array[i].addEventListener("blur", validationInput);
}
for(var i = 0 ; i < regiones.length ; i++){
	var newElement = document.createElement("input");
		newElement.setAttribute("type","checkbox");
		newElement.setAttribute("value",regiones[i]);
	var br = document.createElement("br");
	var span = document.createElement("span");
	var text = document.createTextNode(regiones[i]);  
		span.appendChild(text);
	document.getElementById("intervencionRegiones").appendChild(newElement);
	document.getElementById("intervencionRegiones").appendChild(span);
	document.getElementById("intervencionRegiones").appendChild(br);
}
// <input type="checkbox" value=""><span>hla</span>


function validationInput(){
// 	function hiddenToolTip(nodoInput){
//   var nodoSpan = nodoInput.nextElementSibling;
//   nodoSpan.setAttribute("style","display:none");
// }

// function showToolTip(texto,nodoInput){
//     var nodoSpan = nodoInput.nextElementSibling;
//     nodoSpan.setAttribute("style","display:block");
//     nodoSpan.innerHTML = texto;
// }

	var indicacion = document.getElementById("indicacion");
		indicacion.innerHTML = "";
	if(this.value.trim().length === 0){
		this.nextElementSibling.setAttribute("style","display:block");
		this.nextElementSibling.innerHTML = "Este campo es obligatorio";
	}else{
		this.nextElementSibling.innerHTML = "";		
	}
}

document.getElementById("enviar").addEventListener("click",function(e){
	e.preventDefault();
	var indicacion = document.getElementById("indicacion");
	var array = document.getElementsByClassName("input-registro");
	for(i = 0 ; i < array.length; i++){
		if( !(array[i].value.trim().length != 0)){
			indicacion.innerHTML = "*Todos los campos son obligatorios.</br>";
		}else{
			indicacion.innerHTML = "";
		}
	}
/*-----------------------Validacion Radio Buttom-----------------------*/
	var messageRadio = document.getElementById("messageRadio");
	var feme = document.getElementById("femenino");
	var masc = document.getElementById("masculino");
	if(feme.checked == false && masc.checked == false){
		messageRadio.innerHTML = "</br>*Este campo es obligatorio";
	}	
	var arrayRadio = document.getElementsByClassName("radioButtom");
	for(var i = 0 ; i < arrayRadio.length ; i++){
		arrayRadio[i].addEventListener("click",checked);
	}
	function checked(){
		messageRadio.innerHTML = "";
	}
/*-----------------------END Radio Buttom-----------------------*/
});






















