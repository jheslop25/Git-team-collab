document.body.style.background = 'black';
var width = window.innerWidth || document.body.clientWidth;
var height = window.innerHeight || document.body.clientHeight;
var optionsBackground, bsBackground;

optionsBackground = {
    animation: 'points',
    points: 10,
    inkAmount: 5,
    size: 300,
    frames: 10,
    frameAnimation: true,
    splashing: false,
    image: 'Images/LotR.jpg',
    centered: true,
    queue: true,
    width: width,
    height: height
};
bsBackground = new Brushstroke(optionsBackground);

function runAnimation() {
    bsBackground.draw({
        points: [0, height / 2 - 40, width, height / 3]
    });

    bsBackground.draw({
        points: [width, height / 2, 0, height / 1.5 - 40]
    });

    bsBackground.draw({
        inkAmount: 3,
        frames: 100,
        size: 200,
        splashing: true,
        points: 20
    });
}

runAnimation();