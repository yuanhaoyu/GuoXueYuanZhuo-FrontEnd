import React from 'react'
import AppBar from 'material-ui/AppBar';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class Test extends React.Component{
  render(){
    return(
        <AppBar
    title="name"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
    )
  }

}

export default Test
