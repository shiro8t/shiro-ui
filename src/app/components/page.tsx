"use client"
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Keyboard from "@/components/ui/Keyboard";
import Toast from "@/components/ui/Toast";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Home() {
    const [showToast, setShowToast] = useState(false);
    const [toastType, setToastType] = useState<'success' | 'info' | 'error'>('info');
    const [toastMessage, setToastMessage] = useState('This is an success message!');

    const handleShowToast = (type: 'success' | 'info' | 'error', message: string) => {
        setToastType(type);
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto my-10">
          <div className="mb-10">
            <h1 className="text-[40px] font-bold">Components</h1>
          </div>
        {/* Components */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 mx-5 sm:mx-0 sm:grid-cols-2 md:grid-cols-4 gap-5 lg:w-1/2">
                <Button>Hello</Button>
                <Button variant="secondary">Like Water</Button>
                <Button variant="danger">28 Reasons</Button>
                <Button variant="text">Wish You Hell</Button>
            </div>
            <div className="ml-5 sm:ml-0">
                <Input placeholder="Type here..." icon={<FiSearch />} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mx-5 sm:mx-0">
                <Card title="Red Velvet">
                    Red Velvet（レッドベルベット、朝: 레드벨벳）は、韓国の5人組女性アイドルグループである。
                </Card>
                <Card title="Red Velvet" variant="secondary">
                    Red Velvet（レッドベルベット、朝: 레드벨벳）は、韓国の5人組女性アイドルグループである。
                </Card>
                <Card title="Red Velvet" variant="danger">
                    Red Velvet（レッドベルベット、朝: 레드벨벳）は、韓国の5人組女性アイドルグループである。
                </Card>
                <Card title="Red Velvet" variant="text">
                    Red Velvet（レッドベルベット、朝: 레드벨벳）は、韓国の5人組女性アイドルグループである。
                </Card>
            </div>
            <div className="ml-5 sm:ml-0">
                <p>Press <Keyboard>Ctrl</Keyboard> + <Keyboard>C</Keyboard> to copy.</p>
            </div>
            <div>
                <div className="space-x-2.5">
                    <Button onClick={() => handleShowToast('success', 'This is a success message!')}>Show Success Toast</Button>
                    <Button onClick={() => handleShowToast('info', 'This is an info message!')} variant="secondary">Show Info Toast</Button>
                    <Button onClick={() => handleShowToast('error', 'This is an error message!')} variant="danger">Show Error Toast</Button>
                </div>
                {showToast && (
                    <Toast
                        message={toastMessage}
                        type={toastType}
                        onClose={() => setShowToast(false)}
                    />
                )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}