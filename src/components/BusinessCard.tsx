import Typography from "./Typography";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

import Image from "next/image";

import MeImage from "@/images/me.jpg";

export default function BussinesCard() {
  return (
    <div className="grid grid-flow-col grid-cols-3 bg-neutral-50 p-2 gap-2">
      <div className="col-span-1 bg-slate-500">
        <Image
          src={MeImage}
          alt="|ICZY1M{k=t7-TNGWWofoz_NM|I=ofM{WBRks:j]Ios:$$WBWCofs:Rkax4.ozaKRkSht6oMWCaybbt7sSoJogazofofae%MRkR*WBaxWBj[ofWBWBj[RjofWBofj[j[WVaej[s:ayt7a#j?WBj]oeayNHWCs:jsRjjbj["
          width={200}
          height={250}
          placeholder="blur"
        />
      </div>
      <div className="col-span-2 bg-neutral-50 flex flex-col gap-2">
        <div className="flex flex-col items-center bg-slate-500 p-5 h-full justify-center">
          <Typography variant="h1">Jędrzej Zawojski</Typography>
          <Typography variant="caption">Fullstack Web Developer</Typography>
        </div>
        <div className="flex justify-between items-center bg-slate-500 p-5 gap-5">
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
            <FaTwitter className="text-3xl hover:text-slate-300" />
          </a>
          <a href="mailto:jedrzej.zawojski95@gmail.com" target="_blank">
            <AiFillMail className="text-3xl hover:text-slate-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
