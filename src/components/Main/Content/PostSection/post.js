import { Component } from "react";
class Post extends Component{
    render(){
        const{userprofile,post_by,post,is_full_time,views, like_count,description,comnt, pay_rate,location, skills,active,option1,option2,option3,option4,option5}= this.props.postData;
        return(
<div class="post-bar">
                        <div class="post_topbar">
                          <div class="usy-dt test2">
                            <img src={userprofile}alt="" />
                            <div class="usy-name">
                              <h3>{post_by}</h3>
                              <span>{active}</span>
                            </div>
                          </div>
                          <div class="ed-opts">
                            <a href="./index.html#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                            <ul class="ed-options">
                              <li><a href="./index.html#" title="">{option1}</a></li>
                              <li><a href="./index.html#" title="">{option2}</a></li>
                              <li><a href="./index.html#" title="">{option3}</a></li>
                              <li><a href="./index.html#" title="">{option4}</a></li>
                              <li><a href="./index.html#" title="">{option5}</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="epi-sec">
                          <ul class="descp">
                            <li><img src="./images/icon8.png" alt="" /><span>{post}</span></li>
                            <li><img src="./images/icon9.png" alt="" /><span>{location}</span></li>
                          </ul>
                          <ul class="bk-links">
                            <li>
                              <a href="./index.html#" title=""></a>
                            </li>
                            <li>
                              <a href="./index.html#" title=""></a>
                            </li>
                          </ul>
                        </div>
                        <div class="job_descp">
                          <h3>{post}</h3>
                          <ul class="job-dt">
                            <li><a href="./index.html#" title="">{is_full_time}</a></li>
                            <li><span>{pay_rate}</span></li>
                          </ul>
                          <p>{description}<a href="./index.html#" title="">view more</a></p>
                          <ul class="skill-tags">
                            {skills.map((skills,i)=>{
                              
                         
                              return(<li><a href="./index.html#" title="">{skills}</a></li>)
                            })
                          }
                        
                          </ul>
                        </div>
                        <div class="job-status-bar">
                          <ul class="like-com">
                            <li>
                              <a href="./index.html#"><i class="fas fa-heart"></i> </a>
                              <img src="./images/liked-img.png" alt="" />
                              <span>{like_count}</span>
                            </li>
                            <li>
                              <a href="./index.html#" class="com"><i class="fas fa-comment-alt"></i> {comnt}</a>
                            </li>
                          </ul>
                          <a href="./index.html#"><i class="fas fa-eye"></i>{views}</a>
                        </div>
                      </div>
        )
    }
}
export default Post;