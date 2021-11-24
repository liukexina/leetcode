function isNumber(s) {
  let states = [
      { ' ': 0, 's': 1, 'd': 2, '.': 4 }, 
      { 'd': 2, '.': 4 } ,                
      { 'd': 2, '.': 3, 'e': 5, ' ': 8 }, 
      { 'd': 3, 'e': 5, ' ': 8 },         
      { 'd': 3 },                        
      { 's': 6, 'd': 7 },                 
      { 'd': 7 },                         
      { 'd': 7, ' ': 8 },                 
      { ' ': 8 }                          
  ]
  let p = 0;
  let t;
  for(let c of s.split('')) {
      if(c >= '0' && c <= '9') t = 'd';
      else if(c == '+' || c == '-') t = 's';
      else if(c == 'e' || c == 'E') t = 'e';
      else if(c == '.' || c == ' ') t = c;
      else t = '?';
      if(!states[p].hasOwnProperty(t)) return false;
      p = states[p][t];
  }
  return p == 2 || p == 3 || p == 7 || p == 8;
}