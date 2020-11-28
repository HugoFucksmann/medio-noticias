import  axios from "axios";
import Swal from "sweetalert2";

class Auth {
  constructor() {
    this.authenticated = false;
    
  }

  get token() {
    return localStorage.getItem("token") || "";
  }
  get headers() {
    return {
      headers: {
        "x-token": this.token,
      },
    };
  }

  async login(email, password, props) {
    try {
      await axios
        .post(`${process.env.REACT_APP_URL_PROD}/login`, {
          email,
          password,
        })
        .then((resp) => {
          localStorage.setItem("token", resp.data.token);
          this.authenticated = true;
          props.history.push("/form");
          Swal.fire("Login correcto!", "", "success");
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("error al loguearse", "", "error");
        });
    } catch (e) {
      console.log(e);
    }
  }

  logout(props) {
    this.authenticated = false;
    props.history.push("/");
    localStorage.removeItem("token");
  }

  validarToken() {
    return axios.get(`${process.env.REACT_APP_URL_PROD}/login/renew`,this.headers)
    .then( resp => console.log(resp));
  }

  isAuthenticated() {
    if (this.token.length === 172) {
      return true
    }else{
      return false;
    }
    //return this.authenticated;
  }
}

export default new Auth();
