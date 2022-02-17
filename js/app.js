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
