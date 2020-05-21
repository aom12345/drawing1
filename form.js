class Form{
    constructor(){

    }
    display(){
        var draw="after";
        var title = createElement('h2')
    title.html("UNIVERSAL CANVAS");
    title.position(130, 0);
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(()=>{
    input.hide();
    title.hide();
    button.hide();
    draw="now";
    })
    }
}