function MergeSort(arreglo){ //Primero se verifica el tamaño del array
  if (arreglo.length < 2){
    return arreglo;
  }
//se divide el arreglo en dos
  var centro = Math.floor(arreglo.length / 2);
 var izq= arreglo.slice(0,centro);
 var der = arreglo.slice(centro);
 return Merge(MergeSort(izq), MergeSort(der)); //se asignan los arrays a la nueva funcion

 function Merge(izq,der){
  var orden = [];
  var i = 0;
  var j = 0; //indices de los arreglos

  while (i < izq.length && j <der.length){ //se recorren arreglos
    if (izq[i]< der[j]) //comparacion
  {
    orden.push(izq[i]); 
    i++ ;
    //se agrega y aumenta en uno

   }else {
    orden.push(der[j]);
    j++;
    //se agrega y aumenta en uno el indice
   }
  }
  return orden.concat(izq.slice(i)).concat(der.slice(j)); //se concatenan


}
}
var prueba = [10,15,2,47,4];
console.log(MergeSort(prueba));
