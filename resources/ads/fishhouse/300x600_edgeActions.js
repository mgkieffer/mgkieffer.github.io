
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15000,function(sym,e){sym.i=sym.i?(sym.i-1):2;(sym.i>0)?sym.play(0):sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ClickTag}","click",function(sym,e){window.openAndTrack('default','http://greatsouthernrestaurants.com/2016/03/4th-annual-fish-house-beer-festival/')});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-9765158");