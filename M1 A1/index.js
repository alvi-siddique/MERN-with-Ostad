function multiplicationTable(num){
    let a = parseInt(num)
    if(isNaN(a)){
        console.log("Enter a valid number")
    }
    else{
        let p
        for(i=0;i<=10;i++){
        p=i*a
        // console.log(a+" x "+i+" = "+p)
        console.log(`${a} x ${i} = ${p}`)
    }
    }
}
multiplicationTable(9)