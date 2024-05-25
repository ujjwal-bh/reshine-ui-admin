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
        <section className="flex flex-col min-w-72 w-[40%] bg-primaryTransparent rounded-md p-8 lg:w-[90%] md:py-4 md:px-2">
            <h1 className="text-3xl text-primary font-black text-center md:text-xl">
                Login to Admin Dashboard
            </h1>
            <form className="mt-16 md:mt-8 md:w-full">
                <div className="flex flex-col gap-4 px-[5%] md:px-2">
                    <InputWithLabel LeftIcon={FaEnvelope} type="email" name="email" label="Email Address" autoComplete="email" placeholder="someone@gmail.com"/>
                    <InputWithLabel LeftIcon={FaLock} RightIcon={FaEyeSlash} type={showPass ? "text" : "password"} autoComplete="current-password" name="password" label="Password" placeholder="✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱" rightIconClasses={`cursor-pointer ${showPass ? 'text-primary' : 'text-gray-400'}`} rightIconClick={() => setShowPass(prev=> !prev)}/>
                    <div className="mt-8 md:mt-4">
                        <Button className="w-full text-[1rem]" type="submit" onClick={handleSubmit}>Login</Button>
                    </div>
                    <div className="w-full text-center"><span className="text-primary">forgot password? </span> contact your administrator</div>
                </div>
            </form>
        </section>
       
    </main>
  );
}
