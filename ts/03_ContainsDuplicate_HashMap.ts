
function containsDuplicate(nums: number[]):boolean {
    var hashMap = new Map<number, boolean>;
    let containsDuplicate = false;
    for (let i = 0; i < nums.length; i++){
        if (hashMap.has(nums[i])){
            containsDuplicate = true;
        }
        hashMap.set(nums[i],true);
    }
    return containsDuplicate;
}

console.log(containsDuplicate([1,2,3,4,2,8]));// return true
console.log(containsDuplicate([1,2,4,8,7,5]));// return false