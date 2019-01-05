import { scroller } from "react-scroll";

export function ScrollAnimation(e) {
  const name = e.target.id;
  scroller.scrollTo(name, {
    duration: 1500,
    delay: 100,
    smooth: true
  });
}

export function DisplayStyleValue(value, element) {
  let scroll = {
    BODY: document.body.scrollTop,
    DOCUMENT_ELEMENT: document.documentElement.scrollTop
  };

  if (scroll.BODY > value || scroll.DOCUMENT_ELEMENT > value)
    element.style.opacity = 1;
  else element.style.opacity = 0;
}
