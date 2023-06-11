import { Component } from "react";

class Login extends Component {
  postUser(event) {
    event.preventDefault();
    let form = event.target.closest(".signup-form");
    const userData = {
      email: form.querySelector("#uemail").value,
      password: form.querySelector("#upassword").value,
    };
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="sign-in-page">
          <div className="signin-popup">
            <div className="signin-pop">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cmp-info">
                    <div className="cm-logo">
                      <img src="images/kmclogo.png" alt="" />
                      <p>
                        KMC, is a global freelancing platform and social
                        networking where businesses and independent
                        professionals connect and collaborate remotely
                      </p>
                    </div>
                    <img
                      src="images/cm-main-img.png"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="login-sec">
                    <ul className="sign-control">
                      <li data-tab="tab-1" className="current">
                        <a href="#" title="">
                          Sign in
                        </a>
                      </li>
                      <li data-tab="tab-2">
                        <a href="#" title="">
                          Sign up
                        </a>
                      </li>
                    </ul>
                    <div className="sign_in_sec current" id="tab-1">
                      <h3>Sign in</h3>
                      <form>
                        <div className="row">
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input
                                type="text"
                                name="username"
                                placeholder="Username"
                              />
                              <i className="la la-user"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                              />
                              <i className="la la-lock"></i>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="checky-sec">
                              <div className="fgt-sec">
                                <input type="checkbox" name="cc" id="c1" />
                                <label htmlFor="c1">
                                  <span></span>
                                </label>
                                <small>Remember me</small>
                              </div>
                              <a href="#" title="">
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <button type="submit" value="submit">
                              Sign in
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="login-resources">
                        <h4>Login Via Social Account</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="fb">
                              <i className="fa fa-facebook"></i>Login Via
                              Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="tw">
                              <i className="fa fa-twitter"></i>Login Via Twitter
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sign_in_sec" id="tab-2">
                      <div className="signup-tab">
                        <i className="fa fa-long-arrow-left"></i>
                        <h2>johndoe@example.com</h2>
                        <ul>
                          <li data-tab="tab-3" className="current">
                            <a href="#" title="">
                              User
                            </a>
                          </li>
                          <li data-tab="tab-4">
                            <a href="#" title="">
                              Company
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="dff-tab current" id="tab-3">
                        <form className="signup-form">
                          <div className="row">
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input
                                  type="text"
                                  name="name"
                                  id="fname"
                                  placeholder="Full Name"
                                />
                                <i className="la la-user"></i>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input
                                  type="email"
                                  name="name"
                                  id="uemail"
                                  placeholder="Email"
                                />
                                <i className="la la-email"></i>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input
                                  type="text"
                                  name="country"
                                  placeholder="Country"
                                />
                                <i className="la la-globe"></i>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <select>
                                  <option>Category</option>
                                  <option>Category 1</option>
                                  <option>Category 2</option>
                                  <option>Category 3</option>
                                  <option>Category 4</option>
                                </select>
                                <i className="la la-dropbox"></i>
                                <span>
                                  <i className="fa fa-ellipsis-h"></i>
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input
                                  type="password"
                                  name="password"
                                  placeholder="Password"
                                />
                                <i className="la la-lock"></i>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input
                                  type="password"
                                  id="upassword"
                                  name="repeat-password"
                                  placeholder="Repeat Password"
                                />
                                <i className="la la-lock"></i>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="checky-sec st2">
                                <div className="fgt-sec">
                                  <input type="checkbox" name="cc" id="c2" />
                                  <label htmlFor="c2">
                                    <span></span>
                                  </label>
                                  <small>
                                    Yes, I understand and agree to the workwise
                                    Terms &amp; Conditions.
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <button
                                type="submit"
                                value="submit"
                                onClick={this.postUser}
                              >
                                Get Started
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="dff-tab" id="tab-4">
                        <form>
                          <div className="row">
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input
                                  type="text"
                                  name="company-name"
                                  placeholder="Company Name"
                                />
                                <i className="la la-building"></i>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input
                                  type="text"
                                  name="country"
                                  placeholder="Country"
                                />
                                <i className="la la-globe"></i>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input
                                  type="password"
                                  name="password"
                                  placeholder="Password"
                                />
                                <i className="la la-lock"></i>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input
                                  type="password"
                                  name="repeat-password"
                                  placeholder="Repeat Password"
                                />
                                <i className="la la-lock"></i>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="checky-sec st2">
                                <div className="fgt-sec">
                                  <input type="checkbox" name="cc" id="c3" />
                                  <label htmlFor="c3">
                                    <span></span>
                                  </label>
                                  <small>
                                    Yes, I understand and agree to the workwise
                                    Terms &amp; Conditions.
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <button type="submit" value="submit">
                                Get Started
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footy-sec">
            <div className="container">
              <ul>
                <li>
                  <a href="help-center.html" title="">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="about.html" title="">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Career
                  </a>
                </li>
                <li>
                  <a href="forum.html" title="">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Language
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Copyright Policy
                  </a>
                </li>
              </ul>
              <p>
                <img src="images/copy-icon.png" alt="" />
                Copyright 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
