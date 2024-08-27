import { useState } from "react";
import { FiBook, FiMenu, FiPackage, FiSearch, FiStar, FiX } from "react-icons/fi";
import Button from "./ui/Button";
import Link from "next/link";
import Input from "./ui/Input";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="z-50 sticky top-0 bg-white shadow px-3.5 py-2.5 bg-white bg-opacity-50 backdrop-blur flex items-center">
            <Link href="/" className="flex items-center">
                <div className="w-[50px]">
                    <img src="/logo-removebg.png" alt="Logo" className="w-full" />
                </div>
                <h1 className="text-2xl font-bold ml-2.5">Shiro UI</h1>
            </Link>
            <div className="ml-auto hidden md:flex items-center">
                <Input placeholder="Search docs" icon={<FiSearch />} />
                <div className="ml-10 space-x-5">
                    <Link href="/docs/getting-started">Docs</Link>
                    <Link href="/">Components</Link>
                    <Link href="/">Blog</Link>
                    <Button variant="secondary" leftIcon={<FiStar />}>Star</Button>
                </div>
            </div>
            {/* モバイル */}
            <div className="ml-auto flex md:hidden items-center">
                <button onClick={toggleMobileMenu} className="text-2xl text-[#007bff] cursor-pointer">
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="fixed border-t border-white top-[70px] pt-5 px-5 left-0 w-full h-[calc(100vh-70px)] bg-white bg-opacity-50 backdrop-blur md:hidden">
                    <div className="mb-5 grid grid-cols-2 gap-2.5">
                        <Button leftIcon={<FiSearch />}>Search</Button>
                        <Button variant="secondary" leftIcon={<FiStar />}>Star</Button>
                        <Button variant="secondary" leftIcon={<FiBook />}>Docs</Button>
                        <Button variant="secondary" leftIcon={<FiPackage />}>Components</Button>
                    </div>
                    <div className="flex flex-col space-y-2.5">
                        {/* Menu */}
                    </div>
                </div>
            )}
        </header>
    );
}