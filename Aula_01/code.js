function se(n){
    if(n<10){
        console.log("Você é criança")
    }
    else if(n>10 && n<20){
        console.log("Você é adolecente")
    }
    else if(n>20 || n<40){ 
        console.log("Você é adulto")
    }
    else if(n == 70){
        console.log("Você é idoso")
    }
    else{
        console.log("Não atende a condição")
    }   
}
se(74)
//Para
function para(n){
    for(let i=0;i<n;i++){
        if(n<10){
            console.log("Você é criança")
        }
        else{
            console.log("Você é adulto")
        }
    }
}

//Enquanto
function enquanto(n){
    let i=0
    while(i<n){
        i++
        if(n<10){
            console.log("Você é criança")
        }
        else{
            console.log("Você é adulto")
        }
    }
}
enquanto(13)

function facaenq(n){
    let i=0
    do{
        i++
        if(n<10){
            console.log("Você é criança")
            break
        }
        else{
            console.log("Você é adulto")
        }
    }

function caso(n){
    switch(n){
        case 1:console.log("Você escolheu 1")
        break
        case 2:console.log("Você ecolheu 2")
        break
        case 3:console.log("Você ecolheu 3")
        break
        case 4:console.log("Você ecolheu 4")
    }
}
caso(2)