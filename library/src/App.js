import "./App.css";
// import memberStore from "./Stores/memberStore";
import MemberList from "./Components/MemberList";
import MemberCreateModal from "./Components/MemberCreateModal";
import BookList from "./Components/BookList";
import BookCreateModal from "./Components/BookCreateModal";
import { useState } from "react";

function App() {
  return (
    // big div
    <div className="App">
      <div className="headerbg">
        <h1>Library System</h1>
      </div>

      <br></br>
      <div class="container">
        <div class="row">
          <div class="col left shadow-lg p-3 mb-5 bg-body rounded-3">
            <div className="col-header">
              <MemberCreateModal />
              <h3>Members</h3>
            </div>
            <MemberList />
          </div>
          <div class="col right shadow-lg p-3 mb-5 bg-body rounded-3">
            <div className="col-header">
              <BookCreateModal />
              <h3>Books</h3>
            </div>

            <BookList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
