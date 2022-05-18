import memberStore from "../Stores/memberStore";
import MemberItem from "./MemberItem";

function MemberList(){


const memberList = memberStore.membersData.map((member) => <MemberItem member={member}/>)
console.log(memberList);
return(    
    <div>
        <p>pls work</p>
    </div>
        );
}

export default MemberList;