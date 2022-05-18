import memberStore from "../Stores/memberStore";

function MemberItem({ member }) {
  return (
    <div>
      <p>{member.firstName}</p>
      <p>{member.lastNAme}</p>
      <p>{member.membership}</p>
    </div>
  );
}

export default MemberItem;
