"use client"
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
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
              <div className="space-x-2.5 flex">
                <Button>Getting Started</Button>
                <Button variant="secondary" leftIcon={<FaGithub />}>GitHub</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 md:mt-0">
            <Card title="Shiro UI 2.0 is out now!" variant="secondary">
              Still more...
            </Card>
            <Card title="Shiro UI 1.0 is here!" variant="secondary">
              Not yet...
            </Card>
            <Card title="Shiro UI: Now in Beta!" variant="secondary">
              Install with npm or yarn!
            </Card>
          </div>
        </div>
      </body>
    </>
  )
}