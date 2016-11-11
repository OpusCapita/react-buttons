### Synopsis

Button react component

### Props Reference

| Name                          | Type                  | Description                                                |
| ------------------------------|:----------------------| -----------------------------------------------------------|
| altContent | node | Use it for temporary substitution of content if you want to save original button sizes. Useful for in-button spinners |
| bgColor | string | Background color. Icon inherit this property |
| color | string | Text color. Icon inherit as **svg fill** |
| className | string | Default behaviour |
| disabled | bool | If **true**, **onClick** property not fire and **TAB key** navigation skip the button |
| disablePaddingCompensation | bool | If **svg** is specified, padding at **svg** side has half size for more beautiful look. This property disable it behaviour |
| label | string | Button text |
| contentPosition | oneOf(['before', 'after']) | Specify position of **svg icon** and other children relative to label text |
| style | object | Default behaviour |
| tabIndex | number | Default behaviour |
| svg | string | **svg** element string representation. Using as icon. Example: `<svg viewBox="0 0 120 120" version="1.1"><circle cx="60" cy="60" r="50"/></svg>` |
| svgSize | string | Size of the svg icon. Example: `48px` |

### Code Example

```
<h5>Horizontal flat</h5>
<div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '24px' }}>
  <Button onClick={() => {'Cancel button click!'}} label="Cancel" />
  <Button color="#fff" bgColor="#e70" label="Apply" />
  <Button label="Disabled" disabled={true} />
  <Button svg={_scope.getIcon('shopping_cart')} />
  <Button
    bgColor="#66bb6a"
    color="#fff"
    svg={_scope.getIcon('shopping_cart')}
    svgSize="48px"
  />
  <Button label="Icon button" svg={_scope.getIcon('build')} />
  <Button
    bgColor="#333"
    color="#fff"
    contentPosition="before"
    label="Icon button"
    svg={_scope.getIcon('add_circle')}
  />
</div>

<h5>Vertical flat full-width</h5>
<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
  <Button onClick={() => {'Cancel button click!'}} label="Cancel" />
  <Button color="#fff" bgColor="#e70" label="Apply" />
  <Button label="Disabled" disabled={true} />
  <Button svg={_scope.getIcon('shopping_cart')} />
  <Button
    bgColor="#66bb6a"
    color="#fff"
    svg={_scope.getIcon('shopping_cart')}
    svgSize="48px"
  />
  <Button label="Icon button" svg={_scope.getIcon('build')} />
  <Button
    bgColor="#333"
    color="#fff"
    contentPosition="before"
    label="Icon button"
    svg={_scope.getIcon('add_circle')}
  />
</div>

<h5>Horizontal paper</h5>
<div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '24px' }}>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button onClick={() => {'Cancel button click!'}} label="Cancel" paper={true} />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button color="#fff" bgColor="#e70" label="Apply" paper={true} />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button label="Disabled" disabled={true} paper={true} />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button svg={_scope.getIcon('shopping_cart')} paper={true} />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button
      bgColor="#66bb6a"
      color="#fff"
      svg={_scope.getIcon('shopping_cart')}
      svgSize="48px"
      paper={true}
    />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button label="Icon button" svg={_scope.getIcon('build')} paper={true} />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button
      bgColor="#333"
      color="#fff"
      contentPosition="before"
      label="Icon button"
      svg={_scope.getIcon('add_circle')}
      paper={true}
    />
  </div>
</div>

<h5>Vertical paper</h5>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '24px' }}>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button onClick={() => {'Cancel button click!'}} label="Cancel" paper={true} />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button color="#fff" bgColor="#e70" label="Apply" paper={true} />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button label="Disabled" disabled={true} paper={true} />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button svg={_scope.getIcon('shopping_cart')} paper={true} />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button
      bgColor="#66bb6a"
      color="#fff"
      svg={_scope.getIcon('shopping_cart')}
      svgSize="48px"
      paper={true}
    />
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button label="Icon button" svg={_scope.getIcon('build')} paper={true}/>
  </div>
  <div style={{ display: 'inline-flex', margin: '8px' }}>
    <Button
      bgColor="#333"
      color="#fff"
      contentPosition="before"
      label="Icon button"
      svg={_scope.getIcon('add_circle')}
      paper={true}
    />
  </div>
</div>
```

### Contributors
Kirill Volkovich

### Component Name

Button

### License

Licensed by © 2016 OpusCapita

