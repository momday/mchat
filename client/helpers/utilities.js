
//A variable withouth the keyword var is global variable.
// This global function resize the content of a grid-stack-content element
// given its id (with the # sign eg: #qwrwsll12 )
// TODO: Figure out the correct mininumHeight value.
//
//
adjustGridStackContent = function (elementId) {

        var mininumHeight = 200;

        // Tiny trick in case there is no elementId
        // then just add an empty space and this function
        // will go over all the grid-stack-item
        var prefix = "";
        if (elementId) {
            prefix = elementId + " ";
        }

        var totalHeight = $(prefix  +  ".grid-stack-item-content").height();
        if (totalHeight <= mininumHeight) {
            var headHeight  = 20;
            var tailHeight  = 20;
            totalHeight = mininumHeight;
            var fillRemaining = totalHeight - headHeight - tailHeight - 15;
        } else {
            var headHeight  = $(prefix  +  ".grid-stack-item-content .header").height();
            var tailHeight  = $(prefix  +  ".grid-stack-item-content .tail").height();
            var fillRemaining = totalHeight - headHeight - tailHeight - 15;
        }

        /*console.log('totalHeight= ' + totalHeight);
        console.log('headHeight= ' + headHeight);
        console.log('tailHeight= ' + tailHeight);
        console.log('fillRemaining: ' + fillRemaining);*/

        $(prefix  +  ".grid-stack-item-content .content").css('height',fillRemaining);
}
