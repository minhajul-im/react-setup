import { useState } from "react";
import { Button } from "../ui/button";
import { Field } from "../common/field";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { SocialForm } from "./social-form";
import { Link } from "react-router-dom";

export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
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
            Signup to our Admin dashboard
          </p>
        </div>
        <form>
          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-12">
            <div className="md:col-span-6">
              <Field label="First Name" required>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="form-control input-lg"
                  placeholder="First Name"
                  required
                />
              </Field>
            </div>
            <div className="md:col-span-6">
              <Field label="Last Name" required>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="form-control input-lg"
                  placeholder="Last Name"
                  required
                />
              </Field>
            </div>
            <div className="md:col-span-6">
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
            <div className="md:col-span-6">
              <Field label="Phone" required>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control input-lg"
                  placeholder="Phone"
                  required
                />
              </Field>
            </div>
            <div className="md:col-span-6">
              <Field label="Password" required>
                <div className="relative w-full">
                  <input
                    type={showPassword.password ? "text" : "password"}
                    name="password"
                    id="password"
                    className="form-control input-lg"
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
            </div>
            <div className="md:col-span-6">
              <Field label="Password Confirmation" required>
                <div className="relative w-full">
                  <input
                    type={showPassword.confirmPassword ? "text" : "password"}
                    name="password_confirmation"
                    id="password_confirmation"
                    className="form-control input-lg"
                    placeholder="Enter confirm password"
                    required
                  />

                  <span
                    className="input-eye top-2.5"
                    role="button"
                    tabIndex="0"
                    onClick={() => handlePasswordToggle("confirmPassword")}>
                    {showPassword.confirmPassword ? <LuEyeOff /> : <LuEye />}
                  </span>
                </div>
              </Field>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button
              type="submit"
              className="btn-lg btn-primary w-full md:w-auto">
              Signup
            </Button>
          </div>
        </form>

        <SocialForm />

        <div className="text-center text-sm">
          Do have an account?{" "}
          <Link
            to="/auth/signin"
            className="underline underline-offset-4 font-medium text-primary">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
