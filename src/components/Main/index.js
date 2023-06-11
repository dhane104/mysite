import React from "react";
import LeftNav from "./Leftside";
import Content from "./Content";
import RightNav from "./Rightside";
class Main extends React.Component {
  render() {
    return (
      <main>
        <div class="main-section">
          <div class="container">
            <div class="main-section-data">
              <div class="row">
                <LeftNav name={this.props.name} userdata2={this.props.userdata} />
                <Content/>
                <RightNav name={this.props.name} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
