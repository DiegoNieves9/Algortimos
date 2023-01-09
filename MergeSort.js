var A1 = [1,15,22];
var A2 = [2,8,17];
var resultados = []
function AlgMS (Izq,Der)
{
    var i = 0;
    var j = 0;
    while (i<Izq.length && j< Der.length){
        if (i === Izq.length){
            resultados.push(derecha[j]);
            j++;
        } 
        else if (j === Der.length || Izq[i] <= Der[j]){
            resultados.push(Izq[i])
            i++;
        } else {resultados.push(Der[j])}
        j++
    }
      console.log(resultados);
    
   
}
AlgMS(A1,A2);