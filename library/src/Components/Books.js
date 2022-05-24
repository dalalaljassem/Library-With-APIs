import BookList from "./BookList";
import BookCreateModal from "./BookCreateModal";
import { useState } from "react";

function Books() {
  return (
    <div class="col right shadow-lg p-3 mb-5 bg-body rounded-3">
      <div className="col-header">
        <BookCreateModal />
        <h3>Books</h3>
      </div>

      <BookList />
    </div>
  );
}

export default Books;
