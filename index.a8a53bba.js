var e;(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),$(".single-item").slick({dots:!0,arrows:!1}),$(".grid").masonry({itemSelector:".grid-item",stamp:".stamp",columnWidth:".grid-sizer",percentPosition:!1}),window.matchMedia("(min-width: 1200px)").matches?$(".grid").masonry({gutter:8}):window.matchMedia("(min-width: 768px)").matches?$(".grid").masonry({gutter:6}):window.matchMedia("(max-width: 767px)").matches&&$(".grid").masonry({gutter:2}),window.addEventListener("resize",(function(){window.matchMedia("(min-width: 1200px)").matches?$(".grid").masonry({gutter:8}):window.matchMedia("(min-width: 768px)").matches?$(".grid").masonry({gutter:6}):window.matchMedia("(max-width: 767px)").matches&&$(".grid").masonry({gutter:2})})),(()=>{const e={openMobileMenuBtn:document.querySelector("[data-mobile-menu-open]"),closeMobileMenuBtn:document.querySelector("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]")};function t(){e.mobileMenu.classList.toggle("is-hidden")}e.openMobileMenuBtn.addEventListener("click",t),e.closeMobileMenuBtn.addEventListener("click",t)})(),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null});
//# sourceMappingURL=index.a8a53bba.js.map
