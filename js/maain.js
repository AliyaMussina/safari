const headerMenu = () => {

    const menu = document.querySelector(".main-header"),
    menuHeight = window.getComputedStyle(menu) .height,
    parentElement = menu�parentElement;
    let menuReplacer = document.createElement("div"),
    replaced;
    menuReplacer.style.height = menuHeight;
    window.addEventListener("scroll", () =>{
  
    let scrollHeight = parseint(menuHeight) / 2;
    if (window.pageYOffset >= scrollHeight){
    menu.classList.add("header");
    if ( ! replaced) {
    parentElement.prepend(menuReplacer);
    replaced = true;
}
}
    else {
    menu.classList.remove("header");
    if (replaced) {
    parentElement.removeChild(menuReplacer);
    replaced = false;
    }
}
    });
};
    try
    headerMenu();
    catch(err) {

    }