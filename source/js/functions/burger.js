import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import { getHeaderHeight } from '../functions/header-height';
import vars from '../_vars';
import {toggleCustomClass, removeCustomClass, toggleClassInArray, removeClassInArray} from '../functions/customFunctions'

const {overlay, burger, mobileMenu,links} = vars;

links.map( function(link){
  link.addEventListener('click', function(e){
    hideMenuHandler(overlay,mobileMenu,burger);
  })
})

const mobileMenuHandler = function(overlay, mobileMenu, burger) {
  burger.map( function(btn){
    btn.addEventListener('click', function(){
      toggleCustomClass(mobileMenu, 'active');
      toggleClassInArray(burger, 'active');
      toggleCustomClass(overlay, 'active');
      getHeaderHeight();

      if(btn.classList.contains('active')){
        disableScroll()
      } else{
        enableScroll()
      }
    })
  })
}

const hideMenuHandler = function(overlay, mobileMenu, burger) {
    removeCustomClass(mobileMenu,'active');
    removeClassInArray(burger, 'active');
    removeCustomClass(overlay,'active');
    enableScroll()
}

if (overlay) {
  mobileMenuHandler(overlay,mobileMenu,burger);
  overlay.addEventListener('click', function(e){
    if (e.target.classList.contains('overlay')) {
      hideMenuHandler(overlay,mobileMenu,burger)
    }
  });
}








