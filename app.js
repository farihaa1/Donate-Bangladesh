


document.addEventListener("click", function (event) {


    event.preventDefault();
    function toggleSections(showSection, hideSection) {
        const active = document.getElementById(showSection);
        const deActive = document.getElementById(hideSection);

        active.classList.remove('hidden');
        deActive.classList.add('hidden');



    }

    // donation btn
    document.getElementById("donationBtn").addEventListener("click", function (event) {


        toggleSections('donation', 'history');
        console.log("clicked")
    });

    // History btn
    document.getElementById("historyBtn").addEventListener("click", function (event) {

        toggleSections('history', 'donation');
        console.log("history clicked")
    });

    // Donation logic
    document.addEventListener('click', function(){

        function handleDonation(donationInputId, usersTotalId, targetTotalId){
            const usersTotalIk = document.getElementById(usersTotalId);
            const targetTotalIk = document.getElementById(targetTotalId);

            // current values 
            let usersTotalIkNum = parseFloat(usersTotalIk.innerText.split(" ")[0]);
            let  targetTotalIkNum = parseFloat(targetTotalIk.innerText.split(" ")[0]);

            // get donation Input value
            const donationInputValue = document.getElementById(donationInputId).value;
            const donationTk = parseFloat(donationInputValue);

            // input validation

        }
    })
});





