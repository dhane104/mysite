import { Component } from "react";
import Widget from "./Widget";
import About from "./About";
class RighttNav extends Component {
  render() {
    return (
      
       <div class="right-nav col-lg-3 pd-right-none no-pd">
                  <div class="right-sidebar">
                    <About name={this.props.name} />
                    <Widget />
                    
                    
                    <div class="widget suggestions full-width">
                      <div class="sd-title">
                        <h3>Most Viewed People</h3>
                        <i class="la la-ellipsis-v"></i>
                      </div>
                      <div class="suggestions-list">
                        <div class="suggestion-usd">
                          <img src="./images/s1.png" alt="" />
                          <div class="sgt-text">
                            <h4>Radhika Adhakari</h4>
                            <span>Graphic Designer</span>
                          </div>
                          <span><i class="la la-plus"></i></span>
                        </div>
                        <div class="suggestion-usd">
                          <img src="./images/s2.png" alt="" />
                          <div class="sgt-text">
                            <h4>prabin</h4>
                            <span>PHP Developer</span>
                          </div>
                          <span><i class="la la-plus"></i></span>
                        </div>
                        <div class="suggestion-usd">
                          <img src="./images/s3.png" alt="" />
                          <div class="sgt-text">
                            <h4>Poonam</h4>
                            <span>Wordpress Developer</span>
                          </div>
                          <span><i class="la la-plus"></i></span>
                        </div>
                        <div class="suggestion-usd">
                          <img src="./images/s4.png" alt="" />
                          <div class="sgt-text">
                            <h4>Bill Gates</h4>
                            <span>C &amp; C++ Developer</span>
                          </div>
                          <span><i class="la la-plus"></i></span>
                        </div>
                        <div class="suggestion-usd">
                          <img src="./images/s5.png" alt="" />
                          <div class="sgt-text">
                            <h4>Jessica William</h4>
                            <span>Graphic Designer</span>
                          </div>
                          <span><i class="la la-plus"></i></span>
                        </div>
                        <div class="suggestion-usd">
                          <img src="./images/s6.png" alt="" />
                          <div class="sgt-text">
                            <h4>ajit</h4>
                            <span>PHP Developer</span>
                          </div>
                          <span><i class="la la-plus"></i></span>
                        </div>
                        <div class="view-more">
                          <a href="./index.html#" title="">View More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
    );
  }
}
export default RighttNav;
