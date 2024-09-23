document.addEventListener('click', function(event){
    event.preventDefault();
   
    



    document.getElementById("historyBtn").addEventListener("click", function (event) {

        toggleSections('history', 'donation');
        console.log("history clicked")
    });



})