$(".single-item").slick({dots:!0,arrows:!1}),$(".grid").masonry({itemSelector:".grid-item",stamp:".stamp",columnWidth:".grid-sizer",percentPosition:!1}),window.matchMedia("(min-width: 1200px)").matches?$(".grid").masonry({gutter:8}):window.matchMedia("(min-width: 768px)").matches?$(".grid").masonry({gutter:6}):window.matchMedia("(max-width: 767px)").matches&&$(".grid").masonry({gutter:2}),window.addEventListener("resize",(function(){window.matchMedia("(min-width: 1200px)").matches?$(".grid").masonry({gutter:8}):window.matchMedia("(min-width: 768px)").matches?$(".grid").masonry({gutter:6}):window.matchMedia("(max-width: 767px)").matches&&$(".grid").masonry({gutter:2})})),(()=>{const e={openMobileMenuBtn:document.querySelector("[data-mobile-menu-open]"),closeMobileMenuBtn:document.querySelector("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),hiddenElementBurger:document.querySelector("[data-hidden-burger]"),hiddenElementButton:document.querySelector("[data-hidden-button]"),menuList:document.querySelector(".mob-menu__list")},t=document.querySelector("body");function n(){e.mobileMenu.classList.toggle("is-hidden"),e.hiddenElementBurger.classList.toggle("is-hidden"),e.hiddenElementButton.classList.toggle("is-hidden")}function o(){bodyScrollLock.enableBodyScroll(t)}e.openMobileMenuBtn.addEventListener("click",n),e.openMobileMenuBtn.addEventListener("click",(function(){bodyScrollLock.disableBodyScroll(t)})),e.closeMobileMenuBtn.addEventListener("click",n),e.closeMobileMenuBtn.addEventListener("click",o),e.menuList.addEventListener("click",n),e.menuList.addEventListener("click",o)})();const e=document.querySelector("body");function t(){bodyScrollLock.enableBodyScroll(e)}$(".js-open-modal").click((function(){event.preventDefault();var t=$(this).attr("data-modal");$('.js-modal[data-modal="'+t+'"]').addClass("is-shown"),$(".js-modal-overlay").addClass("is-shown"),bodyScrollLock.disableBodyScroll(e)})),$(".js-modal-close").click((function(){$(this).parent(".js-modal").removeClass("is-shown"),$(".js-modal-overlay").removeClass("is-shown"),t()})),$(".js-modal-overlay").click((function(){$(".js-modal.is-shown").removeClass("is-shown"),$(this).removeClass("is-shown"),t()})),document.querySelectorAll(".readMore").forEach((e=>{e.addEventListener("click",(function(){var e,t,n;e=document.getElementById("dots"),t=document.getElementById("more"),n=document.getElementById("btn"),"none"===e.style.display?(e.style.display="inline",n.innerHTML="read more",t.style.display="none"):(e.style.display="none",n.innerHTML="hide",t.style.display="inline")}))})),document.querySelectorAll(".readMoreFirst").forEach((e=>{e.addEventListener("click",(function(){var e,t,n;e=document.getElementById("dotsFirst"),t=document.getElementById("moreFirst"),n=document.getElementById("btnFirst"),"none"===e.style.display?(e.style.display="inline",n.innerHTML="read more",t.style.display="none"):(e.style.display="none",n.innerHTML="hide",t.style.display="inline")}))})),document.querySelectorAll(".readMoreSecond").forEach((e=>{e.addEventListener("click",(function(){var e,t,n;e=document.getElementById("dotsSecond"),t=document.getElementById("moreSecond"),n=document.getElementById("btnSecond"),"none"===e.style.display?(e.style.display="inline",n.innerHTML="read more",t.style.display="none"):(e.style.display="none",n.innerHTML="hide",t.style.display="inline")}))}));const n=document.querySelectorAll('a[href*="#"]');for(let e of n)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})}));document.querySelector(".button-arrow").onclick=function(){document.querySelector(".info-hero__secret-box").classList.toggle("active")};const o=document.querySelector(".scroll-top");window.addEventListener("scroll",(()=>{(window.pageYOffset||document.documentElement.scrollTop)>300?o.classList.add("scroll-top--active"):o.classList.remove("scroll-top--active")})),o.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.db6ba637.js.map
