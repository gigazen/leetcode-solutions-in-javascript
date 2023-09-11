/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const res = new Set();
  for (let email of emails) {
    if (email.includes('+')) {
      let pIdx = email.indexOf('+')
      let aIdx = email.indexOf('@')
      email = email.substr(0, pIdx) + email.substr(aIdx)
    }
    email = email.split('@');
    email[0].includes('.') && 
      (email[0] = email[0].replace(/[.]/g, ''))
    email = email.join('@')
    res.add(email)
  }
  return res.size
};