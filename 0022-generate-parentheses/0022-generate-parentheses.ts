function generateParenthesis(n: number): string[] {
    const result:string[] = [];
    
    const dp = (left, right, str) => {
        if(str.length === n*2){
            result.push(str);
            return;
        }
        
        if(left<n) dp(left+1, right, str+"(");
        if(right<n && left>right) dp(left, right+1, str+")");
    }
    
    dp(0, 0, "");
    return result;
};