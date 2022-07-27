


// ------------ jQuery Area -------------
$(document).ready(function(){

    // start navbar
    $(".mobileMenus").click(function(){
        $(this).toggleClass("crossXs");
    });
    // end navbar

    // start banner

    let getScrollTop; // declared in global scope cuz wanna be reuseable
    $(window).scroll(function(){
        getScrollTop = $(this).scrollTop();
        if(getScrollTop >= 200){
            $(".forStaffs").addClass("staffAni");
            $(".forAbouts").addClass("aboutAni");
        }else{
            $(".forStaffs").removeClass("staffAni");
            $(".forAbouts").removeClass("aboutAni");
        }

        //for navbar
        if(getScrollTop >= 400){
            $(".navbars").css({
                "background-color" : "rgba(0,0,0,.8)",
                "padding" : "18px 0"
            });
        }else{
            $(".navbars").css({
                'background': `linear-gradient(
                    220deg,
                    rgba(0,0,0,0),consol    
                    rgba(0,0,0,1)
                )`,
                "padding" : "30px 0"
            });
        }
        
        // for chef ani
        if(getScrollTop >= 1000){
            $(".cheifCards").addClass("cheifCardsAni");
            $(".cheifTitles").addClass("cheifTextAni");
            $(".cheifPara").addClass("cheifTextAniDe1");
            $(".cheifPrize").addClass("cheifTextAniDe2");
        }else{
            $(".cheifCards").removeClass("cheifCardsAni");
            $(".cheifTitles").removeClass("cheifTextAni");
            $(".cheifPara").removeClass("cheifTextAniDe1");
            $(".cheifPrize").removeClass("cheifTextAniDe2");
        }

        //for arrow up
        if(getScrollTop >= 400){
            $(".arrowUp").show("drop",{
                direction : 'right'
            },1000);
        }else{
           $(".arrowUp").hide("drop",{
                direction : "right"
           },500);
        }

    });

    // end banner

    // start menu

    $(".menuLists").click(function(){

        // start tabMenu

        const getWidth = Math.floor($(this).innerWidth()) + "px";
        // console.log(getWidth)
        $(".slider").css("width",`${getWidth}`);

        const getPosition = Math.floor($(this).position().left) + "px";
        $(".slider").css({
            "transform" : `translateX(${getPosition})`,
            "transition" : "all .5s"
        });

        // end tabMenu

        $(this).addClass("activeItems").siblings().removeClass("activeItems");

        const getAttrVal = $(this).attr("data-filter");

        if(getAttrVal === "all"){
            $(".all").show("drop",1000);
        }else{
            $(".all").hide();
            $(".all").not("." + getAttrVal).hide("drop",200);
            $(".all").filter("." + getAttrVal).show("drop",800);

        }

    });

    // end menu

    //start blog

    const Days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Set","Octo","Nov","Dec"];

    const getDate = $(".getDate");
    const currentDate = new Date().getDate();
    const currentDay = new Date().getDay(); // return Index
    const currentMth = new Date().getMonth(); // return Index
    const currentYear = new Date().getUTCFullYear();

    getDate.text(`${Days[currentDay]} , ${Months[currentMth]} ${currentDate} ${currentYear}`);
    //end blog

    // start footer

    const getYear = $("#getYear");
   const getCurrentYear = new Date().getUTCFullYear();
   getYear.text(getCurrentYear);

    //end footer

    // start modal pw

    $(".locks").click(function(){

        let getPwAttr = $("#pw").attr("type");
        if(getPwAttr === "password"){
            getPwAttr = "email";
            $(".locks").html(`<i class="fas fa-lock-open"></i>  Hide Password ?`);
        }else{
            getPwAttr = "password";
            $(".locks").html(`<i class="fas fa-lock"></i>  Show Password ?`);
        }
    
        $("#pw").attr("type",getPwAttr);
    });

    // end modal pw

});