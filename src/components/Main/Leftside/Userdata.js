import { Component } from "react";

class Userdata extends Component {
  componentDidMount(){
    console.log(456);
  }
    componentWillMount(){
      console.log(123);
    }
  
  render() {
    return (
        <div class="user-data full-width">
                      <div class="user-profile">
                        <div class="username-dt">
                          <div class="usr-pic">
                            <img src={"./images/"+ this.props.userdata.username+"-pic.jpg"} alt="">
                                </img>
                          </div>
                        </div>
                        <div class="user-specs">
                          <h3>{this.props.userdata.display_name}</h3>
                          <span>{this.props.userdata.post}</span>
                        </div>
                      </div>
                      <ul class="user-fw-status">
                        <li>
                          <h4>Following</h4>
                          <span>{this.props.userdata.following_count}</span>
                        </li>
                        <li>
                          <h4>Followers</h4>
                          <span>{this.props.userdata.follower_count}</span>
                        </li>
                        
                        <li>
                          <h4>Email</h4>
                          <span>{this.props.userdata.email}</span>
                        </li>
                        <li>
                          <h4>Qualification</h4>
                          <span>{this.props.userdata.edu_qualifaction}</span>
                        </li>
                        <li>
                          <a href="./my-profile.html" title="">View Profile</a>
                        </li>
                      </ul>
      </div>
      

   );
 }  
}
export default Userdata;