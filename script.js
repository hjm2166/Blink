const outPath = document.querySelector('.out path');
const In = document.querySelector('.in')
const pupil = document.querySelector('.pupil');
const iris = document.querySelector('.iris')
const L1 = document.querySelector('.line-1')
const L2 = document.querySelector('.line-2')
const L3 = document.querySelector('.line-3')

// 동공 반응
In.addEventListener('mouseenter', () => {
    pupil.style.transform = 'translate(-50%, -50%) scale(0.6)';
});
In.addEventListener('mouseleave', () => {
    pupil.style.transform = 'translate(-50%, -50%) scale(1)';
});

// 홍채 반응
In.addEventListener('mouseenter', () => {
    iris.style.transform = 'translate(-50%, -50%) scale(0.85)';
});
In.addEventListener('mouseleave', () => {
    iris.style.transform = 'translate(-50%, -50%) scale(1)';
});


// 주위 선 반응
In.addEventListener('mouseenter', () => {
    L1.style.transform = 'translate(-50%, -50%) scale(1)';
});
In.addEventListener('mouseleave', () => {
    L1.style.transform = 'translate(-50%, -50%) scale(1.1)';
});
//
In.addEventListener('mouseenter', () => {
    L2.style.transform = 'translate(-50%, -50%) scale(1)';
});
In.addEventListener('mouseleave', () => {
    L2.style.transform = 'translate(-50%, -50%) scale(1.3)';
});
//
In.addEventListener('mouseenter', () => {
    L3.style.transform = 'translate(-50%, -50%) scale(1)';
});
In.addEventListener('mouseleave', () => {
    L3.style.transform = 'translate(-50%, -50%) scale(1.5)';
});






// 이동 범위 설정 (px)
const rangeX = 40;
const rangeY = 32;

let isHovering = false;

let baseX = window.innerWidth / 2;
let baseY = window.innerHeight / 2;

// 창 크기 바뀔 때 기준 위치 업데이트
window.addEventListener('resize', () => {
  baseX = window.innerWidth / 2;
  baseY = window.innerHeight / 2;
  // 동시에 iris도 중앙 복귀
  if (!isHovering) {
    iris.style.left = `${baseX}px`;
    iris.style.top = `${baseY}px`;
  }
});

// 마우스 올라가면 멈추고 중앙 복귀
In.addEventListener('mouseenter', () => {
  isHovering = true;
  iris.style.left = `${baseX}px`;
  iris.style.top = `${baseY}px`;
});

// 마우스 벗어나면 다시 움직임 시작
In.addEventListener('mouseleave', () => {
  isHovering = false;
});

function moveIrisRandomly() {
  if (!isHovering) {
    const offsetX = (Math.random() - 0.5) * 2 * rangeX;
    const offsetY = (Math.random() - 0.5) * 2 * rangeY;

    const newX = baseX + offsetX;
    const newY = baseY + offsetY;

    iris.style.left = `${newX}px`;
    iris.style.top = `${newY}px`;
  }

  // 다음 이동 시간 (300~900ms)
  const nextTime = Math.random() * 600 + 300;
  setTimeout(moveIrisRandomly, nextTime);
}

// 첫 실행
moveIrisRandomly();
