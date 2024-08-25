"use client"
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />
      <body>
        <div className="container mx-auto my-10">
          <div className="flex flex-col md:flex-row">
            <div className="hidden md:flex w-1/2">
              <Image src="/scenes/02.svg" alt="Image" width={100} height={100} className="w-full" />
            </div>
            <div className="md:w-1/2 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center mb-5">
                <div className="w-32">
                  <img src="/logo.png" alt="Logo" className="w-full" />
                </div>
                <h1 className="text-[40px] font-bold">Shiro UI</h1>
                <h2 className="text-[20px]">Simple yet Versatile Components</h2>
              </div>
              <div className="space-x-2.5">
                <Button>Getting Started</Button>
                <Button variant="secondary" leftIcon={<FaGithub />}>GitHub</Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}