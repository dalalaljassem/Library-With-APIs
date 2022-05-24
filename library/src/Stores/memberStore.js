import axios from "axios";
import { makeAutoObservable } from "mobx";
import bookStore from "../Stores/bookStore";

class MemberStore {
  //we took this from the postman get body
  membersData = [
    {
      _id: "628514d5b8273a86534c95b8",
      firstName: "Aziz",
      lastName: "AlSaffar",
      membership: "gold",
      currentlyBorrowedBooks: [],
      slug: "aziz-alsaffar",
    },
    {
      _id: "6285150fb8273a86534c95bb",
      firstName: "Laila",
      lastName: "AlKandery",
      membership: "platinum",
      currentlyBorrowedBooks: ["62851414b8273a86534c959d"],
      slug: "laila-alkandery",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  fetchMembers = async () => {
    try {
      const response = await axios.get(
        "https://library-borrow-system.herokuapp.com/api/members"
      );
      this.membersData = response.data;
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  findMember = (memberId) => {
    const member = this.membersData?.find((member) => memberId === member?._id);
    return member;
  };

  createMember = async (member) => {
    try {
      const response = await axios.post(
        "https://library-borrow-system.herokuapp.com/api/members",
        member
      );
      console.log(response.data);
      this.membersData.push([...this.membersData, ...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  memberNameFind = (memberId) => {
    const member = this.membersData.find((member) => member._id === memberId);
    const fullName = member.firstName + " " + member.lastName;
    return fullName;
  };
} //store end

const memberStore = new MemberStore();
memberStore.fetchMembers();
export default memberStore;
