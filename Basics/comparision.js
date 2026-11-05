console.assertlog("2" > 1);

//avoid these type of comparision and with undefined also 
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //here null was converted to 0 then comparision was done 

console.log("2" === 2);