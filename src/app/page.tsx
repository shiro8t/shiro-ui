"use client"
import Header from "@/components/Header";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />
      <main>
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
                <Link href="/test"><Button>Getting Started</Button></Link>
                <Button variant="secondary" leftIcon={<FaGithub />}>GitHub</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mx-5 md:m-0">
            <Card title="Shiro UI 2.0 is out now!" variant="secondary">
              まだまだ...
            </Card>
            <Card title="Shiro UI 1.0 is here!" variant="secondary">
              まだ...
            </Card>
            <Card title="Shiro UI: Now in Beta!" variant="secondary">
              Install with npm or yarn!
            </Card>
          </div>
          <hr className="my-10" />
          <div className="mx-5 md:mx-0">
            <h1 className="font-bold text-[32px] mb-5">About Shiro UI</h1>
            <div>
            <Accordion title="How can I install Shiro UI?">
                There are currently 6 components.
              </Accordion>
              <Accordion title="How many components are in Shiro UI?">
                You can install it with npm or yarn.
              </Accordion>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}