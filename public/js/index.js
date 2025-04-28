



function ResponsiveTCforIE(c) {
    var e = document.getElementById(c), rw;
    if (e && e.height && e.width) {
        rw = parseInt(document.defaultView.getComputedStyle(e).getPropertyValue('width'));
        e.style.height = (rw * e.height / e.width) + 'px';
    }
}

$(document).ready(function () {
    setTimeout(() => {
        const elementosAnim = document.querySelectorAll('[data-anima]')
        const animacaoClass = 'animacao'
        $('#tagCanvas').tagcanvas({
            outlineColour: 'transparent',
            textColour: '#fff',
            reverse: true,
            depth: 1,
            maxSpeed: 0.02,
            minSpeed: 0.02,
            textFont: 'Poppins',
            weight: true,
            txtScale: 1.8,
            wheelZoom: false,
            animTiming: "Smooth",
            clickToFront: 0.5
        }, 'tags')
        ResponsiveTCforIE('tagCanvas');
        function animaScrool() {
            const topo = window.pageYOffset + ((window.innerHeight * 2) / 4)
            elementosAnim.forEach(function (elemento) {
                if (topo > elemento.offsetTop) {
                    elemento.classList.add(animacaoClass)
                } else {
                    elemento.classList.remove(animacaoClass)
                }
            })
        }
        if (elementosAnim.length) {
            window.addEventListener('scroll', function () {
                animaScrool()
            })
        }
        animaScrool()
        setTimeout(() => {
            ResponsiveTCforIE('tagCanvas');

        }, 200);

    }, 400);
});



window.addEventListener('resize', function () {
    ResponsiveTCforIE('tagCanvas');
}, false);


