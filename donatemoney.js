

// const usersTotalTk = document.getElementById("usersTotalTk");
// const noakhaliTk = document.getElementById("noakhali");

// const usersTotalTkNum = 5500;
// usersTotalTk.innerText = `${usersTotalTkNum} BDT`;


// const noakhaliInitialTkNum = 0;
// noakhaliTk.innerText = `${noakhaliInitialTkNum} BDT`







document.getElementById('noakhaliDonate').addEventListener('click', function (event) {



    event.preventDefault();


    const usersTotalTk = document.getElementById("usersTotalTk");
    const noakhaliTk = document.getElementById("noakhali");

    const usersTotalTkNum = 5500;
    usersTotalTk.innerText = `${usersTotalTkNum} BDT`;


    const noakhaliInitialTkNum = 0;
    noakhaliTk.innerText = `${noakhaliInitialTkNum} BDT`



    const donateNoakhali = document.getElementById("donate-noakhali").value;
    console.log(donateNoakhali);

    const donateNoakhaliTk = parseFloat(donateNoakhali);
    const usersTotalMoney = usersTotalTkNum - donateNoakhaliTk;

    console.log(`noakhaliTk:${noakhaliInitialTkNum}`)

    const noakhaliTotalBalance = noakhaliInitialTkNum + donateNoakhaliTk;


    document.getElementById("usersTotalTk").innerText = `${usersTotalMoney} BDT`;
    document.getElementById("noakhali").innerText = `${noakhaliTotalBalance} BDT`


});