$(function () {

    This(".Welcome");
    That(".Cover-Note")

   function This(type){
        var $The = $(type)
        $($The).on("click","a", function(e) {
            e.preventDefault();
            window.location.href = 'cv.html';
            

        });
   }

   function That(type){
    var $The = $(type)
    $($The).on("click","a", function(e) {
        e.preventDefault();
        window.location.href = 'CN.html';
        

    });
    }



   
});


