window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navScroll").style.display = "block";    
  } else {
    document.getElementById("navScroll").style.display = "none";    
  }
}