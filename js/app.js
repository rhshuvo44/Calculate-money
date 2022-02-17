// all input flid 
function inputFlid(inputid) {
    let inputText =document.getElementById(inputid).value;
    const input=parseFloat(inputText);
    // input clean 
    inputText.value = '';
    return input;
}
function textFlid(textid) {
    const textBalance = document.getElementById(textid);
    return textBalance;
}
// calculate income and expenses
document.getElementById('calculate').addEventListener('click',function(){
   const income = inputFlid('income');
   const food = inputFlid('food');
   const rent = inputFlid('rent');
   const clothes = inputFlid('clothes');

//    total-expenses
   const expenses = food+rent+clothes;
//    total balance 
   const result = income - expenses;

  textFlid('total-expensen').innerText= expenses;
  textFlid('total-balance').innerText= result;
})
//save money
document.getElementById('save-btn').addEventListener('click',function(){
   const save = inputFlid('save');
   const income = inputFlid('income');
    const balance= textFlid('total-balance').innerText;

   const saving = income *(save/100);
   const remainingAmount =balance-saving;
   textFlid('saving-amount').innerText=saving;
   textFlid('remaining-amount').innerText=remainingAmount;

   

})
