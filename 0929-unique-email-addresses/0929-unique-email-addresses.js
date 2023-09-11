/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let uniqueEmails = new Set();

  for (let email of emails) {
    let arr = email.split("@");
    let currentEmail = "";

    for (let char of arr[0]) {
      if (char === "+") {
        break;
      } else if (char === ".") {
        continue;
      } else {
        currentEmail += char;
      }
    }

    currentEmail += "@" + arr[1];
    uniqueEmails.add(currentEmail);
  }

  return uniqueEmails.size;
};