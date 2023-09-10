const THRESHOLD = 100;

function getDirection(startX, endX) {
  if (endX + THRESHOLD < startX) {
    return 'left';
  }
  if (endX > startX + THRESHOLD) {
    return 'right';
  }
}

export function subscribeSwipe(fn) {
    let touchstartX = 0;
    let touchendX = 0;

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    });
      
     document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        const direction = getDirection(touchstartX, touchendX);

        fn(direction);
    });
}

