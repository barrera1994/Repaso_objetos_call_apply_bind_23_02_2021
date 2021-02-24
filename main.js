//Crear una funcion que revisa x cantidad de numeros en viados en this y mostrar 
//el mayor de ellos,
//si los numeros ingresados en this, es mayor o igual a 5 
//realizar todas las operaciones matematicas basicas
// Suma, resta, multiplicacion, division

const saludar = function(p1, p2){
    let cadena = `Hola ${this.name} como estas te saluda ${this.maquina} ${this.mensaje} \n`;
    cadena += `Hola ${p1} como estas te saluda ${p2}`;
    console.log(cadena);
}
const data = new Object ({
    name : "Miguel",
    maquina : "Cortana",
    mensaje : ":V"
});
// saludar.call(data, "Adrian", "Siri");

// const arg = ["Adrian", "Siri"];
// saludar.apply(data, arg);

// const mostrar = saludar.bind(data);

// mostrar("Adrian", "Siri");
// mostrar("Diana", "Ok Google");

const mayor = function(){
    return Math.max(this.num1,this.num2,this.num3,this.num4,this.num5,this.num6);
}

const operacion = function(metodo,num){
    
    let result=0;
    if(metodo=="suma"){
        for(let i of num) result+=i;
    }else if (metodo=="restar"){
        for(let i of num){
            if(result==0){
                result=i;
            }else{
                result-=i;
            }
        } 
    }else if(metodo=="multiplicar"){
        result=1;
        for(let i of num) result*=i;
    }else if(metodo=="dividir"){
        let dig =0;
        for(let i of num){
            dig++;
            result+=i
        };
        result=result/dig;
    }
    return result;
}

const numeros={num1:1,num2:2,num3:3,num4:4,num5:5,num6:6};
const numerosV=[58,50,10,9];
let numMayor =mayor.call(numeros);
console.log("numero mayor es "+numMayor);

if(Object.keys(numeros).length>=5){
    const operaciones = operacion.bind(this);
    
    console.log("suma "+operaciones("suma", numerosV));
    console.log("restar "+operaciones("restar", numerosV));
    console.log("multiplicar "+operaciones("multiplicar", numerosV));
    console.log("dividir "+operaciones("dividir", numerosV));
}