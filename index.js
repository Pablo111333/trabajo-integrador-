var valorentrada=200;
 function resumen(){
     
      var cantidad= document.getElementById("cantidadEntrada").value;
      var descuento = document.getElementById("inputState").value;
      var preciofinal= cantidad *(valorentrada-(valorentrada*descuento)/100);
      document.getElementById("totalCompra").innerHTML="Total de venta:"+preciofinal+"$";

}


function borrar(){

document.getElementById("totalCompra").innerHTML="Total a Pagar: $";
}