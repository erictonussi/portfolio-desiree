'use strict';

var querySelector = document.querySelector.bind(document);
var _last_target = [];

function toggleContent(e, target) {
    e.stopImmediatePropagation();
    
    var obj = querySelector(target);
    var obj_chd = obj.children[0];
    
    if ( obj.getBoundingClientRect().height == 0 ) {
        _last_target.push(target);
        obj.style.height = obj_chd.getBoundingClientRect().height + 'px';
        window.addEventListener( 'click' , untoggle );
    } else {
        _last_target.pop();
        
        obj.style.height = null;
        
        if ( !_last_target.length )
            window.removeEventListener( 'click' , untoggle );
    }
    
}

function untoggle(ev) {
    if ( ev.target.href ) return;
    
    toggleContent(ev, _last_target[_last_target.length-1]);
}
