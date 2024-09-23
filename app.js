document.addEventListener("DOMContentLoaded",
    function(event){
    
    event.preventDefault();
        
    function toggleSections(showSection, hideSection) {
        const active = document.getElementById(showSection);
        const deActive = document.getElementById(hideSection);

        active.classList.remove('hidden');
        deActive.classList.add('hidden');



    }

    function changeButtonStyles(activeButtonId, inactiveButtonId) {
        const activeButton = document.getElementById(activeButtonId);
        const inactiveButton = document.getElementById(inactiveButtonId);

        activeButton.classList.add('bg-primaryBg', 'text-black'); // Active button styles
        activeButton.classList.remove('bg-white', 'text-black'); // Remove inactive styles

        inactiveButton.classList.add('bg-white', 'text-black'); // Inactive button styles
        inactiveButton.classList.remove('bg-primaryBg', 'text-black'); // Remove active styles
    }

    // donation btn
    document.getElementById("donationBtn").addEventListener("click", function (event) {

        event.preventDefault();
        toggleSections('donation', 'history');
        changeButtonStyles("donationBtn", "historyBtn")
        console.log("clicked")
    });

    // History btn
    document.getElementById("historyBtn").addEventListener("click", function (event) {
        event.preventDefault();
        toggleSections('history', 'donation');
        changeButtonStyles( "historyBtn", "donationBtn")
        console.log("history clicked")
    });

    // Donation logic

        function handleDonation(donationInputId, usersTotalId, targetTotalId) {
            const usersTotalIk = document.getElementById(usersTotalId);
            const targetTotalIk = document.getElementById(targetTotalId);

            // current values 
            let usersTotalIkNum = parseFloat(usersTotalIk.innerText.split(" ")[0]);
            let targetTotalIkNum = parseFloat(targetTotalIk.innerText.split(" ")[0]);

            // get donation Input value
            const donationInputValue = document.getElementById(donationInputId).value;
            const donationTk = parseFloat(donationInputValue);

            // input validation
            if (isNaN(donationTk) || donationTk <= 0 || usersTotalIkNum <= 0) {
                alert("Invalid donation amount");
                return;
            }

            // update users total money
            const usersTotalMoney = usersTotalIkNum - donationTk;
            const targetTotalBalance = targetTotalIkNum + donationTk;

            // update on dom
            usersTotalIk.innerText = `${usersTotalMoney} BDT`;
            targetTotalIk.innerText = `${targetTotalBalance} BDT`;

        }

        document.getElementById('noakhaliDonate').addEventListener('click', function(event){
            event.preventDefault();
            
            handleDonation('donate-noakhali', 'usersTotalTk', 'noakhali')
        });
        document.getElementById('donateFeni').addEventListener('click', function(event){
            event.preventDefault();
            handleDonation('donate-feni', 'usersTotalTk', 'feni')
        });

        document.getElementById('donateQuota').addEventListener('click', function(event){
            event.preventDefault();
            handleDonation('donate-quota', 'usersTotalTk', 'quota')
        });


        // history elements


        
    });




