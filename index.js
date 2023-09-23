const fs =require('fs');

/*fs.writeFile('documento.json','{"nombre": "Pedro", "apellido": "Arias", "edad" : 58, "salario" : 2500, "activo" : true}', (error)=>{
    if(error) throw error;
    console.log('Archivo creado');
});*/


fs.readFile('documento.json', 'utf-8', (error, documento)=>{
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(documento)
    }

});