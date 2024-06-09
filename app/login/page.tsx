"use client"
import Login from "@/components/core/Login/login";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  
  return (
    <Provider store={store}>

    <main className="flex items-center justify-center h-[90vh]">
        <section className="flex flex-col min-w-72 w-[40%] bg-primaryTransparent rounded-md p-8 lg:w-[90%] md:py-4 md:px-2">
            <h1 className="text-3xl text-primary font-black text-center md:text-xl">
                Login to Admin Dashboard
            </h1>
           <Login/>
        </section>
       
    </main>
    </Provider>

  );
}
