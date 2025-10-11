const video = document.getElementById('headphoto');
const svgContainer = document.getElementById('svgvideo');

let isPaused = false;

svgContainer.addEventListener('click', () => {
  const currentIcon = svgContainer.querySelector('svg');

  // плавное исчезновение
  currentIcon.classList.add('fade-out');

  setTimeout(() => {
    svgContainer.innerHTML = isPaused
      ? `<svg fill="#9d3f3f" viewBox="0 0 332.145 332.146" xmlns="http://www.w3.org/2000/svg">
          <path d="M121.114,0H25.558c-8.017,0-14.517,6.5-14.517,14.515v303.114c0,8.017,6.5,14.517,14.517,14.517h95.556 c8.017,0,14.517-6.5,14.517-14.517V14.515C135.631,6.499,129.131,0,121.114,0z M106.6,303.113H40.072V29.031H106.6V303.113z"></path>
          <path d="M306.586,0h-95.541c-8.018,0-14.518,6.5-14.518,14.515v303.114c0,8.017,6.5,14.517,14.518,14.517h95.541 c8.016,0,14.518-6.5,14.518-14.517V14.515C321.102,6.499,314.602,0,306.586,0z M292.073,303.113h-66.514V29.031h66.514V303.113z"></path>
        </svg>`
      : `<svg fill="#9d3f3f" viewBox="0 0 38.083 38.083" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.655,36.904V1.177c0-0.461,0.269-0.879,0.687-1.07c0.419-0.191,0.911-0.121,1.26,0.178l22.416,17.568 c0.258,0.223,0.406,0.545,0.41,0.885c0.004,0.326-0.143,0.663-0.396,0.889L8.616,37.784c-0.347,0.31-0.842,0.385-1.265,0.194 C6.927,37.787,6.655,37.368,6.655,36.904z M9.01,3.744v30.535l19.449-15.52L9.01,3.744z"></path>
        </svg>`;

    // плавное появление
    const newIcon = svgContainer.querySelector('svg');
    newIcon.classList.add('fade-in');

    // управление видео
    if (isPaused) {
      video.play();
    } else {
      video.pause();
    }

    isPaused = !isPaused;
  }, 200);
});
