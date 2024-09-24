document.addEventListener("DOMContentLoaded",
    function (event) {

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

            activeButton.classList.add('bg-primaryBg'); // Active button styles
            activeButton.classList.remove('bg-white'); // Remove inactive styles

            inactiveButton.classList.add('bg-white'); // Inactive button styles
            inactiveButton.classList.remove('bg-primaryBg'); // Remove active styles
        }

        // donation btn
        document.getElementById("donationBtn").addEventListener("click", function (event) {

            event.preventDefault();
            toggleSections('donation', 'history');
            changeButtonStyles("donationBtn", "historyBtn");

        });

        // History btn
        document.getElementById("historyBtn").addEventListener("click", function (event) {
            event.preventDefault();
            toggleSections('history', 'donation');
            changeButtonStyles("historyBtn", "donationBtn")

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

        // history



        function addElement(donateContent, donationInputValue) {

            const donationTk = parseFloat(donationInputValue);

            // validation
            if (isNaN(donationTk) || donationTk <= 0) {
                alert("Invalid donation amount");
                return;
            }

            // get the current date
            const currentDate = new Date();



            // create a new div element
            const newDiv = document.createElement("div");


            // and give it some content

            newDiv.classList.add("p-5", "m-2", "border", "rounded-xl","w-full", "gap-3");

            // add the content sections
            const newContent = `
            
            <h3 class = "text-xl font-semibold m-2">${donationTk} BDT donated ${donateContent}</h3>
            <p class = " m-2 text-sm text-gray-500">Date: ${currentDate}</p>
            
            `;

            newDiv.innerHTML = newContent;

            // Append the new div to the history section

            const historySection = document.getElementById("div1");
            if (!historySection) {
                console.error("No history section found");
                return;
            }
            historySection.classList.remove('hidden');
            historySection.appendChild(newDiv);
        }




        // popup
        function popSection() {
            document.getElementById('popUp').classList.remove('hidden');
        }

        document.getElementById('close').addEventListener('click', function () {
            document.getElementById('popUp').classList.add('hidden');
        });








        document.getElementById('noakhaliDonate').addEventListener('click', function (event) {
            event.preventDefault();
            const donationInputValue = document.getElementById('donate-noakhali').value;
            const donateContentFlood = "for flood relief at Noakhali, Bangladesh";

            handleDonation('donate-noakhali', 'usersTotalTk', 'noakhali');

            popSection();
            addElement(donateContentFlood, donationInputValue)





        });
        document.getElementById('donateFeni').addEventListener('click', function (event) {
            event.preventDefault();
            const donationInputValue = document.getElementById('donate-feni').value;
            const donateContentFamine = "for famine-2024 at Feni, Bangladesh";
            handleDonation('donate-feni', 'usersTotalTk', 'feni');

            popSection();
            addElement(donateContentFamine, donationInputValue);


        });

        document.getElementById('donateQuota').addEventListener('click', function (event) {
            event.preventDefault();

            handleDonation('donate-quota', 'usersTotalTk', 'quota');


            popSection();
            const donationInputValue = document.getElementById('donate-quota').value;
            const donateContentQuota = "aid for the Injured in quota Movement, Bangladesh";
            addElement(donateContentQuota, donationInputValue);
        });


        // history elements



    });




