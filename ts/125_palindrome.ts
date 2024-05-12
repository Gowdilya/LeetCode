function isPalindrome(s: string): boolean {
    if(s.length === 0){
        return false;
    }

    if(s.length === 1){
        return true;
    }

    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let firstPointer = 0;
    let lastPointer = s.length-1;

    while  (firstPointer  < lastPointer) {
       if(s[firstPointer] !== s[lastPointer]){
        return false;
       }
       firstPointer += 1;
       lastPointer -= 1;
    }
    return true;
};



var s = "A man, a plan, a canal: Panama";
var q= " ";
console.log(isPalindrome(s));
console.log(isPalindrome(q));



