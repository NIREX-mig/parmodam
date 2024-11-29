"use client";

import { useForm } from "react-hook-form";
import Profile from "@/components/dashboard/profile";
import { useState } from "react";
import Security from "@/components/dashboard/Security";

export default function Setting() {

  const [profile, setProfile] = useState(true);
  const [security, setSecurity] = useState(false);

  const form = useForm({
    // resolver: zodResolver(),
    defaultValues: {
      username: "",
    },
    mode: "onChange",
  })

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <section className=" w-full bg-white rounded-xl mt-2 h-[calc(100vh-100px)] p-4">
      <section className="px-5 py-3">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mb-5">Manage your account settings and set e-mail preferences.</p>
        <hr />
      </section>
      <section className="w-full flex gap-3 ">
        <section className="w-[20%] p-4rounded-xl">
          <ul className="flex flex-col gap-2">
            <li onClick={() => {
              setProfile(true);
              setSecurity(false);
            }} className={`text-white hover:bg-black/45 py-2 px-5 rounded-md text-sm ${profile && "bg-black"}`}>
              Profile
            </li>
            <li
              onClick={() => {
                setProfile(false);
                setSecurity(true);
              }}
              className={`hover:text-white hover:bg-black/45 py-2 px-5 rounded-md text-sm ${security && "bg-black"}`}>Security</li>
          </ul>
        </section>

        {/* Profile area */}
        {profile && <Profile />}
        {security && <Security />}
      </section>
    </section >
  );
}
