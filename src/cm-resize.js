import dragTracker from 'drag-tracker';


/* Inlined resize handle CSS */
document.documentElement.firstElementChild //<head>, or <body> if there is no <head>
    .appendChild(document.createElement('style')).textContent = '## PLACEHOLDER-CSS ##';


function cmResize(cm, config) {
    config = config || {};

    const minW = config.minWidth  || 200,
          minH = config.minHeight || 100,
          resizeW = (config.resizableWidth  !== false),
          resizeH = (config.resizableHeight !== false),
          css = config.cssClass || 'cm-resize-handle';

    const cmElement = cm.display.wrapper,
          cmHandle = config.handle || (function() {
              const h = cmElement.appendChild(document.createElement('div'));
              h.className = css;
              return h;
          })();

    let startPos, startSize;
    dragTracker({
        //Might be a different parent container if we were given a custom handler element..
        //  container: cmElement,
        container: cmElement.offsetParent,
        selector: cmHandle,

        callbackDragStart: (handle, pos) => {
            startPos = pos;
            startSize = [cmElement.clientWidth, cmElement.clientHeight];
        },
        callback: (handle, pos) => {
            const diffX = pos[0] - startPos[0],
                  diffY = pos[1] - startPos[1],
                  cw = resizeW ? Math.max(minW, startSize[0] + diffX) : null,
                  ch = resizeH ? Math.max(minH, startSize[1] + diffY) : null;

            cm.setSize(cw, ch);
            
            //Leave room for our default handle when only one scrollbar is visible:
            if(!config.handle) {
                cmElement.querySelector('.CodeMirror-vscrollbar').style.bottom ='18px';
                cmElement.querySelector('.CodeMirror-hscrollbar').style.right = '18px';
            }
        },
    });

    return cmHandle;
}


export default cmResize;
