/*JSnack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array */


  
let numeriDisp = [];
  for( let i =0; i < 6; i++){
    
    const numUtente = prompt("dammi un numero");

    if(!(numUtente % 2 ===0)){
      numeriDisp.push(numUtente)
    }
    console.log(numeriDisp);
  }