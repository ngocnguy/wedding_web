
$(window).on("load", function(){
    // home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    
    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLen -1){
            slideIndex = 0;
        }else{
            slideIndex++;
        }
        setTimeout(slideShow, 5000);
        }
    slideShow();

    // gallery popup
    const wHeight = $(window).height();
    $(".gallery-popup img").css("max-height",wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;

    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSLideSHow();
    })

    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSLideSHow(); 
        })
    })

    $(".gp-controls .prev").click(function(){
        if(itemIndex == 0){
            itemIndex = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSLideSHow(); 
        })
    })

    function gpSLideSHow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
        $(".gp-counter").text((itemIndex + 1) + "/" + totalGalleryItems);
    }

    // close gallery popup
    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open");
    })
    // hide gallery popup when clicked outside of gp-container
    $(".gallery-popup").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup").removeClass("open");
        }
    })
})
// window onload thực hiện code trong fuction 
//khi mà css đã chạy xong