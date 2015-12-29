/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Welcome = require('./welcome.ios');
var More = require('./more.ios');

var {
  AppRegistry,
  TabBarIOS,
  Component,
} = React;


class devdactic_tabs extends Component {
  constructor(props) {
   super(props);
   this.state = {
     selectedTab: 'welcome'
   };
 }

render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'welcome'}
          icon={{uri:'featured'}}
          title = 'Welcome'
          onPress={() => {
              this.setState({
                  selectedTab: 'welcome',
              });
          }}>
            <Welcome/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'more'}
          icon={{uri:'contacts'}}
          title = 'More'

          onPress={() => {
                this.setState({
                    selectedTab: 'more',
                });
          }}>
          <More/>

        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

}

AppRegistry.registerComponent('App', () => devdactic_tabs);
