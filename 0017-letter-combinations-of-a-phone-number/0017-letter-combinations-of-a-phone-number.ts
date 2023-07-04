function letterCombinations(digits: string): string[] {
    if(digits.length === 0){
        return [];
    }
    
    const result:string[] = [];
    const digitArr = digits.split('');
    const dfs = (index:number, str :string) => {
        if(index === digitArr.length){
            return result.push(str);
        }
        const letters = phoneNumber[digitArr[index]];
        letters.split('').forEach((v) => dfs(index+1, str+v))
    }
    
    dfs (0, '');
    
    return result;
};

const phoneNumber = {
    2 : 'abc',
    3 : 'def',
    4 : 'ghi',
    5 : 'jkl',
    6 : 'mno',
    7 : 'pqrs',
    8 : 'tuv',
    9 : 'wxyz'
}