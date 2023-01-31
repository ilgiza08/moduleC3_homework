obj = {a: 1, b:2}

//1
function getObj(obj){
    for(let i in obj){
        if(obj.hasOwnProperty(i)) {
            console.log(i)
        }
    }
}
getObj(obj)

//2
function func(str, obj){
    return str in obj
}

console.log(func('q', obj));

//3
function empty(){
    return Object.create(null)
}