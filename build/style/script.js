let burger =document.querySelector("nav > #burger-menu")
bar1=document.querySelector("#burger-menu > div:nth-child(1)")
bar2=document.querySelector("#burger-menu > div:nth-child(2)")
bar3=document.querySelector("#burger-menu > div:nth-child(3)")

menu=document.querySelector("#menu")

function toggleMenu(){
    console.log("Toggle")
    if(bar2.style.opacity!="0"){
        bar1.style.transform="translateY(+10px) rotateZ(45deg)"
        bar2.style.opacity="0"
        bar3.style.transform="translateY(-10px) rotateZ(-45deg)"

        menu.style.transform="none"
    }
    else{
        bar1.style.transform="none";
        bar2.style.transform="none";
        bar3.style.transform="none";

        bar2.style.opacity="1";
        
        menu.style.transform="translateX(100vw)"


    }
}
