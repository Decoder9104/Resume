$(function () {
    backto(".Back")

    function backto(type){
        var $this = $(type)
        $($this).on("click","a", function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }
})