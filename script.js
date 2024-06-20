document.addEventListener('DOMContentLoaded', function() {
    const savingsInput = document.getElementById('savings');
    const sarcasticAmountDisplay = document.getElementById('sarcasticAmount');
    const poor1 = document.getElementById('poor1');
    const poor2 = document.getElementById('poor2');
    const poor3 = document.getElementById('poor3');
    const poor4 = document.getElementById('poor4');
    const rich = document.getElementById('rich');
    savingsInput.addEventListener('input', function() {
      let savingsAmount = parseFloat(savingsInput.value);
      if (isNaN(savingsAmount)) {
        sarcasticAmountDisplay.textContent = "--";
        hideAllGifs();
        return;
      }
  
      // Determine sarcastic text based on savings amount
      let sarcasticText = "";
      if (savingsAmount < 1000) {
        sarcasticText = "Saving like that, you`ll be able to retire just in time for the next ice age.";
        displayGif(poor1);
      } else if (savingsAmount >= 1000 && savingsAmount < 5000) {
        sarcasticText = "Saving money like a boss! At this rate, you`ll be able to afford a cup of coffee... next year hopefully.";
        displayGif(poor2);
      } else if (savingsAmount >= 5000 && savingsAmount < 10000){
        sarcasticText = "Impressive savings! You're almost halfway to a used car from the 90s";
        displayGif(poor3);
      } else if (savingsAmount >= 10000 && savingsAmount <= 50000){
        sarcasticText = "Impressive! You could almost afford a one-bedroom apartment in a really small town.";
        displayGif(poor4);
      } else{
        sarcasticText = "Wow? You must be the CEO of Cheapskates Anonymous";
        displayGif(rich);
      }
  
  
      sarcasticAmountDisplay.textContent = sarcasticText;
    });
    function displayGif(gifElement) {
        // Hide all GIFs first
        hideAllGifs();
        // Display the specified GIF
        gifElement.style.display = "block";
      }
    
      function hideAllGifs() {
        poor1.style.display = "none";
        poor2.style.display = "none";
        poor3.style.display = "none";
        poor4.style.display = "none";
        rich.style.display = "none";
      }
    
  });
  