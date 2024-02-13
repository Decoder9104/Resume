$(function(){
    var $opencontent = null;
    $(document).click(function(){
        if ($opencontent != null){
            closecontent();
        }
    })

    $("a[data-content]").each(function(){
        var $this = $(this),
            targetelement = $this.data("content"),
            $targetelement = $(targetelement);

            $this.click(function(e){
                e.preventDefault();
                e.stopPropagation();

                if ($opencontent == $targetelement){
                    closecontent();
                }
                else{
                    if ($opencontent != null){
                        closecontent();
                    }

                    $this.addClass("Active");
                    $opencontent = $targetelement;
                    $targetelement.addClass("open");
                    $targetelement.data("button", $this);
                }

                
            });
    });


    function closecontent(){
        $opencontent.removeClass("open");
        $opencontent.data("button").removeClass("Active")
        $opencontent = null;
    }

   
    

})

        


// code to find which a-tag is pressed. #
// if that a-tag is pressed -> if inner.html == C#
    // show hidden data for C#
    // and hide C# a-tag