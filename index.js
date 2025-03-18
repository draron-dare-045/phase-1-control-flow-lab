function scuberGreetingForFeet(ride){
  // Write your code here!
  
  if(ride <= 400){
    return('This one is on me!')
  }
    if( ride <=2000 ){
    return('That will be twenty bucks.')
  }
   if( ride <=2500){
    return('I will gladly take your thirty bucks.') 
  }
  if(ride > 2500){
    return('No can do.')
  }
(scuberGreetingForFeet(199))
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ?  "Ok, sounds good." : "No go.";
}
(ternaryCheckCity('Nairobi'));

function switchOnCharmFromTip(charmFromTip){
// Write your code here!
  switch(charmFromTip){
    case "generous" :
      return charmFromTip = 'Thank you so much.'
    break;
    case "not as generous" :
      return charmFromTip = 'Thank you.'
    break;
    case "thanks for everything" :
     return charmFromTip = 'Bye.'
    break
  }
}
