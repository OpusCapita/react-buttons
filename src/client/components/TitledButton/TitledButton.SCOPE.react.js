import React, { Component } from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';
import Button from '../Button';

function requireAll(requireContext) {
  return requireContext.keys().map(key => ({
    name: key.replace(/(\.svg$|^\.\/)/gi, ''),
    svg: requireContext(key)
  }));
}

let icons = requireAll(require.context('!!raw-loader!opuscapita-ui-svg-icons/lib', true, /.*\.svg$/));

@showroomScopeDecorator
class TitledButtonSCOPE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons,
      containerStyle: {},
      options: {
        isPaper: false
      }
    };
  }

  getIcon(name) {
    return this.state.icons.find(icon => icon.name === name).svg
  }

  toggleOption(name) {
    this.setState({
      options: { ...this.state.options, [name]: !this.state.options[name] }
    });
  }

  render() {
    return (
      <div ref={ref => !this.state.ref && this.setState({ ref: ref })}>
        <div style={{ marginBottom: '24px' }}>
          <Button
            altContent={this.state.options.isPaper ? (
              <div style={{ display: 'flex', alignText: 'center', alignItems: 'center' }}>
                Disable Paper
              </div>
            ) : null}
            label="Enable Paper"
            onClick={() => this.toggleOption.call(this, 'isPaper')}
          />
        </div>
        <div>
          {this._renderChildren()}
        </div>
      </div>
    );
  }
}

export default TitledButtonSCOPE;
