$(function () {
    function directtopage(page){
         return function (e){ 
             e.preventDefault();
             window.location.href = page;
         }
    }
 
     $(".CV").click(directtopage('cv.html'));
     $(".CN").click(directtopage('CN.html'));
 });


