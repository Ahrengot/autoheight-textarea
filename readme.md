[![NPM](https://nodei.co/npm/autoheight-textarea.png?compact=true)](https://npmjs.org/package/autoheight-textarea)

**autoheight-textarea** is a small (7kb gzipped) HTML5 [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) wrapper around textarea elements that will automatically resize itself as the user types. 

It works everywhere, because it's implemented as a custom element. Including: Virtual DOM's (React, Elm, etc.), server-side rendered HTML and, of course, good old index.html files.

The component will respect any minimum height set on the textarea via the `rows` attribute.

## Demo
![Example gif](https://user-images.githubusercontent.com/391810/68760200-9e674480-0611-11ea-99a1-8bd57bfc764d.gif)

**Code sandboxes**

- Basic HTML: https://codesandbox.io/s/unruffled-http-2vm4c
- React.js: https://codesandbox.io/s/misty-violet-p1jwb


## Example usage

For any of the following examples, all you need to do is include the script. For example, you could add this to the top of your main JS file:

```JavaScript
import "autoheight-textarea";

// Your code here... React, jQuery, whatever
```

**React**
```JavaScript
const App = () => {
  return (
    <autoheight-textarea>
      <textarea rows={4} placeholder="Type something..." />
    </autoheight-textarea>
  );
}
```

**HTML / PHP**
```HTML
<autoheight-textarea>
  <textarea placeholder="Type something..." rows="4"></textarea>
</autoheight-textarea>
```

**Elm**
```Elm
Html.node "autoheight-textarea" [] [ 
    textarea [ placeholder "Type something..." , rows 4 ] [] 
  ]
```

Feel free to add any other elements inside of the autoheight-textarea node. For instance, you could implement a Bootstrap textarea with form help text like so:

```HTML
<div class="form-group">
  <autoheight-textarea>
    <label for="my_textarea">Example textarea</label>
    <textarea class="form-control" id="my_textarea" rows="4"></textarea>
    <small class="form-text text-muted">This is what a Bootstrap textarea looks like</small>
  </autoheight-textarea>
</div>
```

Why would you do that? Mostly because it makes things easier to select with CSS. For instance you might want to hide the help text until the textarea has focus.
```CSS
textarea:not(:focus) + .form-text {
  display: none;
}
```

## Browser support

All major browsers — including IE11.

This package uses [@webcomponents/custom-elements](https://www.npmjs.com/package/@webcomponents/custom-elements) under the hood.