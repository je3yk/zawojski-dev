import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

import { profile, stack } from "@/data/hero";

export function HeroSection() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setBlink((value) => !value), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero">
      <div className="flex flex-col gap-7">
        <div className="relative self-start sm:hidden">
          <div className="relative h-28 w-28 overflow-hidden border border-border bg-secondary">
            <img
              src="/hero.png"
              alt={profile.name}
              className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
          <div className="absolute -left-1.5 -top-1.5 h-4 w-4 border-l-2 border-t-2 border-primary" />
          <div className="absolute -right-1.5 -top-1.5 h-4 w-4 border-r-2 border-t-2 border-primary" />
          <div className="absolute -bottom-1.5 -left-1.5 h-4 w-4 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-1.5 -right-1.5 h-4 w-4 border-b-2 border-r-2 border-primary" />
        </div>

        <div className="flex items-start justify-between gap-10">
          <div className="flex max-w-md flex-col gap-1.5">
            <p className="text-[10px] tracking-widest text-primary">
              {`// ${profile.id} · introduction`}
            </p>
            <h1 className="whitespace-nowrap text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              {profile.name}
              <span
                className="ml-2 inline-block h-8 w-[3px] align-middle bg-primary sm:h-9"
                style={{
                  opacity: blink ? 1 : 0,
                  transition: "opacity 0.1s",
                }}
              />
            </h1>
            <p className="text-sm text-muted-foreground">{profile.role}</p>
            <p className="max-w-md pt-2 text-sm leading-relaxed text-foreground/80">
              {profile.bio}
            </p>
            <p className="max-w-md text-sm text-muted-foreground">
              {profile.location}
            </p>
          </div>

          <div className="relative hidden shrink-0 sm:block">
            <div className="relative h-36 w-36 overflow-hidden border border-border bg-secondary sm:h-44 sm:w-44">
              <img
                src="/hero.png"
                alt={profile.name}
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
            <div className="absolute -left-1.5 -top-1.5 h-4 w-4 border-l-2 border-t-2 border-primary" />
            <div className="absolute -right-1.5 -top-1.5 h-4 w-4 border-r-2 border-t-2 border-primary" />
            <div className="absolute -bottom-1.5 -left-1.5 h-4 w-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1.5 -right-1.5 h-4 w-4 border-b-2 border-r-2 border-primary" />
          </div>
        </div>

        <div className="bg-card p-4 text-[11px] leading-relaxed">
          <p className="text-muted-foreground">
            <span className="text-primary">const</span>{" "}
            <span className="text-foreground">stack</span>{" "}
            <span className="text-primary">=</span> {"{"}
          </p>
          {stack.map(({ key, value }, index) => (
            <p key={key} className="pl-4">
              <span className="text-foreground">{key}</span>
              <span className="text-muted-foreground">: </span>
              {Array.isArray(value) ? (
                <>
                  <span className="text-muted-foreground">[</span>
                  {value.map((item, itemIndex) => (
                    <span key={item}>
                      <span className="text-emerald-600 dark:text-emerald-400">
                        "{item}"
                      </span>
                      {itemIndex < value.length - 1 && (
                        <span className="text-muted-foreground">, </span>
                      )}
                    </span>
                  ))}
                  <span className="text-muted-foreground">]</span>
                </>
              ) : (
                <span className="text-emerald-600 dark:text-emerald-400">
                  "{value}"
                </span>
              )}
              <span className="text-muted-foreground">
                {index < stack.length - 1 ? "," : ""}
              </span>
            </p>
          ))}
          <p className="text-muted-foreground">{"}"}</p>
        </div>

        <div className="flex items-center gap-2.5">
          {profile.socials.map(({ href, label }) => {
            const icon =
              label === "GitHub" ? (
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5a3.1 3.1 0 0 0-1.3-1.7c-1.1-.8.1-.8.1-.8a2.4 2.4 0 0 1 1.8 1.2 2.5 2.5 0 0 0 3.4 1 2.5 2.5 0 0 1 .7-1.6c-2.6-.3-5.2-1.3-5.2-5.7 0-1.2.4-2.2 1.2-3a4 4 0 0 1 .1-3s1-.3 3.1 1.2a10.8 10.8 0 0 1 5.7 0C16.6 6 17.6 6.3 17.6 6.3a4 4 0 0 1 .1 3c.8.8 1.2 1.8 1.2 3 0 4.4-2.6 5.4-5.2 5.7a2.8 2.8 0 0 1 .8 2.2v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                </svg>
              ) : label === "LinkedIn" ? (
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M20.5 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.4v6.4ZM5.1 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM6.9 20.5H3.3V9h3.6v11.5Z" />
                </svg>
              ) : (
                <Mail size={14} />
              );

            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
