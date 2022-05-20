import "./App.css";
// import memberStore from "./Stores/memberStore";
import MemberList from "./Components/MemberList";
import MemberCreateModal from "./Components/MemberCreateModal";
import BookList from "./Components/BookList";
import BookCreateModal from "./Components/BookCreateModal";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  return (
    // big div
    <div className="App">
      <h1>Library System</h1>
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

            <div class="input-group rounded">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                // aria-describedby="search-addon"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="filter-div">
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Action">Action</option>
                <option value="Sci-fi">Sci-Fi</option>
                <option value="Romance">Romance</option>
                <option value="Fiction">Fiction</option>
                <option value="Self-Help">Self-Help</option>
                <option value="Thriller">Thriller</option>
                <option value="Suspense">Suspense</option>
                <option value="Biography">Biography</option>
                <option value="Buisness">Business</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Crime">Crime</option>
              </select>
            </div>
            <BookList query={query} genre={genre} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
