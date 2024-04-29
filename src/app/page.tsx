import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";

import { SiX, SiGithub, SiDiscord } from "react-icons/si";
import { MdChevronRight } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="flex flex-col items-center space-y-6 justify-center min-h-[calc(100vh-74px)] flex-wrap">
        <Image
          src="/avatar.png"
          alt="caru"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold">Caru</h1>
        <Link href={"/about"}>
          <Button variant="secondary">
            Check My Profile
            <MdChevronRight className="ml-2" size={24} />
          </Button>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="https://twitter.com/caru_ini_8">
            <SiX size={32} />
          </Link>
          <Link href="https://github.com/caru-ini">
            <SiGithub size={32} />
          </Link>
          <Link href="https://discordapp.com/users/1226826654794649690">
            <SiDiscord size={32} />
          </Link>
          <Link href="mailto:s1F102400392@iniad.org">
            <FaEnvelope size={32} />
          </Link>
        </div>
      </div>
    </main>
  );
}
