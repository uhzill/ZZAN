// [로딩화면]
$(window).load(function(){
    $(".loader").fadeOut();
});

$(document).ready(function(){

    // 스크롤 이벤트에 따른 요소 변화
    $(window).scroll(function () {

        // [ GNB 메뉴 ]
        // 페이지 상단으로 가면(ScrollTop이 100보다 커지면) 헤더가 내려옴
        if(document.querySelector("html").scrollTop > 100) {
            $("header").css("top", "-60px");
        } 
        // 스크롤 해서 내리면 (ScrollTop이 100보다 작아지면) 헤더가 위쪽으로 사라짐
        else {
            $("header").css("top", "0px");
        }
        window.onmousemove = function(e){
            // 화면 상단에 마우스를 가져다대면 (화면에서 마우스 위치 y값이 60 보다 작아지면) 헤더가 위쪽으로 사라짐
            if(e.clientY < 60) {
                $("header").css("top", "0px");
            } 
            // 화면에서 마우스 위치 y값이 60 보다 커지면 헤더가 내려옴
            else {
                $("header").css("top", "-60px");
            }
        }



        let overview = document.querySelector('#zzan_box');

        // 스크롤한 값만큼 원 모양이 커지도록 함
        let circleSize = window.scrollY;
        let text = document.querySelector('.zzan_text');
        let innerText = document.querySelector('.inner_text');

        overview.style.clipPath = "circle(" + circleSize + "px at center center)";
        text.style.left = 100 - circleSize / 5 + '%';
        innerText.style.left = 100 - circleSize / 5 + '%';

        // 현재 스크롤이 어디에 위치해 있는지 알 수 있음
        const scrollPosition = $(document).scrollTop();

        // 현재 몇번째 섹션에 있는지 알 수 있음
        const winHeight = $('section').height();





        // [ ZZAN! 텍스트 모션 ]
        // 스크롤한 값만큼 원 모양이 커지며 안에 있는 켁스트가 보여지는 모션
        // 두번째 섹션에 오면(스크롤 위치가 화면크기의 2배가 되면) 실행
        if(scrollPosition >= winHeight * 2) {
            $('#zzan_box').addClass('active');
            $('#overview').css('backgroundColor', '#ffd363');
        } else {
            $('#zzan_box').removeClass('active');
            $('#overview').css('backgroundColor', '#ff6a92');
        }



        // [ 말풍선 모션 ]
        if(scrollPosition >= winHeight * 3 - 400) {
            $('#q_img1').addClass('active');
            $('#question1').addClass('active');
            $('#answer1').addClass('active');

        } else {
            $('#q_img1').removeClass('active');
            $('#question1').removeClass('active');
            $('#answer1').removeClass('active');
        }

        if(scrollPosition >= winHeight * 3 - 100) {
            $('#q_img2').addClass('active');
            $('#question2').addClass('active');
            $('#answer2').addClass('active');

        } else {
            $('#q_img2').removeClass('active');
            $('#question2').removeClass('active');
            $('#answer2').removeClass('active');
        }


        // [ typo 모션 ]
        // 여섯번째 섹션에 오면(스크롤 위치가 화면크기의 6배-200이 되면) 실행
        if(scrollPosition >= winHeight * 6 - 200) {
            $('#typo1').addClass('active');
            $('#typo2').addClass('active');
        } else {
            $('#typo1').removeClass('active');
            $('#typo2').removeClass('active');
        }



        // [ 로고모션 ]
        // 일곱번째 섹션에 오면(스크롤 위치가 화면크기의 7배-200이 되면) 실행
        if(scrollPosition >= winHeight * 7 - 200) {
            $('#logo_img1').addClass('active');
            $('#logo_img2').addClass('active');
        } else {
            $('#logo_img1').removeClass('active');
            $('#logo_img2').removeClass('active');
        }

    });



    // [ 아이콘 호버 모션 ]
    for(let i = 1; i < 15; i++ ){
        $("#icon" + i ).mouseover(function(){
            $(this).addClass('icon_active');
            $(this).attr("src", $(this).attr("src").replace(".png", "_pink.png")); 
        }).mouseout(function(){
            $(this).removeClass('icon_active');
            $(this).attr("src", $(this).attr("src").replace("_pink.png", ".png")); 
        });
    }



    // [ 서비스 모션 스크롤매직 ]

	$(function(){
		var controller = new ScrollMagic.Controller();

        var tween = new TimelineMax()
        .fromTo(".trigger1", 1, {x:"-1000%"}, {x:"0%"} )
        .fromTo(".trigger2", 1, {y:"1000%"}, {y:"0%"} )
        .fromTo(".trigger3", 1, {y:"1000%"}, {y:"0%"} )
        .fromTo(".trigger4", 2, {scale: 0}, {scale:1} )
        .fromTo(".trigger5", 1, {y:"1000%"}, {y:"0%"} )
        
		var scene = new ScrollMagic.Scene({
			triggerElement: '.service_box1',
            triggerHook: 0,
			duration: "250%"
		})
        .addTo(controller)
        .setPin('.service_box1')
        .setTween(tween)


		var controller2 = new ScrollMagic.Controller();

        var tween2 = new TimelineMax()
        .fromTo(".trigger6", 1, {x:"-1000%"}, {x:"0%"} )
        .fromTo(".trigger7", 1, {y:"1000%"}, {y:"0%"} )
        .fromTo(".trigger8", 1, {y:"1000%"}, {y:"0%"} )
        .fromTo(".trigger9", 1, {y:"1000%"}, {y:"0%"} )
        .fromTo(".trigger10", 2, {scale: 0}, {scale:1}  )
        
		var scene2 = new ScrollMagic.Scene({
			triggerElement: '.service_box2',
            triggerHook: 0,
			duration: "250%"
		})
        .addTo(controller2)
        .setPin('.service_box2')
        .setTween(tween2)


        var controller3 = new ScrollMagic.Controller();

        var tween3 = new TimelineMax()
        .fromTo(".trigger11", 1, {x:"-1000%"}, {x:"0%"} )
        .fromTo(".trigger12", 1, {y:"1000%"}, {y:"0%"} )
        .fromTo(".trigger13", 1, {y:"1000%"}, {y:"0%"} )
        .fromTo(".trigger14", 1, {y:"1000%"}, {y:"0%"} )
        .fromTo(".trigger15", 2, {scale: 0}, {scale:1}  )
        
		var scene3 = new ScrollMagic.Scene({
			triggerElement: '.service_box3',
            triggerHook: 0,
			duration: "250%"
		})
        .addTo(controller3)
        .setPin('.service_box3')
        .setTween(tween3)
	});

});