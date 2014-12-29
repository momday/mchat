
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

        var gridstackHeight = $(prefix  +  ".grid-stack-item-content").height();
        var totalHeight = $(prefix  +  ".grid-stack-item-content").height();
        if (totalHeight <= mininumHeight) {
            // Those values are temporary.
            // TODO: need to figure out the right value
            var headHeight  = 40;
            var tailHeight  = 40;
            totalHeight = mininumHeight;
            var fillRemaining = totalHeight - headHeight - tailHeight - 15;
        } else {
            var headHeight  = 41; //$(prefix  +  ".grid-stack-item-content .panel-heading").height(); + 2*10;
            var tailHeight  = 51; //$(prefix  +  ".grid-stack-item-content .panel-footer").height(); + 2*10;
            var draggable   = 25; //$(prefix  +  ".grid-stack-item .ui-resizable-handle").height();


            var fillRemaining = totalHeight - headHeight - tailHeight - draggable;
            //fillRemaining = 100;
        }

        console.log('grid-stack-item height: ' + gridstackHeight);
        console.log('totalHeight= ' + totalHeight);
        console.log('headHeight= ' + headHeight);
        console.log('tailHeight= ' + tailHeight);
        console.log('draggable= ' + draggable);
        console.log('fillRemaining: ' + fillRemaining);

        $(prefix  +  ".grid-stack-item-content .panel-body").css('height',fillRemaining);
}
