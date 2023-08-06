import { onMounted, onUnmounted, ref } from "vue";

export function observeAnimation() {
  const animatedElements = document.querySelectorAll(".hidden-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle("show-item", entry.isIntersecting);
      }
    });
  });
  animatedElements.forEach((el) => observer.observe(el));
}

export function trackScrollY() {
  let y = ref(0);
  const handleScroll = (e) => {
    y.value = e.target.documentElement.scrollTop;
  };
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  return y;
}
