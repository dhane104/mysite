import { Component } from "react";

class PostTop extends Component {
  render() {
    return (
<div class="post-topbar">
                      <div class="user-picy">
                        <img src="./images/dhane-pic.jpg" alt="" />
                      </div>
                      <div class="post-st">
                        <ul>
                          <li><a class="post_project" href="./index.html#" title="">Post a Project</a></li>
                          <li><a class="post-jb active" href="./index.html#" title="">Post a Job</a></li>
                          {/*<li><a class="test active" href="#" title="">test</a></li>*/}
                        </ul>
                      </div>
                    </div>
       );
    }
  }                 

export default PostTop;