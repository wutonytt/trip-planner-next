"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "flowbite-react";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const userName = session?.user?.name;
  const userEmail = session?.user?.email;

  const router = useRouter();

  if (status === "loading") {
    return (
      <p className="mb-3 text-xl tracking-tight text-gray-900 dark:text-white">
        Loading...
      </p>
    );
  }

  if (status === "unauthenticated") {
    router?.push("/login");
  }

  if (status === "authenticated") {
    return (
      <>
        <p className="mb-3 text-xl tracking-tight text-gray-900 dark:text-white">
          {" "}
          Signed in as <span className="font-semibold">{userName}</span>
        </p>
        <div className="p-10">
          <Image
            width={500}
            height={500}
            alt="VW"
            src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png"
          />
        </div>
        <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</Button>
      </>
    );
  }
};

export default Dashboard;
