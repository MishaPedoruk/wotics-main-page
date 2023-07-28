document.addEventListener("DOMContentLoaded", function() {
  const sliderTrack = document.querySelector(".slider-track");
  const sliderItems = Array.from(document.querySelectorAll(".slider-item"));
  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");
  const itemWidth = sliderItems[0].offsetWidth;
  const trackWidth = itemWidth * sliderItems.length;
  const containerWidth = sliderTrack.parentElement.offsetWidth;
  const maxOffset = trackWidth - containerWidth;
  let currentOffset = 0;

  function updateButtons() {
    prevButton.disabled = currentOffset <= 0;
    nextButton.disabled = currentOffset >= maxOffset;
  }

  function scrollLeft() {
    if (currentOffset > 0) {
      currentOffset -= itemWidth;
      sliderTrack.style.transform = `translateX(-${currentOffset}px)`;
      updateButtons();
    }
  }

  function scrollRight() {
    if (currentOffset < maxOffset) {
      currentOffset += itemWidth;
      sliderTrack.style.transform = `translateX(-${currentOffset}px)`;
      updateButtons();
    }
  }

  prevButton.addEventListener("click", scrollLeft);
  nextButton.addEventListener("click", scrollRight);

  updateButtons();
});


