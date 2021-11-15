var verifyPostorder = function(postorder) {
  if(postorder.length === 0) return true;
  return dfs(0, postorder.length-1);

  function dfs(start ,end) {
    let i;
    let j;
    if(start >= end) return true;
   
      i = start;
      while(postorder[i] <= postorder[end] ) i++;
      j = i;
      while(postorder[j] >= postorder[end] ) j++;
      return j === end && dfs(start, i-1) & dfs(i,end-1)
    
  }

};