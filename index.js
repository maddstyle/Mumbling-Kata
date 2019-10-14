function accum(s) {
	// your code
  let totalString = "";
  let characters = s.split("");

  for (let i = 0; i < characters.length; i++) {
  
    let characterSubString = "";
    
      for (let j = 0; j < (i + 1); j++){
      
        let letterToAdd = "";
        if(j === 0) {
          letterToAdd = characters[i].toUpperCase();
        } else {
          letterToAdd = characters[i].toLowerCase();
        }
        
        characterSubString += letterToAdd;
        
      }
      
      totalString += characterSubString + "-";
      
  }
    totalString = totalString.slice(0, -1);
    return totalString;
    
}
