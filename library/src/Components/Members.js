import MemberList from "./MemberList";
import MemberCreateModal from "./MemberCreateModal";
import React from "react";

function Members() {
  return (
    <div class="col left shadow-lg p-3 mb-5 bg-body rounded-3">
      <div className="col-header">
        <MemberCreateModal />
        <h3>Members</h3>
      </div>
      <MemberList />
    </div>
  );
}

export default Members;
