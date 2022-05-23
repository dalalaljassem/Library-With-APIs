import { observer } from "mobx-react";
import memberStore from "../Stores/memberStore";
import MemberItem from "./MemberItem";
import React from "react";

function MemberList() {
  const memberList = memberStore.membersData.map((member) => (
    <MemberItem member={member} />
  ));
  // console.log(memberList);

  return (
    <div>
      {memberList}
      {/* <button onClick={createMember}></button> */}
    </div>
  );
}

export default observer(MemberList);
