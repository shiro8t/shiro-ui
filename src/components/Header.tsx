import { FiMenu, FiSearch, FiStar } from "react-icons/fi";
import Button from "./ui/Button";
import Link from "next/link";
import Input from "./ui/Input";

export default function Header() {
    return (
        <header className="sticky top-0 bg-white shadow px-3.5 py-2.5 bg-white bg-opacity-50 backdrop-blur flex items-center">
            <div className="flex items-center">
                <div className="w-[50px]">
                    <img src="/logo.png" alt="Logo" className="w-full" />
                </div>
                <h1 className="text-2xl font-bold ml-2.5">Shiro UI</h1>
            </div>
            <div className="ml-auto hidden md:flex items-center">
                <Input placeholder="Search docs" icon={<FiSearch />} />
                <div className="ml-10 space-x-5">
                    <Link href="/">Docs</Link>
                    <Link href="/">Components</Link>
                    <Link href="/">Blog</Link>
                    <Button variant="secondary" leftIcon={<FiStar />}>Star</Button>
                </div>
            </div>
            {/* モバイル */}
            <div className="ml-auto flex md:hidden items-center">
                <FiMenu className="text-2xl text-[#007bff] cursor-pointer" />
            </div>
        </header>
    )
}