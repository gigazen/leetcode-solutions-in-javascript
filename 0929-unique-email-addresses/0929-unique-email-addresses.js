/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let uniqueEmails = new Set();

  for (let email of emails) {
    let arrOfEmailParts = email.split("@");

    let cleanedLocal = arrOfEmailParts[0].split("+")[0].split(".").join("");

    let currentEmail = `${cleanedLocal}@${arrOfEmailParts[1]}`;
    uniqueEmails.add(currentEmail);
  }

  return uniqueEmails.size;
};