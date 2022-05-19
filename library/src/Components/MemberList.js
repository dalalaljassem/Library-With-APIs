import { observer } from "mobx-react";
import memberStore from "../Stores/memberStore";
import MemberItem from "./MemberItem";

function MemberList() {
  const memberList = memberStore.membersData.map((member) => (
    <MemberItem member={member} />
  ));
  // console.log(memberList);

  return (
    <div>
      <p>{memberList}</p>
      {/* <button onClick={createMember}></button> */}
    </div>
  );
}

export default observer(MemberList);
