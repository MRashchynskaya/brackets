module.exports = function check(str, bracketsConfig) {
  let check_result = false;
  if (str.length % 2 === 0) {
    let check_stack = [];
    for (let i in str) {
      for (let j in bracketsConfig) {
        if (str[i] === bracketsConfig[j][0]) {
          if (bracketsConfig[j][0] === bracketsConfig[j][1] && str[i] === check_stack[check_stack.length - 1]) {
            check_stack.pop();
            break;
          }
          check_stack.push(str[i]);
          break;
        }
        if (str[i] === bracketsConfig[j][1] && check_stack[check_stack.length - 1] === bracketsConfig[j][0]) {
          check_stack.pop();
          break;
        }
      }
    }
    check_result = check_stack.length === 0;
  }
  return check_result;
}
