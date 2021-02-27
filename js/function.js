$(document).ready(function() {

    $("body").mousemove(function(e) {
        handleMouseMove(e);
    });

    function handleMouseMove(event) {

        var x = event.pageX - 200;
        var y = event.pageY - 200;

        $("#mouse").animate({
            left: x,
            top: y
        }, 0);
        $(".lycFront").animate({
            left: -x + window.innerWidth / 2 - 1,
            top: -y + window.innerHeight - 1
        }, 0);
        $(".tFront").animate({
            left: -x + window.innerWidth / 2 - 1,
            top: -y + window.innerHeight - 1
        }, 0);
        if (event.pageX < window.innerWidth) {
            $("#lycA").css("z-index", "1");
        } else {
            $("#lycA").css("z-index", "inherit");
        }
    }
    $(".background").addClass("changeFilterArt")
    $("section").removeClass("changePage")
});
var isArt = true;

function changeFilter() {
    $(".background").toggleClass("changeFilterArt")
        // isArt = !isArt;
    if (isArt) {
        isArt = false
        $("#About").css("color", "#aaa")
    } else {
        isArt = true
        $("#About").css("color", "#333")
    }
}

function letter2(this_id) {


    // Wrap every letter in a span
    var textWrapper = document.querySelector('#' + this_id + ' .ml61 .letters1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter1' >$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: '#' + this_id + ' .ml61 .letter1',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i + 400
        });
}



function letter(this_id) {
    var textWrapper = document.querySelector('#' + this_id + ' .ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter' onclick='click1()'>$&</span>");
    anime.timeline({ loop: false })
        .add({
            targets: '#' + this_id + ' .ml11 .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '#' + this_id + ' .ml11 .line',
            translateX: [0, document.querySelector('#' + this_id + ' .ml11 .letters').getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
            targets: '#' + this_id + ' .ml11 .letter',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i + 1)
        });
}



function click1() {
    $("#Experience").toggleClass("changePage")
    $("#Experience").animate({ scrollTop: 0 }, "fast");
    letter2("Experience");
}

function popupEx(this_id) {
    console.log(this_id);
    if ($("#" + this_id + " .ExperiencePopUp").hasClass('changePage')) {
        $("#" + this_id + " .ExperiencePopUp").removeClass("changePage")
        letter2(this_id + " .ExperiencePopUp .popTitle ");
        $("#" + this_id + " .ExperiencePopUp").scrollTop(0);
    }
    return false;
}

function popcloseEx(this_id) {
    console.log(this_id + "1");
    // if (!$("#" + this_id + " .ExperiencePopUp").hasClass('changePage')) {
    $("#" + this_id + " .ExperiencePopUp").toggleClass("changePage")
        // }
    letter2("extitle");
    return false;

}

$('a').on('click', function() {
    e.preventDefault();
    $('body').load($(this).attr('href'));
});

// function circle() {
anime.timeline({ loop: false })
    .add({
        targets: '.skillgbox .skillgenre',
        scale: [3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i + 500
    });
// }
var textWrapper = document.querySelector('#extitle .ml61 .letters1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '#extitle .ml61 .letter1',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i + 400
    });
// waterfall('.itemM');
// var s = skrollr.init();


var mailshow = true;

function showmail() {
    if (mailshow) {
        $('#mailbox').css("display", "flex");
        $('#mailbox').animate({ top: '50px', opacity: '1' }, 500);
        $('#mailbox2').css("display", "flex");
        $('#mailbox2').animate({ top: '50px', opacity: '1' }, 500);

    } else {

        $('#mailbox').animate({ top: '0px', opacity: '0' }, 500);
        setTimeout(function() {
            $('#mailbox').css("display", "none");
        }, 1010);
        $('#mailbox2').animate({ top: '0px', opacity: '0' }, 500);
        setTimeout(function() {
            $('#mailbox2').css("display", "none");
        }, 1010);
    }
    mailshow = !mailshow
        // alert(mailshow);
}


function sendani() {
    $('#mailbox').animate({ top: '0px', opacity: '0' }, 500);
    setTimeout(function() {
        $('#mailbox').css("display", "none");
    }, 1010);
    $('#mailbox2').animate({ top: '0px', opacity: '0' }, 500);
    setTimeout(function() {
        $('#mailbox2').css("display", "none");
    }, 1010);
}

// 8d744346-544a-4993-a2e6-3e33fe4eecb2 用戶碼
// 41e639c1-716d-42dc-b5fb-5d7a4e746d24 16碼

function sendemail() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var content = document.getElementById("content").value;
    // alert(email);
    // alert(name);
    // alert(content);
    Email.send({
        SecureToken: "41e639c1-716d-42dc-b5fb-5d7a4e746d24",
        To: 'yunchienlo@gmail.com',
        From: email,
        Subject: name,
        Body: content
    }).then(
        message => alert(message)
    );
}