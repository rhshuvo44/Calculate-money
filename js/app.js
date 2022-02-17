// all input flid 
function getInputValue(element) {
    let inputText =document.getElementById(element).value;
    const input=parseFloat(inputText);
    return input;
}
// text amount 
function getTextValue(element) {
    const textBalance = document.getElementById(element);
    return textBalance;
}
// calculate income and expenses
document.getElementById('calculate').addEventListener('click',function(){
   const income = getInputValue('income');
   const food = getInputValue('food');
   const rent = getInputValue('rent');
   const clothes = getInputValue('clothes');
//    erro input
   if (isNaN(income) || isNaN(food) ||isNaN(rent) ||isNaN(clothes)) {
    getTextValue('erro').style.display='block';
    getTextValue('erro1').style.display='none';
    getTextValue('erro2').style.display='none';
    getTextValue('erro3').style.display='none';
    getTextValue('erro4').style.display='none';
    // erro positive number 
   }else if(income <0 || food<0 ||rent< 0 ||clothes < 0){
    getTextValue('erro').style.display='none';
    getTextValue('erro1').style.display='block';
    getTextValue('erro2').style.display='none';
    getTextValue('erro3').style.display='none';
    getTextValue('erro4').style.display='none';
   }
   else{
    getTextValue('erro').style.display='none';
    getTextValue('erro1').style.display='none';

//    total-expenses
   const expenses = food+rent+clothes;
   //    total balance 
      const result = income - expenses;
    //   erro 
    if (income < expenses) {
    getTextValue('erro2').style.display='block';
        
    }else{
    getTextValue('erro2').style.display='none';

      getTextValue('total-expensen').innerText= expenses;
      getTextValue('total-balance').innerText= result;
   }}

})
//save money
document.getElementById('save-btn').addEventListener('click',function(){
   const save = getInputValue('save');
   const income = getInputValue('income');
    const balance= getTextValue('total-balance').innerText;
        
   const saving = income *(save/100);
   const remainingAmount =balance-saving;
    // erro 
    if(save <0){
    getTextValue('erro3').style.display='block';
    getTextValue('erro4').style.display='none';

    }
   else if (saving > balance) {
    getTextValue('erro4').style.display='block';
    getTextValue('erro3').style.display='none';

}else{
    getTextValue('erro3').style.display='none';
    getTextValue('erro4').style.display='none';

   getTextValue('saving-amount').innerText=saving;
   getTextValue('remaining-amount').innerText=remainingAmount;
}
})
