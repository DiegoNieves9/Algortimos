let numeros = [3,2,1,5,4,8,-2];
	
	for(i=0;i<numeros.length;i++){
		min = i;
		for(j=i+1;j<numeros.length;j++){
			if(numeros[j]<numeros[min]){
				min=j;
			}
		}
		aux = numeros[i];
		numeros[i] = numeros[min];
		numeros[min] = aux;
		
	}
	
	for(i=0;i<numeros.length;i++){
		console.log(numeros[i])
	}
