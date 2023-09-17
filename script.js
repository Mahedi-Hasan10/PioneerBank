// ===========================================deposit part ======================================>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById('deposit-btn').addEventListener('click',()=>{
    const depositField = parseFloat(document.getElementById('deposit-field').value);
    // deposit ====
    const depoTotal = document.getElementById('diposit-total');
    const depoTotalStr = depoTotal.innerText;
    const preDepositAmount = parseFloat(depoTotalStr);
    // console.log(preDepositAmount);
    if(depositField >= 500){
        const curAmount = preDepositAmount + depositField;
        depoTotal.innerText = curAmount;

        const prevBalance = document.getElementById('balance-total');
        const totalBalance = parseFloat(prevBalance.innerText);
        //total balance after deposit
        const newTotalBalance = totalBalance+depositField;
        // console.log(newTotalBalance);
        prevBalance.innerText = newTotalBalance;

        alert("$"+depositField +" deposit successfull !!");
    }
    else{
        alert("You can't deposit below $500")
    }
})

// console.log("Linked");


// ===========================================Withdraw part ========================================>>>>>>>>>>>>>>>>>>>>>>>>>>
document.getElementById('withdraw-btn').addEventListener('click',()=>{
    const withdrawField = parseFloat(document.getElementById('withdraw-field').value);
    // console.log(withdrawField);


    const totalWithdraw = document.getElementById('withdraw-total');
    const newTotalWithdraw = parseFloat(totalWithdraw.innerText);
    const prevBalance = document.getElementById('balance-total');
    const totalBalance = parseFloat(prevBalance.innerText);
    console.log(totalBalance);
    if(totalBalance >= withdrawField ){
        if(withdrawField >= 500){
            // console.log("Hobe");
            const curWithdrawAmount = newTotalWithdraw + withdrawField;
            totalWithdraw.innerText = curWithdrawAmount;
            // total balance after withdraw
            const newTotalBalance = totalBalance - withdrawField;
            prevBalance.innerText = newTotalBalance;
            alert("$"+withdrawField +" withdraw successfull !!");
        }
        else{
            alert("You can't withdraw below $500 ")
        }

    }
    else{
        alert("Insufficient Balance!!\nYou don't have enough balance to withdraw!!")
    }

})