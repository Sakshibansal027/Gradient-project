let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let copydiv=document.querySelector(".text");
let value1="#051937";
let value2="#008793";
const handlebutton1 = () => {
    let hexavalue = "0123456789abcdef";
    value1 = "#";
    for (let i = 0; i < 6; i++) {
        let myhex = hexavalue[Math.floor((Math.random() * 16))]
        value1 = value1 + myhex;
    }

   document.body.style.backgroundImage =  `linear-gradient(
        to right ,${value1},${value2})`;
        copydiv.innerHTML=`background-image:linear-gradient(
        to right ,${value1},${value2})`;
        btn1.innerHTML=value1;
}
const handlebutton2 = () => {
    let hexavalue = "0123456789abcdef";
    value2 = "#";
    for (let i = 0; i < 6; i++) {
        let myhex = hexavalue[Math.floor((Math.random() * 16))]

        value2 = value2 + myhex;
    }
     document.body.style.backgroundImage =  `linear-gradient(
        to right ,${value1},${value2})`;
        copydiv.innerHTML=`background-image:linear-gradient(
        to right ,${value1},${value2})`;
        btn2.innerHTML=value1;
}



btn1.addEventListener("click", handlebutton1);
btn2.addEventListener("click", handlebutton2);
copydiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copydiv.innerText)
})
