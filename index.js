const x = document.querySelector(".header");
const yearEl = document.querySelector(".year");

const currYear = new Date().getFullYear();
yearEl.textContent = currYear;


function menu_displayer() {
  x.classList.toggle("nav-open");
}

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if(href==="#")
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });

    if(href!=="#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior:"smooth"})
      x.classList.remove("nav-open");
    }
  })
})

const sectionHeroEl = document.querySelector(".hero-section");

const observer = new IntersectionObserver(function(entries) {
  const entry = entries[0];
  console.log
  if(!entry.isIntersecting) document.body.classList.add("sticky");
  if(entry.isIntersecting) document.body.classList.remove("sticky");
},{
  // In the viewport
  root:null,
  threshold: 0,
  rootMargin: "-80px"
});
observer.observe(sectionHeroEl);



function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();