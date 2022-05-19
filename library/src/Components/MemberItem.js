import memberStore from "../Stores/memberStore";

function MemberItem({ member }) {
  return (
    <div>
      <div className="name">
     <p> Name : {member.firstName} {member.lastName}</p> 
     <p>Membership : {member.membership}</p>
      </div>
    </div>
  );
}

export default MemberItem;
