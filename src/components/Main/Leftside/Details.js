import { Component } from "react";
class Details extends Component {
  render() {
    return (
      
        <div class="tags-sec full-width">
        <ul>
          <li>
            <a href="./index.html#" title="">
              Help Center
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              About
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Community Guidelines
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Cookies Policy
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Career
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Language
            </a>
          </li>
          <li>
            <a href="./index.html#" title="">
              Copyright Policy
            </a>
          </li>
        </ul> <h1>{this.props.name}</h1>
        <div class="cp-sec">
          <img src="./images/logo2.png" alt="" />
          <p>
            <img src="./images/cp.png" alt="" />
         
            Copyright 2019
          </p>
        </div>
      </div>
    );
  }
}
export default Details;