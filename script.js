import { sdk } from '@farcaster/frame-sdk';

await sdk.actions.ready();

await sdk.actions.ready({ disableNativeGestures: true });

// gán sự kiện ngoài load
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("soundButton");
    const sound = document.getElementById("mySound");
  
    const playSound = (e) => {
      e.preventDefault();
      sound.currentTime = 0;
      sound.play().catch(console.warn);
      // hiệu ứng feedback nhỏ
      btn.classList.add("active");
      setTimeout(() => btn.classList.remove("active"), 150);
    };
  
    btn.addEventListener("click", playSound);
    btn.addEventListener("touchstart", playSound);
  });
  