
//------nav bar menu opening-------//

const nav_menu = document.getElementById("nav-menu");
const menu_show_btn = document.getElementById("nav-toggle");
const menu_hide_btn = document.getElementById("menu_hide_btn");
const show_menu = "show_menu";


menu_show_btn.addEventListener("click", funShow);
menu_hide_btn.addEventListener("click", funHide);

function funShow() {
    nav_menu.classList.add(show_menu);
}

function funHide() {
    nav_menu.classList.remove(show_menu);
};




//-------active menu li a------//

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
};


//-----slider-----//
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 40,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: -40,
        depth: 80,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        410: {
            slidesPerView: 0.1,
            spaceBetween: 20,
            coverflowEffect:
            {
                stretch: -20,
            }
        },
        640: {
            slidesPerView: 0.4,
            spaceBetween: 20,
            coverflowEffect:
            {
                stretch: -20,
            }
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            coverflowEffect:
            {
                stretch: -20,
            }
        },
        1024: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            coverflowEffect:
            {
                stretch: -30,
            }
        },
    }
});

//-----parallax effect-----//
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

var scene = document.getElementById('scene2');
var parallax = new Parallax(scene2);

var scene = document.getElementById('scene3');
var parallax = new Parallax(scene3);

var scene = document.getElementById('scene4');
var parallax = new Parallax(scene4);



//-----animation-----//
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 900,
    delay: 200,
    reset: true,
});
//bottom
sr.reveal(`.sr01`, { delay: 300, origin: 'bottom' }),
    sr.reveal(`.sr02`, { delay: 600, origin: 'bottom' }),
    sr.reveal(`.sr03`, { delay: 900, origin: 'bottom' }),
    sr.reveal(`.sr04`, { delay: 1200, origin: 'bottom' }),
    sr.reveal(`.sr05`, { delay: 1500, origin: 'bottom' });
//top
sr.reveal(`.sr06`, { delay: 300, origin: 'top' }),
    sr.reveal(`.sr07`, { delay: 600, origin: 'top' }),
    sr.reveal(`.sr08`, { delay: 900, origin: 'top' }),
    sr.reveal(`.sr09`, { delay: 1200, origin: 'top' }),
    sr.reveal(`.sr10`, { delay: 1500, origin: 'top' });

    var cssSlidy = function(newOptions) {
        var options = (function() {
          var mergedOptions = {},
            defaultOptions = {
              timeOnSlide: 3,
              timeBetweenSlides: 1,
              slidyContainerSelector: '#slidy-container', // name of slider container
              slidySelector: '#slidy', // name of slider
              slidyDirection: 'left', // options: left, right
              fallbackFunction: function() {},
              cssAnimationName: 'slidy',
              captionSource: 'data-caption', // options: data-caption, alt, none
              captionBackground: 'rgba(0,0,0,0.3)',
              captionColor: '#fff',
              captionFont: 'Avenir, Avenir Next, Droid Sans, DroidSansRegular, Corbel, Tahoma, Geneva, sans-serif',
              captionPosition: 'bottom', // options: top, bottom
              captionAppear: 'slide', //  options: slide, perm, fade
              captionSize: '1.6rem', 
              captionPadding: '.6rem'
              };
              for (var option in defaultOptions) mergedOptions[option] = defaultOptions[option];
              for (var option in newOptions) mergedOptions[option] = newOptions[option];
              return mergedOptions;
          })(),
          CS = this;
          CS.animationString = 'animation';
          CS.hasAnimation = false;
          CS.keyframeprefix = '';
          CS.domPrefixes = 'Webkit Moz O Khtml'.split(' ');
          CS.pfx = '';
          CS.element = document.getElementById(options.slidySelector.replace('#', ''));
          CS.init = (function() {
          // browser supports keyframe animation w/o prefixes
            if (CS.element.style.animationName !== undefined) CS.hasAnimation = true;
              // browser supports keyframe animation w/ prefixes
              if (CS.hasAnimation === false) {
                for (var i = 0; i < CS.domPrefixes.length; i++) {
                  if (CS.element.style[CS.domPrefixes[i] + 'AnimationName'] !== undefined) {
                    CS.pfx = domPrefixes[i];
                    CS.animationString = pfx + 'Animation';
                    CS.keyframeprefix = '-' + pfx.toLowerCase() + '-';
                    CS.hasAnimation = true;
                    // determines CSS prefix required for CSS animations
                    break;
                    }
                  }
                }
              if (CS.hasAnimation === true) {
                var images = CS.element.getElementsByTagName("img"),
                L = images.length,
                fig = document.createElement('figure'),
                who, temp;
                while(L) {
                      temp = fig.cloneNode(false);
                      who = images[--L];
                  // wraps all images in the slider with <figure> tags
                  if (options.captionSource!=="none")				
                      caption = who.getAttribute(options.captionSource);
                      who.parentNode.insertBefore(temp, who);
                      if (caption !== null) {
                      content = document.createElement('figcaption');
                      content.innerHTML = caption;
                // places captions in each <figure> element, if required
                      }
                      temp.appendChild(who);
                      if (caption !== null) {
                      temp.appendChild(content);
                      }
                      }
                var figs = CS.element.getElementsByTagName("figure");
                var firstFig = figs[0]; // get the first figure inside the "slidy" element.
                figWrap = firstFig.cloneNode(true); // copy it.
                      CS.element.appendChild(figWrap); // add the clone to the end of the images
                var imgCount = images.length, // count the number of images in the slide, including the new cloned element
                totalTime = (options.timeOnSlide + options.timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
                slideRatio = (options.timeOnSlide / totalTime) * 100, // determine the percentage of time an induvidual image is held static during the animation
                moveRatio = (options.timeBetweenSlides / totalTime) * 100, // determine the percentage of time for an individual movement
                basePercentage = 100 / imgCount, // work out how wide each image should be in the slidy, as a percentage.
                position = 0, // set the initial position of the slidy element
                css = document.createElement("style"); // start marking a new style sheet
                // creating css style tag
                css.type = "text/css";
                css.id = options.slidySelector.replace('#', '') + "-css";
                css.innerHTML += options.slidyContainerSelector + " { overflow: hidden; }\n";
                css.innerHTML += options.slidySelector + " { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the inner slider container
                css.innerHTML += options.slidySelector + " figure { float: left; margin: 0; position: relative; display: inline-block; width: " + basePercentage + "%; height: auto; }\n"; // set the width and size pf the inner <figure> elements
                css.innerHTML += options.slidySelector + " figure img { width: 100%; }\n";
                css.innerHTML += options.slidySelector + " figure figcaption { position: absolute; width: 100%; background-color: " + options.captionBackground + "; color: " + options.captionColor + "; font-family: " + options.captionFont + ";";
                
                var captions = document.getElementsByTagName("figcaption");
                var captionHeight = captions[0].offsetHeight*2 +  parseInt(window.getComputedStyle(captions[0]).fontSize, 10);
                if (options.captionPosition == "top") {
                  switch (options.captions) {
                      case 'fade':
                          css.innerHTML += " top: 0; opacity: 0;";
                          break;
                      case 'slide': 
                          css.innerHTML += " top: -"+captionHeight+"px; ";
                          break;
                      default: 
                          css.innerHTML += " top: 0;";
                      }
                  } else {
                     switch (options.captionAppear) {
                      case 'fade':
                          css.innerHTML += " bottom: 0; opacity: 0;";
                          break;
                      case 'slide': 
                          css.innerHTML += " bottom: -"+captionHeight+"px; ";
                          break;
                      default: 
                          css.innerHTML += " bottom: 0;";
                      }
                  }
                  css.innerHTML += " font-size: " + options.captionSize +  "; padding: " + options.captionPadding + "; " + keyframeprefix + "transition: .5s; }\n";
                  css.innerHTML += options.slidySelector + ":hover figure figcaption { opacity: 1; ";
                  if (options.captionPosition == "top") { css.innerHTML += " top: 0px;"; }
                  else { css.innerHTML += " bottom: 0px;"; }
                  css.innerHTML += " }\n";
                  css.innerHTML += "@" + keyframeprefix + "keyframes " + options.cssAnimationName + " {\n";
           if (options.slidyDirection == "right") {
               for (i = imgCount - 1; i > 0; i--) { // 
                      position += slideRatio; // make the keyframe the position of the image
                      css.innerHTML += position + "% { left: -" + (i * 100) + "%; }\n";
                      position += moveRatio; // make the postion for the _next_ slide
                      css.innerHTML += position + "% { left: -" + ((i - 1) * 100) + "%; }\n";
      }
           } else {  // the slider is moving to the left    
                  for (i = 0; i < (imgCount - 1); i++) { // 
                      position += slideRatio; // make the keyframe the position of the image
                      css.innerHTML += position + "% { left: -" + (i * 100) + "%; }\n";
                      position += moveRatio; // make the postion for the _next_ slide
                      css.innerHTML += position + "% { left: -" + ((i + 1) * 100) + "%; }\n";
                  }
               }
             css.innerHTML += "}\n";
                  css.innerHTML += options.slidySelector + " { ";
                 if (options.slidyDirection == "right") { css.innerHTML += "left: " + imgCount*100+"%" }
                 else { css.innerHTML += "left: 0%; " }
                   
                 css.innerHTML += keyframeprefix + "transform: translate3d(0,0,0); " + keyframeprefix + "animation: " + totalTime + "s " + options.cssAnimationName + " infinite; }\n"; // call on the completed keyframe animation sequence
                  // place css style tag
                  if (options.cssLocation !== undefined) options.cssLocation.appendChild(css);
                  else document.body.appendChild(css);
              } else {
                  // fallback function
                  options.fallbackFunction();
              }
          })();
      }
      cssSlidy();


      document.onkeydown = function(e)
    {
        if(event.keyCode == 123)
        {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
        {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
        {
            return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
        {
            return false;
        }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))
    {
      return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
     }
     if(e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)) {
        return false;
     }
     if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
     }
     if(e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)) {
        return false;
     }
    }
      

    