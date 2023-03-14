/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort(compare )
    let myArr=[]
    for (let i=0 ; i<nums.length;i++){
        if(nums[i]===target){
            myArr.push(i)
        }
    }
    return myArr
};
function compare (a,b){
    return a-b
}