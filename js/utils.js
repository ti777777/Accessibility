
function SetFontSize(size){
    var fontSize;
    switch(size){
        case "big":
            fontSize="20px";
            break;
        case "medium":
            fontSize="18px";
            break;
        case "small":
            fontSize="16px";
            break;
    }
    document.querySelector("*").style.fontSize=fontSize;
}
var KeyDownList=[];
window.addEventListener("keydown",function(e){
    KeyDownList.push(e.key.toLowerCase());
    if(KeyDownList.includes('alt')&&KeyDownList.includes('u')){
        this.location.href="#header";
        this.document.querySelector("a[href='#header']").focus();
        this.window.scrollTo(0,0);
    }
    else if(KeyDownList.includes('alt')&&KeyDownList.includes('c')){
        this.location.href="#main";
        this.document.querySelector("a[href='#main']").focus();
        this.window.scrollTo(0,80);
    }
    else if(KeyDownList.includes('alt')&&KeyDownList.includes('l')){
        this.location.href="#aside";
        this.document.querySelector("a[href='#aside']").focus();
        this.window.scrollTo(0,80);
    }
    else if(KeyDownList.includes('alt')&&KeyDownList.includes('z')){
        this.location.href="#footer";
        this.document.querySelector("a[href='#footer']").focus();
        window.scrollTo(0,document.body.scrollHeight);
    }
    else{

    }
});
window.addEventListener("keyup",function(e){
    while(KeyDownList.includes(e.key.toLowerCase())){
        KeyDownList.splice( KeyDownList.indexOf(e.key.toLowerCase()), 1 );
    }

});