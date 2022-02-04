var maxSubArray = function(nums) {
  let count =0
  let total = 0
  let highest = nums[0]
  let length = nums.length;
    while (count<length) {
        total += nums[count]
        if(total > highest) highest = total
                
        if(total > 0) count += 1
            
        else {
            total = 0
            count +=1;
            }
            
    }
        return highest
};
