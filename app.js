function smoothScroll(target, duration) {
    var target = document.querySelector('.section2');
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    
    function loop(currentTime) {
        // if(startTime === null) startTime = currentTime; 
        // var timeElapsed = currentTime - startTime;  
        // var run = ease(timeElapsed,startPosition,distance,duration);
        // window.scrollTo(0,run);
        // if(timeElapsed < duration) requestAnimationFrame(animation);
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(loop);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(loop);
}

var button = document.querySelector('section1')

button.addEventListener('click', function() {
    smoothScroll('.section2', 1000);
});

// Source of tutorial https://www.youtube.com/watch?v=oUSvlrDTLi4
// Code source https://github.com/developedbyed/Smooth-Scroll