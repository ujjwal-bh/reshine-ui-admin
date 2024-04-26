"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
// components
import { Button } from "@/components/ui/button";
import {InputWithLabel} from "@/components/ui/input";
import { FaEnvelope, FaEyeSlash, FaLock } from "react-icons/fa";

export default function Home() {
    const [showPass, setShowPass] = useState(false);
    const {push} = useRouter()

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("hello");
        push('/')
        
        
    }
  return (
    <main className="flex items-center justify-center h-[90vh]">
        <div className="flex flex-col min-w-72 w-[40%] bg-primaryTransparent rounded-md p-8">
            <div className="text-3xl text-primary font-black text-center">
                Login to Admin Dashboard
            </div>
            <form className="mt-16">
                <div className="flex flex-col gap-4 px-[5%]">
                    <InputWithLabel LeftIcon={FaEnvelope} type="email" name="email" label="Email Address" autoComplete="email" placeholder="someone@gmail.com"/>
                    <InputWithLabel LeftIcon={FaLock} RightIcon={FaEyeSlash} type={showPass ? "text" : "password"} autoComplete="current-password" name="password" label="Password" placeholder="✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱" rightIconClasses={`cursor-pointer ${showPass ? 'text-primary' : 'text-gray-400'}`} rightIconClick={() => setShowPass(prev=> !prev)}/>
                    <div className="mt-8">
                        <Button size={"lg"} className="w-full" type="submit" onClick={handleSubmit}>Login</Button>
                    </div>
                    <div className="w-full text-center"><span className="text-primary">forgot password? </span> contact your administrator</div>
                </div>
            </form>
        </div>
       
    </main>
  );
}
