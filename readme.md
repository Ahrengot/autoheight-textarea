# autoheight-textarea

[![NPM](https://nodei.co/npm/autoheight-textarea.png?compact=true)](https://npmjs.org/package/autoheight-textarea)

**autoheight-textarea** is a small (7kb gzipped) HTML5 [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) wrapper around textarea elements that will automatically resize itself as the user types. 

It works everywhere, because it's implemented as a custom element. Including: Virtual DOM's (React, Elm, etc.), server-side rendered HTML and, of course, good old index.html files.

The component will respect any minimum height set on the textarea via the `rows` attribute.

### Demo
![Example gif](https://user-images.githubusercontent.com/391810/68722016-7e556800-05b4-11ea-8f14-b3b117780dd6.gif)

**Code sandboxes**

- Basic HTML: https://codesandbox.io/s/unruffled-http-2vm4c
- React.js: https://codesandbox.io/s/misty-violet-p1jwb


## Example usage

For any of the following examples, you just need to include the script on your page. For example, you could add this to your index.js file:

```JavaScript
import "autoheight-textarea";

// Your code here... React, jQuery, whatever
```

**React**
```JavaScript
import "autoheight-textarea";

const App = () => {
  return (
    <div className="container">
      <autoheight-textarea>
        <textarea rows={4} placeholder="Type something..." />
      </autoheight-textarea>
    </div>
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
Html.node "autoheight-textarea"
    []
    [ textarea
        [ id "comment-input-field"
        , rows 4
        , placeholder "Type something..."
        ]
        []
    ]
```

## Browser support

This package uses the [@webcomponents/custom-elements](https://www.npmjs.com/package/@webcomponents/custom-elements) package under the hood which is compatible with all major browsers, including IE11.