import axios from "axios";
import { makeAutoObservable, observable } from "mobx";

class MemberStore{

    membersData=[{
        name:"dalal",
        age:23,
        id:1,
    }];

    constructor(){
makeAutoObservable(this,{
    membersData:observable,
});
    }


 fetchMembers = async () =>{
    try {
        const response = await axios.get("https://library-borrow-system.herokuapp.com/api/members");
        this.membersData = response.data;
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
 }


createMumber = async (member) =>{
    try {
        const response = await axios.post("https://library-borrow-system.herokuapp.com/api/members",member);
        console.log(response.data)
        this.membersData.push([...this.membersData,response.data]);
      } catch (error) {
        console.error(error);
      }
}


}//store end
const memberStore = new MemberStore();
memberStore.fetchMembers();
export default memberStore;