function pagecolor(z) {
    var counter = 0;
    while (true) {
        var a = getComputedStyle(z);
        var b = a.backgroundColor;
        document.getElementsByClassName("newcolor")[counter].style.backgroundColor = b;
        counter = counter + 1;
    }
}


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const newne = document.getElementById('mobbtn')
const noplease = document.getElementById('mblclckshow')
newne.addEventListener('click', () => { noplease.classList.toggle('hidden'); });

function bodyoverflowhidden(dropdownid, type) {
    document.getElementById(dropdownid).style.overflow = type;
}

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        document.getElementById('scrollup').style.display = 'block';
    }
    else {
        document.getElementById('scrollup').style.display = 'none';
    }
});

function overflew(id, type, idd) {
    document.getElementById(id).style.overflow = type;
    document.getElementById(idd).classList.toggle('hidden');
}



function down(id){
    document.getElementById(id).classList.toggle("hidden");
}

function show(n,foldername,index){
    document.images[index].src = "./images/" + foldername + "/" + n + ".webp";
}

function showhidden(id,id2){
    document.getElementById(id).classList.toggle("hidden");
    document.getElementById(id2).classList.add("hidden");
}