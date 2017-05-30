### Synopsis

A wrapper around **Button** component.

You can specify `restrictorNode` to guarantee that button title never overlap some html element.

Most useful for toolbars.

### Props Reference

| Name                           | Type                       | Description                                                                                                                                                                |
| ------------------------------ | :----------------------    | -----------------------------------------------------------                                                                                                                |
| isActive                       | bool                       | Emulate checkbox behaviour. Useful on toolbars with icons                                                                                                                  |
| altContent                     | node                       | Use it for temporary substitution of content if you want to save original button sizes. Useful for in-button spinners. Size **must** be smaller or equals original content |
| bgColor                        | string                     | Background color. Icon inherit this property                                                                                                                               |
| color                          | string                     | Text color. Icon inherit as **svg fill**                                                                                                                                   |
| className                      | string                     | Default behaviour                                                                                                                                                          |
| disabled                       | bool                       | If **true**, **onClick** property not fire and **TAB key** navigation skip the button                                                                                      |
| disablePaddingCompensation     | bool                       | If **svg** is specified, padding at **svg** side has half size for more beautiful look. This property disable it behaviour                                                 |
| label                          | string                     | Button text                                                                                                                                                                |
| contentPosition                | oneOf(['before', 'after']) | Specify position of **svg icon** and other children relative to label text                                                                                                 |
| style                          | object                     | Default behaviour                                                                                                                                                          |
| tabIndex                       | number                     | Default behaviour                                                                                                                                                          |
| svg                            | string                     | **svg** element string representation. Using as icon. Example: `<svg viewBox="0 0 120 120" version="1.1"><circle cx="60" cy="60" r="50"/></svg>`                           |
| svgSize                        | string                     | Size of the svg icon. Example: `48px`                                                                                                                                      |
| title                          | string                     | title                                                                                                                                                                      |
| restrictorNode                 | object                     | `restrictorNode` for title. Use for autopositioning long labels. See `https://github.com/OpusCapitaBES/js-react-ui-overlays` `StickyNode` component                        |

### IE supporter, be careful!

* IE has a problem with key-navigation by `TAB` key. It takes a focus on `<svg>` element. Fix: `<svg focusable="false">`. We recommend use carefully prepared `@opuscapita/ui-svg-icons` package.

### Code Example

```
<div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '24px' }}>
  <TitledButton 
    onClick={() => console.log('Cancel button click!')}
    label="Cancel" paper={_scope.state.options.isPaper}
  />
  <TitledButton 
    onClick={() => console.log('Save fired!')}
    color="#fff" 
    bgColor="#e70" 
    label="Save" 
    paper={_scope.state.options.isPaper} 
  />
  <TitledButton 
    label="Disabled"
    disabled={true}
    paper={_scope.state.options.isPaper}
  />
  <TitledButton 
    title="Show cart"
    svg={_scope.getIcon('shopping_cart')}
    paper={_scope.state.options.isPaper} 
  />
  <TitledButton
    bgColor="#66bb6a"
    color="#fff"
    label="Make Order"
    svg={_scope.getIcon('shopping_cart')}
    paper={_scope.state.options.isPaper}
  />
  <TitledButton 
    label="Find Products"
    svg={_scope.getIcon('search')}
    paper={_scope.state.options.isPaper}
  />
  <TitledButton
    bgColor="#333"
    color="#fff"
    contentPosition="before"
    label="Icon button"
    svg={_scope.getIcon('add_circle')}
    paper={_scope.state.options.isPaper}
  />
</div>

<div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '24px', paddingBottom: '100px' }}>
  <TitledButton
    title="Align left. Long text auto positioned"
    svg={_scope.getIcon('format_align_left')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
    restrictorNode={_scope.state.ref}
  />
  <TitledButton
    title="Align center"
    svg={_scope.getIcon('format_align_center')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
  />
  <TitledButton
    title="Align right"
    svg={_scope.getIcon('format_align_right')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
  />
  <TitledButton
    title="Justify content. Long text auto positioned."
    svg={_scope.getIcon('format_align_justify')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
    restrictorNode={_scope.state.ref}
  />
</div>
``` 

### Component Name

TitledButton

### License

Licensed by © 2017 OpusCapita

