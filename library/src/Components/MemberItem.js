import MemberDetailModal from "./MemberDetailModal";
import React from "react";

function MemberItem({ member }) {
  return (
    <div class="shadow member-item">
      <div className="item-img">
        <MemberDetailModal member={member} />
      </div>
      <div className="item-name">
        <p>
          Name : {member.firstName} {member.lastName}
        </p>
        <p>Membership : {member.membership}</p>
      </div>
    </div>
  );
}

export default MemberItem;
