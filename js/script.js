 
 
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



 // pre loader
 window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    document.getElementById('search_list').style.display = "none";
});
// preloader

//  Search ul li list
document.getElementById('search_list').style.display = "none";
document.getElementById('search_input').addEventListener('input', function(event) {
    document.getElementById('search_list').style.display = "block";
});
document.getElementById('search_input').addEventListener('input', function(event) {
    let search_input_value = event.target.value;
    let search_list = document.getElementById('search_list');

    if (search_input_value.trim() !== "") {
        search_list.style.display = 'block';
    } else {
        search_list.style.display = 'none';
    }
});

//  Search ul li list




 //======== tiny slider for testimonial-one
//  document.querySelector('tns-liveregion').textContent = '';
//  document.querySelector('current').textContent = '';
 tns({
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    gutter: 0,
    container: ".testimonial-one-active",
    center: true,
    nav: true,
    controls: false,
    speed: 200,
    controlsText: [
    //   '<i class="lni lni-arrow-left-circle"></i>',
    //   '<i class="lni lni-arrow-right-circle"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },

      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
 //======== tiny slider for testimonial-one