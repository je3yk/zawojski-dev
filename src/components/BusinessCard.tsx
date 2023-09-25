import { AiFillMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";

import Typography from "./Typography";

import Image from "next/image";

import MeImage from "@/images/me.png";

export default function BussinesCard() {
  return (
    <div className="grid md:grid-flow-col grid-rows-2 md:grid-rows-none md:grid-cols-3 bg-neutral-50 p-2 gap-2 content-center">
      <div className="col-span-3 md:col-span-1 row-span-1">
        <Image
          src={MeImage}
          alt="|ICZY1M{k=t7-TNGWWofoz_NM|I=ofM{WBRks:j]Ios:$$WBWCofs:Rkax4.ozaKRkSht6oMWCaybbt7sSoJogazofofae%MRkR*WBaxWBj[ofWBWBj[RjofWBofj[j[WVaej[s:ayt7a#j?WBj]oeayNHWCs:jsRjjbj["
          placeholder="blur"
          width={320}
          height={320}
          className="mx-auto"
        />
      </div>
      <div className="col-span-3 md:col-span-2 bg-neutral-50 flex flex-col gap-2 row-span-1">
        <div className="flex flex-col items-center bg-slate-500 p-5 h-full justify-center gap-5">
          <Typography variant="h1" className="text-center">
            Jędrzej Zawojski
          </Typography>
          <Typography variant="h3">Full stack web developer</Typography>
          <div className="flex gap-5">
            <SiTypescript className="text-3xl" />
            <SiNodedotjs className="text-3xl" />
            <SiReact className="text-3xl" />
          </div>
        </div>
        <div className="h-fit flex justify-between md:justify-around items-center bg-slate-500 p-5 gap-5">
          <a
            href="https://github.com/je3yk"
            rel="noopener noreffer"
            target="_blank"
          >
            <FaGithub className="text-3xl hover:text-slate-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/jedrzej-zawojski"
            rel="noopener noreffer"
            target="_blank"
          >
            <FaLinkedin className="text-3xl hover:text-slate-300" />
          </a>
          <a
            href="https://twitter.com/JedrzejZawojski"
            rel="noopener noreffer"
            target="_blank"
          >
            <FaXTwitter className="text-3xl hover:text-slate-300" />
          </a>
          <a href="mailto:jedrzej.zawojski95@gmail.com" target="_blank">
            <AiFillMail className="text-3xl hover:text-slate-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
