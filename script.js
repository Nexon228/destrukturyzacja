console.log("----");

var x=[1,2,3,4,5,6];

var [jeden,dwa,trzy,czetry,piec,szesc]=x;

console.log(jeden, trzy, piec)

console.log("----");

var y=['dom','samochód','drzewo']

y=['skuter', 'statek'];

console.log(y);

console.log("----");

var z=1,a=2;

[z,a]=[a,z];

console.log(z,a)

console.log("----");

var b={
    wiek:14,
    praca:{
        pierwsza:'kelner',
        druga:'ux design',
    },
    zarobki:1000
};

var {wiek,praca:{druga},zarobki}=b;

console.log(wiek,druga,zarobki);

console.log("----");

var {wiek:wzrost, zarobki:wyplata}=b;

console.log(wzrost,wyplata);

console.log("----");

var {wiek:ilosc_lat,...rest}=b;

console.log(ilosc_lat);
console.log(rest);