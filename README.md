# cm-resize
Add a resize handle to your CodeMirror editor.

Based on an  [example](https://jsfiddle.net/mindplay/rs2L2vtb/2/) by [Rasmus Schultz](https://github.com/mindplay-dk) ([CodeMirror issue](https://github.com/codemirror/CodeMirror/issues/850)), with some extra options.

#### Demo

https://rawgit.com/Sphinxxxx/cm-resize/master/demo/index.html  
https://codepen.io/Sphinxxxx/pen/dVPXdX


## Getting Started

#### Installing

* NPM:

  + ```npm install cm-resize --save```
  + ```import cmResize from 'cm-resize';```

* ..or client-side `<script>`:

```html
<script src="https://unpkg.com/cm-resize@1"></script>
```

#### Usage

```javascript
var myCodeMirror = CodeMirror.fromTextArea(...);  //..or some other way to create a CodeMirror instance
cmResize(myCodeMirror);
```


## Options

```javascript
var handle = cmResize(myCodeMirror, {
    minWidth:  200,               //Minimum size of the CodeMirror editor.
    minHeight: 100,

    resizableWidth:  true,        //Which direction the editor can be resized (default: both width and height).
    resizableHeight: true,

    cssClass: 'cm-resize-handle', //CSS class to use on the *default* resize handle.
    handle:                       //An element to use as the handler instead of the default one (`cssClass` doesn't apply here).
});
```
