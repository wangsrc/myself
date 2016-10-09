
<![CDATA[

//Cache Vairables
var clippedImage;
var cp;
var mycircle;
var greencircle;
var gMouseDown = 0;
var scaleFactor = 2.5;

//Start Up Event and get Ids
function startup(evt)
{
    clippedImage = document.getElementById("clippedI");
    cp = document.getElementById("clipgroup");
    mycircle = document.getElementById("clipcircle");
    greencircle = document.getElementById("greencircle");
}

//Set the eveent when the mouse moves over the element
// Detect whether the mouse is down or not
// Get the attributes of the clip circle and the green circle and change them.
// Call an resize function
function mouseMove(evt)
{
    if(!gMouseDown) return;

    var x = evt.clientX;
    var y = evt.clientY;

    mycircle.setAttributeNS(null,"cx", x);
    mycircle.setAttributeNS(null,"cy", y);

    greencircle.setAttributeNS(null,"cx", x);
    greencircle.setAttributeNS(null,"cy", y);

    resizeImage(x,y);
}

// Mouse is down
function mouseDown(evt)
{
    gMouseDown = 1;
}

// Mouse is not down
function mouseUp(evt)
{
    gMouseDown = 0;
}

// Resize and transform the content
function resizeImage(x,y)
{
    var newx = x - scaleFactor*x;
    var newy = y - scaleFactor*y;

    var tx = "translate(" + newx + "," + newy
        + "),scale(" + scaleFactor + "," + scaleFactor +")";
    clippedImage.setAttribute("transform", tx);
}

//]]>