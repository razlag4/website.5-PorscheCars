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


document.addEventListener('DOMContentLoaded', () => {
  const models = document.querySelectorAll('.model');

  models.forEach(model => {
    const video = model.querySelector('video.model-video');
    const img = model.querySelector('img.main-photo');
    if (!video || !img) return;

    // базовые настройки видео
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';

    // стили для видео
    Object.assign(video.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: '0',
      transition: 'opacity 0.4s ease',
      zIndex: '0',
      pointerEvents: 'none'
    });

    // стили для фото
    Object.assign(img.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: '1',
      transition: 'opacity 0.4s ease',
      zIndex: '1',
      pointerEvents: 'none'
    });

    model.style.position = 'relative';
    model.style.overflow = 'hidden';

    let isHovered = false;
    let leaveTimeout;
    let hoverTimeout;

    model.addEventListener('mouseenter', () => {
      clearTimeout(leaveTimeout);
      clearTimeout(hoverTimeout);
      isHovered = true;

      // запускаем видео через 0.7 сек, если курсор всё ещё наведен
      hoverTimeout = setTimeout(async () => {
        if (!isHovered) return;
        try {
          video.currentTime = 0;
          await video.play();
          img.style.opacity = '0';
          img.style.zIndex = '0';
          video.style.opacity = '1';
          video.style.zIndex = '1';
        } catch (err) {
          console.warn('Video play error:', err);
        }
      }, 385); // задержка 0.3 сек
    });

    model.addEventListener('mouseleave', () => {
      isHovered = false;
      clearTimeout(hoverTimeout);
      leaveTimeout = setTimeout(() => {
        if (!isHovered) {
          video.pause();
          video.currentTime = 0;
          video.style.opacity = '0';
          video.style.zIndex = '0';
          img.style.opacity = '1';
          img.style.zIndex = '1';
        }
      }, 100);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const models = document.getElementById("models");
  const cars = document.getElementById("cars");

  // Плавные переходы для всех
  [document.body, cars, models].forEach((el) => {
    if (el) el.style.transition = "background-color 0.9s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Когда models в поле зрения
          document.body.style.backgroundColor = "#000000";
          if (cars) cars.style.backgroundColor = "#000000";
          if (models) models.style.backgroundColor = "#000000";
        } else {
          // Когда models выходит
          document.body.style.backgroundColor = "#ffffff";
          if (cars) cars.style.backgroundColor = "#ffffff";
          if (models) models.style.backgroundColor = "#ffffff";
        }
      });
    },
    { threshold: 0.3 }
  );

  if (models) observer.observe(models);
});


document.getElementById("changeLanguage").addEventListener("click", () => {
  alert("Language settings are not available yet.");
});

document.getElementById("contactButton").addEventListener("click", () => {
  alert("Contact form will be available soon.");
});

document.querySelectorAll(".social svg").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});


document.querySelectorAll('.car-card2').forEach(card => {
  card.addEventListener('click', e => {
    // Если клик был не по ссылке внутри карточки
    if (!e.target.closest('a')) {
      window.location.href = card.dataset.href;
    }
  });
});
