console.log ("this is type script");
//add sub mul division funs
const Add = () =>{

const a:number = 10;

const b:number= 20;

const add:number = a+b;

console.log (add );

}

Add();



//sub

const Sub =(a:number,b:number )=> a-b ;

const Subreturn :number= Sub(10 , 5);

console.log("sub = " , Subreturn);

//mult

const Mult = (a:number , b:number)=> a*b

const Multreturn = Mult(10, 40);

console.log ("multification is = " , Multreturn);

//division

const Divi = (a:number , b:number)=> a/b;

const Divreturn = Divi(40, 20);

console.log("dividion" , Divreturn);

//string function

const sent = ()=>{

const c:number = 10;

const d:string ="20 abcd";

const Addition:string = c+d;

console.log (Addition.toUpperCase());

console.log (Addition.length);

return Addition;

}

const returnAdd:string = sent();

console.log ("returnAdd" , returnAdd);