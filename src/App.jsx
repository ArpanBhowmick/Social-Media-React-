import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import { useState } from "react";

function App() {

  const [selectedTab , setselectedTab] = useState("Home")

  return (
    
      <div className="app-container">
        <SideBar selectedTab ={selectedTab} setselectedTab = {setselectedTab}></SideBar>
        <div className="content">
        <Header></Header>     
        {selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
        
        <Footer></Footer>
        </div>
      </div>
    
  );
}

export default App;
