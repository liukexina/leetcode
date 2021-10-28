var isSubStructure = function(A,B) {
  if(A === null || B === null) return false;
  return recur(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B)
};

function recur(A,B) {
  if(B === null) return true;
  if(A === null) return false;
  if(A.val !== B.val) return false;
  return recur(A.left, B.left) && recur(A.right, B.right)
}