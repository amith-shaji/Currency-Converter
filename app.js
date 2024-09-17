let dropdowns=document.querySelectorAll(".select-container select");
let amount=document.querySelector("input");
let btn=document.querySelector(".convert");
let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select");
let msg=document.querySelector(".msg");
const BASE_URL=" https://api.exchangerate-api.com/v4/latest";
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
        if(select.name=="from" && newOption.value=="USD"){
             newOption.selected="selected";
        }
        else if(select.name=="to" && newOption.value=="INR"){
            newOption.selected="selected";
        }
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}
const exchangeRate = async ()=>{
        let amtVal=amount.value;
        if(amtVal==="" && amtVal<1){
            amount.value="1";
        }
        const URL=`${BASE_URL}/${fromCurr.value}`;
         let response=await fetch(URL);
         let data=await response.json();
         let rate=data["rates"][toCurr.value];
         let finalAmount=amtVal*rate;
         msg.innerText=`${amtVal}${fromCurr.value}=${finalAmount}${toCurr.value}`;

}
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    exchangeRate();
})
const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let url=`https://flagsapi.com/${countryCode}/flat/32.png`;
    let img=element.parentElement.querySelector("img");
    img.src=url;
}