const list = [
  {
    who: "me",
    yTargetPixels: 550,

    defaultWidth: 60, // vh
    targetWidth: 7, // vh

    defaultRight: 50, // vw
    targetRight: 50, // vw

    defaultTop: 100, // px
    targetTop: 40, // px
  },
];

/*
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
*/

let hasCrossed = false;
window.addEventListener("scroll", function () {
  list.forEach((x) => {
    iTransform(x);
  });

  const mainBar = document.getElementById("me-container");
  if (window.scrollY > 820 && !hasCrossed) {
    mainBar.classList.toggle("me-container");
    hasCrossed = true;
  }

  if (window.scrollY <= 820 && hasCrossed) {
    mainBar.classList.toggle("me-container");
    hasCrossed = false;
  }
});

//

function clamp(min, num, max) {
  return Math.min(Math.max(num, min), max);
}

//

function iTransform(x) {
  const yTarget = 1 / x.yTargetPixels;
  const progress = yTarget * window.scrollY;
  x.progress = progress;
  const me = document.getElementById(x.who);
  const width =
    Math.max(
      Math.max(x.defaultWidth - (x.defaultWidth - x.targetWidth) * x.progress, x.targetWidth),
      9
    ) + "vh";
  const top =
    Math.max(x.defaultTop - (x.defaultTop - x.targetTop) * x.progress, x.targetTop) + "px";
  const right =
    Math.max(x.defaultRight - (x.defaultRight - x.targetRight) * x.progress, x.targetRight) +
    "px";

  console.log(
    Math.max(x.defaultWidth - (x.defaultWidth - x.targetWidth) * x.progress, x.targetWidth)
  );
  me.style.width = width;
  me.style.top = top;
  me.style.right = right;

  //console.log(`Scrolled: ${window.scrollY}\nWidth: ${width}\nTop: ${top}\nRight: ${right}`);
}
