import useLoading from "hooks/useLoading.hook";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  useLoading(loading);

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user?.accessToken) {
      setLoading(true);
      setRedirect(true);
    }
  }, []);

  if (redirect) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <div className="card-body">
        <div className="text-center m-b-15">
          <a href="index.html" className="logo logo-admin">
            <img src="/assets/images/logo-name.png" height="24" alt="logo" />
          </a>
        </div>

        <div className="p-3">
          <form className="form-horizontal" action="index.html">
            <div className="alert alert-success alert-dismissible">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">
                ×
              </button>
              Enter your <b>Email</b> and instructions will be sent to you!
            </div>

            <div className="form-group row">
              <div className="col-12">
                <input className="form-control" type="email" required={true} placeholder="Email" />
              </div>
            </div>

            <div className="form-group text-center row m-t-20">
              <div className="col-12">
                <button className="btn btn-danger btn-block waves-effect waves-light" type="submit">
                  Send Email
                </button>
              </div>
            </div>

            <div className="form-group m-t-10 mb-0 row">
              <div className="col-12 m-t-20 text-center">
                <a href="/signin" className="text-muted">
                  <i className="mdi mdi-lastpass"></i>
                  <small className="ml-1">Sign In with password</small>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
