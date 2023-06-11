import { Component } from "react";
import PostTop from "./PostTop";
import Post from "./PostSection/post";
import PostPopup from "./PostPopup";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentDidMount() {
    const that = this;
    fetch("http://localhost:8000/api/v1/post/all")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        that.setState({ posts: data.data });
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  render() {
    return (
      <div class="content col-lg-6 col-md-8 no-pd">
        <div class="main-ws-sec">
          <PostTop />

          <div class="posts-section">
            {/* .filter((posts=>posts.location=="kathmandu")) */}

            {this.state.posts.map((post, i) => {
              return <Post key={i} postData={post} />;
            })}
          </div>
        </div>
        <PostPopup/>
      </div>
    );
  }
}
export default Content;
