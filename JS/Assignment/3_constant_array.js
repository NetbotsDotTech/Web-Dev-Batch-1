const arr = [1,2,3,4,5]
console.log(arr)
arr.push(6,7,8,9)
console.log(arr)


arr.push("Ali")
console.log(arr)

arr.shift(0)
console.log(arr)

arr.unshift("Zeeshan")
console.log(arr)

arr.pop()
console.log(arr)

Object.freeze(arr)
arr.push("ali")
console.log(arr)

