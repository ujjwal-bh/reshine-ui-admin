"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// components
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input";
import { FaEnvelope, FaEyeSlash, FaLock } from "react-icons/fa";

// api
import { useLoginMutation } from "@/services/api";
import Error from "@/components/ui/error";
import { ApiError } from "@/interfaces/api-error.interface";

export default function Login() {
  const { push } = useRouter();

  const [
    login,
    { isSuccess: loginSuccess, isLoading: loginLoading, isError: isLoginError, error: loginError},
  ] = useLoginMutation();

  const [showPass, setShowPass] = useState(false);
  const [cred, setCred] = useState({ email: "", password: "" });
  const [error, setError] = useState({status: false, msg: ""});

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await login(cred);
  };

  useEffect(() => {
    if (loginSuccess) push("/");
  }, [loginSuccess]);

  useEffect(() => {
    let timer;
    if (isLoginError) {
      setError({status: true, msg: (loginError as ApiError).data.message});
      timer = setTimeout(() => {
        setError({status: false, msg: ""});
      }, 3000);
    }
  }, [loginError]);
  return (
    <>
      <form className="mt-16 md:mt-8 md:w-full">
        <div className="flex flex-col gap-4 px-[5%] md:px-2">
          <InputWithLabel
            LeftIcon={FaEnvelope}
            type="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            placeholder="someone@gmail.com"
            value={cred.email}
            onChange={(e) => setCred({ ...cred, email: e.target.value })}
          />
          <InputWithLabel
            LeftIcon={FaLock}
            RightIcon={FaEyeSlash}
            type={showPass ? "text" : "password"}
            autoComplete="current-password"
            name="password"
            label="Password"
            placeholder="✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱"
            rightIconClasses={`cursor-pointer ${
              showPass ? "text-primary" : "text-gray-400"
            }`}
            rightIconClick={() => setShowPass((prev) => !prev)}
            value={cred.password}
            onChange={(e) => setCred({ ...cred, password: e.target.value })}
          />
          <div className="mt-8 md:mt-4">
            <Button
              className={`w-full text-[1rem]${loginLoading? "opacity-60": ""} `}
              type="submit"
              onClick={handleSubmit}
              disabled={loginLoading}
            >
                {
                    loginLoading ? "Loading...": "Login"
                }
            </Button>
          </div>
          <div className="w-full text-center">
            <span className="text-primary">forgot password? </span> contact your
            administrator
          </div>
        </div>
      </form>
      <Error active={error.status}>
            {error.msg}
      </Error>
    </>
  );
}
