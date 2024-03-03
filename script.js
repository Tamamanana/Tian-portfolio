document.addEventListener("DOMContentLoaded", function () {
  let isEnglish = true;

  setInterval(function () {
    var subHeaderElement = document.getElementById("sub-header");
    var contentElement = document.getElementById("content");

    if (isEnglish) {
      subHeaderElement.innerHTML = "UX/UIデザイナー & Webデザイナー";
      contentElement.innerHTML =
        "さまざまなスタイルのデザインを試すことが好きで、美しく楽しい体験を創出することに熱心です。";
      isEnglish = false;
    } else {
      subHeaderElement.innerHTML = "UI/UX Designer and Web Designer";
      contentElement.innerHTML =
        "I enjoy trying various styles of design and have a passion for creating beautiful and delightful experiences.";
      isEnglish = true;
    }
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      navbar.classList.add("show");
    } else {
      navbar.classList.remove("show");
    }
  });
});
// .
document.addEventListener("DOMContentLoaded", function () {
  var dot = document.getElementById("dot");
  dot.style.animation = "none";
  setTimeout(function () {
    dot.style.animation = "";
    dot.style.animation = "bounce 3s ease-out forwards";
  }, 10);
});

document.addEventListener("scroll", function () {
  const box = document.querySelector(".box.slide-in");
  const boxTop = box.getBoundingClientRect().top;
  const isVisible = boxTop < window.innerHeight;

  if (isVisible) {
    box.classList.add("active");
  }
});

document.addEventListener("scroll", function () {
  const textBoxes = document.querySelectorAll(".text-box");

  textBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const isVisible = boxTop - window.innerHeight < 0;

    if (isVisible) {
      box.classList.add("active");
    }
  });
});

// document.addEventListener("scroll", function () {
//   const images = document.querySelectorAll(".images-row img");

//   images.forEach((img, index) => {
//     const delay = index * 100;

//     if (img.getBoundingClientRect().top < window.innerHeight) {
//       setTimeout(() => {
//         img.classList.add("active");
//       }, delay);
//     }
//   });
// });

document.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".images-row img");

  images.forEach((img) => {
    if (img.getBoundingClientRect().top < window.innerHeight) {
      img.classList.add("active");
    }
  });
});

document.addEventListener("scroll", function () {
  const lines = document.querySelectorAll(".app-design-section .line");

  lines.forEach((line) => {
    const lineTop = line.getBoundingClientRect().top;
    const isVisible = lineTop < window.innerHeight;

    if (isVisible) {
      line.classList.add("animate");
    }
  });
});

document.addEventListener("scroll", function () {
  const section = document.querySelector(".app-design-section");
  const img = section.querySelector(".app-content-left img");
  const text = section.querySelector(".app-text");
  const button = section.querySelector(".app-content-right .round-button");

  if (section.getBoundingClientRect().top < window.innerHeight) {
    setTimeout(() => img.classList.add("animate"), 0);
    setTimeout(() => text.classList.add("animate"), 500);
    setTimeout(() => button.classList.add("animate"), 1000);
  }
});

document.addEventListener("scroll", function () {
  const bottomBox = document.querySelector(".bottom-box");
  const bottomLine = bottomBox.querySelector(".bottom-line");
  const profilePic = bottomBox.querySelector(".profile-pic");
  const contactInfo = bottomBox.querySelector(".contact-info");

  if (bottomBox.getBoundingClientRect().top < window.innerHeight) {
    bottomLine.classList.add("animate");

    setTimeout(() => {
      profilePic.classList.add("animate");
      contactInfo.classList.add("animate");
    }, 500);
  }
});
// 动画
document.addEventListener("DOMContentLoaded", function () {
  // 仅选择具有 hover-effect 类的图片
  const images = document.querySelectorAll(".images-row img.hover-effect");

  images.forEach(function (img) {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute("data-hover-image");

    img.addEventListener("mouseover", function () {
      img.src = hoverSrc;
    });

    img.addEventListener("mouseout", function () {
      img.src = originalSrc;
    });
  });
});
