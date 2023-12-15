// 자기소개 부분의 likes 갤러리 조정

document.querySelectorAll(".like").forEach((likeElement) => {
    likeElement.addEventListener("click", (event) => {
        // 클릭된 요소가 이미 'active' 상태인지 확인
        if (event.currentTarget.classList.contains("active")) {
            // 이미 'active' 상태라면 'active' 클래스 제거
            event.currentTarget.classList.remove("active");
            // 나머지 요소들을 'inactive' 상태에서 원래 상태로 돌림
            document.querySelectorAll(".like.inactive").forEach((inactiveElement) => {
                inactiveElement.classList.remove("inactive");
            });
            // 배경 이미지 제거
            event.currentTarget.style.backgroundImage = '';
        } else {
            // 클릭된 요소가 'active' 상태가 아니라면
            // 현재 'active' 클래스를 가진 요소들에서 'active' 클래스를 제거하고 'inactive' 클래스를 추가
            document.querySelectorAll(".like.active").forEach((activeElement) => {
                activeElement.classList.remove("active");
                activeElement.classList.add("inactive");
                // 배경 이미지 제거
                activeElement.style.backgroundImage = '';
            });
            // 클릭된 요소에 'active' 클래스를 추가하고 'inactive' 클래스를 제거
            event.currentTarget.classList.add("active");
            event.currentTarget.classList.remove("inactive");
            // 클릭된 요소의 배경 이미지 설정
            var bgImage = event.currentTarget.getAttribute('data-bg-image');
            event.currentTarget.style.backgroundImage = 'url(' + bgImage + ')';
        }
    });
});


var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1560: {
            slidesPerView: 3
        }
    }
});

$(document).ready(function() {
    $(".skills .skill").click(function() {
    var index = $(this).index();
    $(".skills2 .skill2").css({"color": "", "font-weight": "normal"}); // 모든 skill2를 초기화
    $(".skills2 .skill2:eq(" + index + ")").css({"color": "#005baa", "font-weight" : "bold"}); // 클릭한 skill에 해당하는 skill2만 색 변경 및 글자 굵게
});
});

// slide 

var slideIndex = 0;
showSlides(slideIndex);
autoSlide();

function autoSlide() {
    slideIndex++;
    if (slideIndex > $(".mySlides").length) {slideIndex = 1}
    showSlides(slideIndex - 1);
    setTimeout(autoSlide, 8000);
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > $(".mySlides").length) {slideIndex = 1}
    else if(slideIndex < 1) {slideIndex = $(".mySlides").length}
    showSlides(slideIndex - 1);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex - 1);
}

function showSlides(n) {
    var i;
    var slides = $(".mySlides");
    var dots = $(".dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n].style.display = "block";  
    dots[n].className += " active";
}

$(document).ready(function(){
    $('.projects').click(function(){
      var clicked = $(this).text();
      if(clicked === "Team Projects"){
        $('#main1').show();
        $('#main2').hide();
      } else if(clicked === "Personal Projects"){
        $('#main1').hide();
        $('#main2').show();
      }
    });
  });