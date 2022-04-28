function twoSum(nums: number[], target: number): number[] {
    let remain:number = 0;
    let reslut:number[] = [];
    
    for(let a = 0; a < nums.length; a++){
        remain = target - nums[a];
        let numberIdx:number = nums.indexOf(remain,1);
        if(numberIdx > 0 && numberIdx !== a){
            reslut.push(a);
            reslut.push(numberIdx);
            return reslut;
        }    
    }
};