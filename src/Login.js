import React from "react";
import { Link } from "react-router-dom";
function Login({ setVisible }) {
  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9 mt-5">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <h1 class="text-center mt-4">
                <strong>Spritle Schools & Educations</strong>
              </h1>
              <div class="row">
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-5">Students Login!</h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="dummy@gmail.com"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="dummy@password"
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="studentCheck"
                          />
                          <label
                            class="custom-control-label"
                            for="studentCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <Link
                        to={"/portal/student-dashboard"}
                        class="btn btn-primary btn-user btn-block"
                        onClick={() => setVisible(false)}
                      >
                        Login
                      </Link>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">
                        {/* Forgot Password? */}
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-5">Masters Login!</h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="dummy@gmail.com"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="dummy@password"
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="teacherCheck"
                          />
                          <label
                            class="custom-control-label"
                            for="teacherCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <Link
                        to={"/portal/teachers-dashboard"}
                        class="btn btn-primary btn-user btn-block"
                        onClick={() => setVisible(true)}
                      >
                        Login
                      </Link>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">
                        {/* Forgot Password? */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
