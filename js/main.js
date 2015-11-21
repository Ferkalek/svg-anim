$(function(){
    var myVivus1 = new Vivus('icon-anim-1', {
        type: 'scenario',
        duration: 200,
        //delay: 100
    });

    var myVivus2 = new Vivus('icon-anim-2', {
        onReady: function (myVivus) {
            myVivus.el.setAttribute('width', '100%');
        },
        type: 'scenario',
        duration: 150,
        //delay: 100
    });

    var myVivus3 = new Vivus('icon-anim-3', {
        type: 'scenario',
        duration: 200,
        //delay: 100
    });


});