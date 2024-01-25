$(function () {
   function directtopage(page){
        return function (e){ 
            e.preventDefault();
            window.location.href = page;
        }
   }

    $(".c-v").click(directtopage('cv.html'));
    $(".cover-note").click(directtopage('CN.html'));
});


