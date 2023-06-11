import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";
const USERINFO = {
  userid: 1,
  username: "dhane",
  display_name: "Dhane Shah",
  post: "intern",
  following_count: 25,
  follower_count:20,
  adress: "jadibuti,kathmandu",
  email: "dhanesha104@gmail.com",
  gender: "male",
  edu_qualifaction: "bachelor of computer application",
  is_full_time: true,
};
function App() {
  let company = "tech";
  let location = "ktm";
  return (
    <div className="wrapper">
       <Header loc={company} username={USERINFO.username} />
      <Main name={company} userdata={USERINFO} /> 
      {/*<Login />*/}
    </div>
  );
}

export default App;
