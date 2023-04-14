function isPalindrome(head) {
  function recursivelyCheck(currentNode) {
    if (currentNode != null) {
      if (!recursivelyCheck(currentNode.next)) {
        return false;
      }
      if (currentNode.val != frontPointer.val) {
        return false;
      }
      frontPointer = frontPointer.next;
    }
    return true;
  }

  let frontPointer;
  frontPointer = head;
  return recursivelyCheck(head);
}
