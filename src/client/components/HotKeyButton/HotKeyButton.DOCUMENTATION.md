### Synopsis

HotKeyButton. 
In **IE** it looks normally, but hot keys behaviour is not supported.

### Props Reference

**You can pass all `Button` specific properties**

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| action | func | Callback fired on button press or hotkey press |
| eventType | oneOf(['keypress', 'keydown', 'keyup']) | Key event type when action fired. By default: `keyup` |
| hotKeys | arrayOf(string) | **Syntax:** `Key` or `Modifier+Key`. **Modifiers:** `Ctrl`,`Alt`. **Keys:** any non-modifier key. Chord sequences not supported. <kbd>Option</kbd> key on OSX equals <kbd>Alt</kbd> key on PC |
| **TODO targets** | arrayOf(DOMNode) | **Syntax:** `Key` or `Modifier+Key`. **Modifiers:** `Ctrl`,`Alt`. **Keys:** any non-modifier key. Chord sequences not supported. <kbd>Option</kbd> key on OSX equals <kbd>Alt</kbd> key on PC |
| **TODO targetsExcluded** | arrayOf(DOMNode) | **Syntax:** `Key` or `Modifier + Key`. **Modifiers:** `Ctrl`,`Alt`. **Keys:** any non-modifier key. Chord sequences not supported. <kbd>Option</kbd> key on OSX equals <kbd>Alt</kbd> key on PC |
| tipKeys | arrayOf(string) | Array of <kbd>key</kbd> codes, pressing on which, hot-key tip appeared. List of codes see here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code . By default: `ControlLeft, ControlRight, OSLeft, OSRight` |

### Code Example

```
<div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '24px' }}>
  <HotKeyButton 
    onClick={() => console.log('Cancel button click!')}
    label="Cancel" paper={_scope.state.options.isPaper}
    hotKeys={['Escape']}
  />
  <HotKeyButton 
    action={() => console.log('Save fired!')}
    color="#fff" 
    bgColor="#e70" 
    label="Save" 
    paper={_scope.state.options.isPaper} 
    hotKeys={['Ctrl + S']}
  />
  <HotKeyButton 
    label="Disabled"
    disabled={true}
    paper={_scope.state.options.isPaper}
  />
  <HotKeyButton 
    title="Show cart"
    svg={_scope.getIcon('shopping_cart')}
    paper={_scope.state.options.isPaper} 
    hotKeys={['Alt + G']}
  />
  <HotKeyButton
    bgColor="#66bb6a"
    color="#fff"
    label="Make Order"
    svg={_scope.getIcon('shopping_cart')}
    paper={_scope.state.options.isPaper}
  />
  <HotKeyButton 
    label="Find Products"
    svg={_scope.getIcon('search')}
    paper={_scope.state.options.isPaper}
    hotKeys={['Ctrl + Shift + F', 'Ctrl + /']}
  />
  <HotKeyButton
    bgColor="#333"
    color="#fff"
    contentPosition="before"
    hotKeys={['Ctrl + S']}
    label="Icon button"
    svg={_scope.getIcon('add_circle')}
    paper={_scope.state.options.isPaper}
  />
</div>

<div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '24px' }}>
  <HotKeyButton
    title="Align left"
    svg={_scope.getIcon('format_align_left')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
    hotKeys={['Ctrl + Shift + L']}
  />
  <HotKeyButton
    title="Align center"
    svg={_scope.getIcon('format_align_center')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
    hotKeys={['Ctrl + Shift + E']}
  />
  <HotKeyButton
    title="Align right"
    svg={_scope.getIcon('format_align_right')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
    hotKeys={['Ctrl + Shift + R']}
  />
  <HotKeyButton
    title="Justify content"
    svg={_scope.getIcon('format_align_justify')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
    hotKeys={['Ctrl + Shift + J']}
  />
</div>
``` 

### Contributors
*Write here contributor names/contacts*

[GIT REPOSITORY](http://buildserver.jcatalog.com/gitweb/?p=js-react-application-generator.git)

### Component Name

HotKeyButton

### License

Licensed by © 2016 OpusCapita

