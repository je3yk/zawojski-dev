import { VariantProps, cva } from "class-variance-authority";

const variants = cva("", {
  variants: {
    variant: {
      h1: ["text-3xl", "md:text-4xl", "font-bold"],
      h2: ["text-2xl", "md:text-3xl", "font-bold"],
      h3: ["text-xl", "md:text-2xl", "font-bold"],
      bodyLargeStrong: ["text-lg", "md:text-xl", "font-bold"],
      bodyLarge: ["text-lg", "md:text-xl"],
      body: ["text-base", "md:text-lg"],
      caption: ["text-sm", "md:text-base"],
    },
  },
});

export type TypographyVariant = VariantProps<typeof variants>["variant"];

type TypographyProps = {
  variant: TypographyVariant;
  className?: string;
  children: React.ReactNode;
};

export default function Typography({
  variant,
  className,
  children,
}: TypographyProps) {
  const typographyClass = `${variants({ variant })} ${className ?? ""}`;

  switch (variant) {
    case "h1":
      return <h1 className={typographyClass}>{children}</h1>;
    case "h2":
      return <h2 className={typographyClass}>{children}</h2>;
    case "h3":
      return <h3 className={typographyClass}>{children}</h3>;
    case "bodyLargeStrong":
    case "bodyLarge":
    case "body":
    case "caption":
      return <p className={typographyClass}>{children}</p>;
    default:
      return null;
  }
}
