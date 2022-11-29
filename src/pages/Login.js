import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Title from "components/Title";
import React from "react";
import Form from "sections/Login/Form";

function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-4 sm:mb-6 lg:mb-10 relative z-50">
        <Navbar />
      </div>

      <div className="flex-1 mb-16 lg:mb-20">
        <div className="container-two">
          <Title className="font-bold text-primary mb-6 lg:mb-8">Login</Title>

          <Form />
        </div>
      </div>

      <Footer container="container" />
    </div>
  );
}

export default Login;
