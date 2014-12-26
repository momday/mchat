
//A variable withouth the keyword var is global variable.
// This global function resize the content of a grid-stack-content element
// given its id (with the # sign eg: #qwrwsll12 )
adjustGridStackContent = function (elementId) {

        // Tiny trick in case there is no elementId
        // then just add an empty space and this function
        // will go over all the grid-stack-item
        var prefix = "";
        if (elementId) {
            prefix = elementId + " ";
        }

        var totalHeight = $(prefix  +  ".grid-stack-item-content").height();
        var headHeight  = $(prefix  +  ".grid-stack-item-content .header").height();
        var tailHeight  = $(prefix  +  ".grid-stack-item-content .tail").height();

        console.log('totalHeight= ' + totalHeight);
        console.log('headHeight= ' + headHeight);
        console.log('tailHeight= ' + tailHeight);

        var fillRemaining = totalHeight - headHeight - tailHeight - 15;
        console.log('fillRemaining: ' + fillRemaining);



        console.log(fillRemaining);
        $(prefix  +  ".grid-stack-item-content .content").css('height',fillRemaining);
}
