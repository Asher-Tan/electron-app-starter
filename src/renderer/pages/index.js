// import { remote } from "electron";
import React from "react";
const electron = window.require("electron")
const { test } =  electron.remote.getGlobal("services");

// export default () => <div>Index Page { test.fuck() }</div>


class IndexPage extends React.Component {
  constructor () {
    super()
    this.state = {
      t: 0
    }
  }
  componentDidMount() {
    // const t = await test.asyncFuck(2001);
    test.asyncFuck(2001).then( (data) => {
      this.setState({
        t: data
      })
    })

    // const res = test.asyncFuck(20001)
    // this.setState({t: res})

  }
  render() {
    return (
      <div>Index Page { this.state.t }</div>
    )
  }
}

export default IndexPage;
