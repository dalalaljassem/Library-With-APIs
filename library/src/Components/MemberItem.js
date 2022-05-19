import MemberDetailModal from "./MemberDetailModal";

function MemberItem({ member }) {

  return (
    <div>
      <MemberDetailModal member={member}/>
      <div className="name" >
     <p> Name : {member.firstName} {member.lastName}</p> 
     <p>Membership : {member.membership}</p>
      </div>
    </div>
  );
}

export default MemberItem;
