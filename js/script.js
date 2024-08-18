 
 
//  Backtotop
 // Get the button element
 const backToTopButton = document.getElementById('back-to-top');
 // Show or hide the button based on scroll position
 window.onscroll = function() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         backToTopButton.style.display = 'block';
     } else {
         backToTopButton.style.display = 'none';
     }
 };
 // Scroll to the top when the button is clicked
 backToTopButton.onclick = function(e) {
     e.preventDefault();
     window.scrollTo({ top: 0, behavior: 'smooth' });
 };
 //  Backtotop