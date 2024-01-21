interface NumberHash {
    [key: number]: boolean; // Assuming the values are boolean, replace with the actual type if needed
}

function containsDuplicate(nums: number[]):boolean {
    var hashMap:NumberHash = {};
    let containsDuplicate = false;
    for (let i = 0; i < nums.length; i++){
        if (hashMap[nums[i]]){
            containsDuplicate = true;
        }
        hashMap[nums[i]] = true;
    }
    return containsDuplicate;
}

console.log(containsDuplicate([1,2,3,4,2,8]));// return true
console.log(containsDuplicate([1,2,4,8,7,5]));// return false