function solution(arr) {
    console.log('Sum = ' + arr.reduce((a,b) => a+b))
    console.log('Min = ' + arr.reduce((a,b)=> Math.min(a,b)))
    
}
solution([1,2,3,4])