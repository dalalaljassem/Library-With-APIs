import "./App.css";
// import memberStore from "./Stores/memberStore";
import MemberList from "./Components/MemberList";
import MemberCreateModal from "./Components/MemberCreateModal"

function App() {
  return (
    // big div
    <div className="App"> 

    <h1>Library System</h1>
    <br></br>
<div class="container"> 
  <div class="row">
  <div class="col left">  
  <MemberCreateModal/> 
   <MemberList />
  </div>
  <div class="col right" >
    <p>book</p>
    {/* books */}
  </div>
</div>
</div> 
    </div>
  );
}

export default App;
