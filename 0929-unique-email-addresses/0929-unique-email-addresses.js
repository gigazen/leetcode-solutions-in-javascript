/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set  = new Set();
    let result = 0
    for(let i of emails){
        let arr = i.split("@");
        let localName = '';
        for(let k of arr[0]){
            if(k == '+'){
                break;
            }else if(k === '.'){
                continue;
            }else{
                localName += k
            }
        }
        localName +='@' + arr[1];
        if(!set.has(localName)){
            set.add(localName)
            result++;
        }
    }
    return result
};