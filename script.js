const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
    const depositAmountString = document.getElementById("deposit-amount").value;
    const depositAmount = parseFloat(depositAmountString);
    const depositDisplayString = document.getElementById("deposit-display").innerText;
    const depositDisplay = parseFloat(depositDisplayString);
    const totalDeposit = depositAmount + depositDisplay;
    document.getElementById("deposit-display").innerText = totalDeposit;
    document.getElementById("deposit-amount").value = "";
    const balanceDisplayString = document.getElementById("balance-display").innerText;
    const balanceDisplay = parseFloat(balanceDisplayString);
    document.getElementById("balance-display").innerText = balanceDisplay + depositAmount;
})

const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
    const withdrawAmountString = document.getElementById("withdraw-amount").value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    const withdrawDisplayString = document.getElementById("withdraw-display").innerText;
    const withdrawDisplay = parseFloat(withdrawDisplayString);
    const totalWithdraw = withdrawAmount + withdrawDisplay;
    document.getElementById("withdraw-display").innerText = totalWithdraw;
    const balanceDisplayString = document.getElementById("balance-display").innerText;
    const balanceDisplay = parseFloat(balanceDisplayString);
    document.getElementById("balance-display").innerText = balanceDisplay - withdrawAmount;
})