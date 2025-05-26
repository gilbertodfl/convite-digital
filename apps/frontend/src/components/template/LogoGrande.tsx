import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function LogoGrande() {
  return (
    <Link
      href="/"
      className={`flex flex-col items-center gap-2 ${fonte.className}`}
    >
      <Image src="/logo.svg" width={200} height={200} alt="Logo" />
      <h1 className="text-2xl text-white">
        CONVIT<span className="text-blue-500">3</span> DIGITAL
      </h1>
    </Link>
  );
}
