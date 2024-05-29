"use client"
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/browse");
  }, [])

  return (
  <div>
    
  </div>
  );
}
