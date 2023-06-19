import Footer from "./Footer";
import Header from "./Header";
import "../App.css";
import login from "../images/Login.png";
import Form from "react-bootstrap/Form";

const Loginregister = () => {
  const buttonName = "Submit";
  const buttonName1 = "Reset";
  const register = "Register";
  return (
    <div>
      <Header />
      <div className="container pt-5 pb-5">
        <div className="row login-form pb-3 pb-sm-1">
          <div className="col-md-6">
            <img src={login} alt="Login" className="login-image" />
          </div>
          <div className="col-md-6">
            <div className="text-center mt-5">
              <span className="login-title me-5 btn">Login</span>
              <span className="register-title btn">Register</span>
            </div>
            <div className="login-container mt-5">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="username" required />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    required
                  />
                </Form.Group>
                <input
                  type="submit"
                  value={buttonName}
                  className="btn btn-success me-3"
                />
                <input
                  type="reset"
                  value={buttonName1}
                  className="btn btn-danger"
                />
              </Form>
            </div>
            <div className="register-container mt-5">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="username" required />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput4"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput5"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    required
                  />
                </Form.Group>
                <input
                  type="submit"
                  value={register}
                  className="btn btn-success me-3"
                />
                <input
                  type="reset"
                  value={buttonName1}
                  className="btn btn-danger"
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loginregister;
