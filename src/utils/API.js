import axios from "axios";

export default {
  // Gets all contacts
  getContacts: () => {
    return axios.get("https://tester.crs-consulting.com/api/entries");
  },
  // Gets one contact
  getOne: (id) => {
    return axios.get(`https://tester.crs-consulting.com/api/entry?id=${id}`);
  },
  // create one contact
  postContact: (data) => {
    return axios.post("https://tester.crs-consulting.com/api/entry", data);
  },
  // edit one contact
  editContact: (data) => {
    return axios.put("https://tester.crs-consulting.com/api/entry", data);
  },
  // delete one contact
  deleteContact: (id) => {
    return axios.delete(`https://tester.crs-consulting.com/api/entry?id=${id}`);
  }
};
