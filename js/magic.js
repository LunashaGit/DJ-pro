$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
    animateDiv('.f');
  });
  
  function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    let h = 100;
    let w = 100;
    
    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
  }
  
  function animateDiv(myclass){
    let newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 3000,   function(){
      animateDiv(myclass);        
    });
    
  };