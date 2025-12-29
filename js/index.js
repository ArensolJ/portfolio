const navCheckBox = document.getElementById("navCheckBox");
const navDropDown = document.getElementById("navDropDownItem");
const navLabel = document.getElementById("navLabel");
function onNavClick(e) {
     if(!navCheckBox.contains(e.target) && 
        !navDropDown.contains(e.target) && 
        !navLabel.contains(e.target)
    ){
        navCheckBox.checked = false;
        window.removeEventListener('click', onNavClick);
    }

}

navCheckBox.addEventListener('change', () => {
    if(navCheckBox.checked){
       window.addEventListener('click', onNavClick);
       return;
    }

    window.removeEventListener('click', onNavClick);
})

const eye = document.querySelector('.mouse-interaction');
eye.addEventListener('mousemove', (e) => {
    

    const { innerWidth, innerHeight } = window;

    // Normalize mouse position (-1 to 1)
    const x = (e.clientX / innerWidth - 0.5) * 1;
    const y = (e.clientY / innerHeight - 0.5) * 1;

    // Limit movement (subtle!)
    const maxMove = 8;

    eye.style.transform = `translate(${x * maxMove}px, ${y * maxMove}px)`;
});
