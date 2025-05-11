import React, { useState } from "react";
import { Button } from "../ui/button";
import { Field } from "../common/field";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { SocialForm } from "./social-form";
import { Link } from "react-router-dom";

export const SigninForm = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
  });

  const handlePasswordToggle = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Welcome to Admin Dashboard</h1>
          <p className="text-balance text-muted-foreground">
            Signin to your Admin dashboard
          </p>
        </div>
        <form>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Field label="Email" required>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control input-lg"
                  placeholder="Email"
                  required
                />
              </Field>
            </div>
            <div className="flex flex-col gap-3">
              <Field label="Password" required>
                <div className="relative w-full">
                  <input
                    type={showPassword.password ? "text" : "password"}
                    name="password"
                    id="password"
                    className="form-control input-md"
                    placeholder="Enter password"
                    required
                  />
                  <span
                    className="input-eye top-2.5"
                    role="button"
                    tabIndex="0"
                    onClick={() => handlePasswordToggle("password")}>
                    {showPassword.password ? <LuEyeOff /> : <LuEye />}
                  </span>
                </div>
              </Field>

              <a
                href="#"
                className="ml-auto text-end text-sm underline-offset-2 hover:underline">
                Forgot your password?
              </a>
            </div>

            <Button type="submit" className="btn-lg btn-primary w-full">
              Signin
            </Button>
          </div>
        </form>

        <SocialForm />
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            to="/auth/signup"
            className="underline underline-offset-4 font-medium text-primary">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
