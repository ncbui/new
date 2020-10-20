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
        name: "Warbler",
        frontend: "",
        backend: "Flask, Jinja, postgreSQL DB",
        github:"https://github.com/ncbui/Warbler",
        demo: "",
        description: " Twitter clone with authentication middleware, Bcrypt hashing, and postgreSQL database",
        updated: "September 2020",
      },
      {
        name: "Jobly API",
        backend: "Node.js, Express, PostgreSQL",
        github:"https://github.com/tm-1900/jobly",
        description: " A RESTful API built with Node.js, Express and postgreSQL database",
        updated: "September 2020",
      },
      {
        name: "Jobly React App",
        frontend: "React, Redux, React Router",
        github:"https://github.com/w12190/react-jobly",
        description: " A small shopping website with filtered search, client-side rendering, and AJAX calls to an API",
        updated: "September 2020",
      }
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
    const res = [{
      site: "www.github.com/ncbui",
      icon: ['fab', 'github']
    },
      {
        site: "www.linkedin.com/in/cambui",
        icon: ['fab', 'linkedin']
    },
      {
        site: "mailto:bui.nct@gmail.com",
        icon: ['fas', 'envelope']
      }];
    return res;
  }

}