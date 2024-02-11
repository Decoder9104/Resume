
$(function () {
    function directtopage(page){
        return function (e){ 
            e.preventDefault();
            e.stopPropagation();
            window.location.href = page;
        }
   }

    $(".CV a").click(directtopage('cv.html'));
    $(".CN a").click(directtopage('CN.html'));
});

 