//1 return array with length of 2([fist is sum of first two],
//                              [secend is multiplication of rest])
function processingValues(first,secend,...rest){
    const sumOfTwo = first+secend;
    const restMult = rest.reduce((acc, el)=> acc * el, 1)
    return [sumOfTwo, restMult]
};

//2 destructuring
const user = {
    banks:[
        {adress:{city:"Batumi"}},
        {adress:{city:"Xashuri"}},
        {adress:{city:"Tbilisi"}}]
};

function paramDestr({banks:[,,{adress:{city}={}}={}]}){
    return city
};



//3 object copy func
const obj = {
    company:'apple',
    product:"phones",
    models:{
        normal:{
            model1:"iPhone 12",
            model2:"iPhone 13",
            model3:"iPhone 14",
        },
        pro:{
            model1:"iPhone 12 pro",
            model2:"iPhone 13 pro",
            model3:"iPhone 14 pro",
        },
        proMax:{
            model1:"iPhone 12 pro max",
            model2:"iPhone 13 pro max",
            model3:"iPhone 14 pro max",
        }
    }
}

function objCopy(obj){
    const newObj = {};
    for(let key in obj){
        if(typeof obj[key] === "object"){
            if(Array.isArray(obj[key])){
                //array
                newObj[key] = obj[key].map((el)=>{objCopy(el)});
            }else{
                //object
                newObj[key] = objCopy(obj[key])
            }
        }else{
            newObj[key] = obj[key]
        }
    }
    return newObj
};

//================================================
const structCopy = structuredClone(obj);
//this deep copy works good (if theres no fucntions to copy)
//================================================



console.log(processingValues(2,4,4,5,7,8,9));
console.log(paramDestr(user));
console.log(objCopy(obj));