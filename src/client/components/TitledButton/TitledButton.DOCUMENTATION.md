### Synopsis

A wrapper around **Button** component. Adde

### Props Reference

**You can pass all `Button` specific properties**

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| title | string | title |

### Code Example

```
<div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '24px' }}>
  <TitledButton 
    onClick={() => console.log('Cancel button click!')}
    label="Cancel" paper={_scope.state.options.isPaper}
    hotKeys={['Escape']}
  />
  <TitledButton 
    action={() => console.log('Save fired!')}
    color="#fff" 
    bgColor="#e70" 
    label="Save" 
    paper={_scope.state.options.isPaper} 
    hotKeys={['Control + s']}
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
    hotKeys={['Alt + g']}
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
    hotKeys={['Control + Shift + f', 'Control + /']}
  />
  <TitledButton
    bgColor="#333"
    color="#fff"
    contentPosition="before"
    hotKeys={['Control + s + n']}
    label="Icon button"
    svg={_scope.getIcon('add_circle')}
    paper={_scope.state.options.isPaper}
  />
</div>

<div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '24px' }}>
  <TitledButton
    title="Align left"
    svg={_scope.getIcon('format_align_left')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
    hotKeys={['Control + Shift + l']}
  />
  <TitledButton
    title="Align center"
    svg={_scope.getIcon('format_align_center')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
    hotKeys={['Control + Shift + e']}
  />
  <TitledButton
    title="Align right"
    svg={_scope.getIcon('format_align_right')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
    hotKeys={['Control + Shift + r']}
  />
  <TitledButton
    title="Justify content"
    svg={_scope.getIcon('format_align_justify')}
    svgSize="24px"
    paper={_scope.state.options.isPaper} 
    hotKeys={['Control + Shift + j']}
  />
</div>
``` 

### Contributors
Kirill Volkovich

### Component Name

TitledButton

### License

Licensed by © 2016 OpusCapita

