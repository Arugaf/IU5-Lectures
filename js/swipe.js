const THRESHOLD = 100;

function getActionType(event, startX, endX) {
  const menuTriggerArea = document.getElementById('menu-trigger');

  if (endX + 2 * THRESHOLD < startX && event.target !== menuTriggerArea) {
    return 'next';
  }
  if (endX > startX + THRESHOLD) {
    if (menuTriggerArea && event.target === menuTriggerArea) {
      return 'menu';
    } else {
      return 'prev';
    }
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
      const actionType = getActionType(e, touchstartX, touchendX);

      fn(actionType);
    });
} 

