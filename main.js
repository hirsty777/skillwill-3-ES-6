function processingValues(first,secend,...rest){
    let result = [];
    let curnt = 0;
    rest.forEach((elm,index)=>{
        if(index==0){
            curnt+=elm
        }else{
            curnt*=elm
        }
    });
    result.push(first+secend);
    result.push(curnt);
    return result
};



console.log(processingValues(1,2,4,5,7,8,9));