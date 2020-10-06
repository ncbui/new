import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/**
 * json-server will give CRUD endpoints on 
 */

export default class portfolioApi {

  static async getAboutMe() {
    const res = await axios.get(`${BASE_API_URL}/aboutMe`);
    return res.data;
  }

  static async mockGetAboutMe() {
    const res = {
      name: "Cam Bui",
      subtitle:
      " building tools to give people back some sense of humanity ",
      long: "researcher turned software engineer. more more more more",
    };
    return res;
  }

  static async getProjects() {
    const res = await axios.get(`${BASE_API_URL}/projectsList`);
    return res.data;
  }
  static async mockGetProjects() {
    const res = [
      {
        name: "Microblog",
        frontend: "React, Redux, reactstrap",
        backend: "json-server CRUD",
        github:"www.github.com/FIXME",
        demo: "www.FIXME.com",
        description: " A small blogging website mockup",
        updated: "September 2020",
      },
      {
        name: "Shoply",
        libraries: "Frontend: React, reactstrap, json-server back-end",
        frontend: "React, Redux, reactstrap",
        backend: "",
        github:"www.github.com/FIXME",
        demo: "www.FIXME.com",
        description: " A small shopping website mockup",
        updated: "September 2020",
      },

      {
        name: "Livestack",
        frontend: "React",
        backend: "Express, Node.js",
        github:"www.github.com/FIXME",
        demo: "www.FIXME.com",
        description:
          " Employed test-driven development practices to refactor components for testability and maintainability",
        updated: "October 2020",
      },
      {
        name: "Algorithm collection ",
        frontend: "",
        backend: "",
        github:"",
        demo: "www.FIXME.com",
        description:
          " HONORABLE MENTION: Demo patterns, search algorithm, and data structure implementations",
        updated: "October 2020",
      },
    ];
    return res;
  }


  static async getStack() {
    const res = await axios.get(`${BASE_API_URL}/techStack`);
    return res.data;
  }

  static async getContactInfo() {
    const res = await axios.get(`${BASE_API_URL}/contactInfo`);
    return res.data;
  }
  static async mockGetContactInfo() {
    const res = {
      git: "https://github.com/ncbui",
      linkedin: "linkedin.com/url",
    };
    return res;
  }

}