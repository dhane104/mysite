import { Component } from "react";
import Details from "./Details";
import Suggestions from "./Suggestions";
import Userdata from "./Userdata";
class LeftNav extends Component {
  render() {
    return (
      <div class="left-nav col-lg-3 col-md-4 pd-left-none no-pd">
        <div class="main-left-sidebar no-margin">
          <Userdata userdata={this.props.userdata2} />
          <Suggestions />
          <Details company={this.props.name} />
        </div>
      </div>
    );
  }
}
export default LeftNav;
