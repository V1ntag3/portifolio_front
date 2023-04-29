setTimeout(() => {
    (function () {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        [].slice.call(document.querySelectorAll('.isolayer')).forEach(function (el) {
            new IsoGrid(el, {
                type: 'static',
                transform: 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
                stackItemsAnimation: {
                    properties: function (pos) {
                        return {
                            translateZ: (pos + 1) * 50,
                            rotateZ: getRandomInt(-3, 3)
                        };
                    },
                    options: function (pos, itemstotal) {
                        return {
                            type: dynamics.bezier,
                            duration: 500,
                            points: [{ "x": 0, "y": 0, "cp": [{ "x": 0.2, "y": 1 }] }, { "x": 1, "y": 1, "cp": [{ "x": 0.3, "y": 1 }] }],
                            //delay: (itemstotal-pos-1)*40
                        };
                    }
                },
                onGridLoaded: function () {
                    classie.add(document.body, 'grid-loaded');
                }
            });
        });
    })();
}, 1000);

function ResponsiveTCforIE(c) {
    var e = document.getElementById(c), rw;
    if (e && e.height && e.width) {
        rw = parseInt(document.defaultView.getComputedStyle(e).getPropertyValue('width'));
        e.style.height = (rw * e.height / e.width) + 'px';
    }
}



setTimeout(() => {

    $('#tagCanvas').tagcanvas({
        outlineColour: 'transparent',
        textColour: '#fff',
        reverse: true,
        depth: 1,
        maxSpeed: 0.02,
        minSpeed: 0.02,
        textFont: 'Poppins-Regular',
        weight: true,
        txtScale: 1.8,
        wheelZoom: false,
        animTiming: "Smooth",
        clickToFront: 0.5
    }, 'tags')
    ResponsiveTCforIE('tagCanvas');
}, 400);


window.addEventListener('resize', function () {
    ResponsiveTCforIE('tagCanvas');
}, false);