import React, { useState } from "react";
import { Form, Row, Col, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
//
import ButtonRes from "../common/ButtonRes";
import banner from "../asset/Banner.png";
import { schemaRegister } from "../common/Schema";
import { postData } from "../services/PostData";
//
import "./Register.css";

//
function Register() {
  const nagivate = useNavigate();
  const [userRegister, setUserRegister] = useState();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit = async (data) => {
    if (data.password === data.confirmPassword) {
      setUserRegister({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      await postData("users", userRegister);
      nagivate("/login");
    } else {
      alert("Mat khau chua trung khop");
    }
  };
  return (
    <div>
      <div className="main-res">
        <div className="banner-res">
          <img src={banner} alt="Banner" />
        </div>
        <div className="title-res">
          <h2>Get’s things done with TODO</h2>
          <p>Let’s help you meet up your tasks</p>
        </div>
        <div className="form-res">
          <Row>
            <Col span={20} offset={2}>
              <Form onFinish={handleSubmit(onSubmit)}>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <Input
                      placeholder="Enter your full name"
                      {...field}
                      status={errors.name && "error"}
                    />
                  )}
                />
                {errors.name && (
                  <p className="error-message">{errors.name.message}</p>
                )}
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <Input placeholder="Enter your email" {...field} />
                  )}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  )}
                />
                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
                <Controller
                  control={control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <Input
                      type="password"
                      placeholder="Confirm password"
                      {...field}
                    />
                  )}
                />
                <ButtonRes htmlType="submit" className="btn-submit" />
              </Form>
            </Col>
          </Row>
        </div>
        <div className="signIn-res">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="signIn-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
