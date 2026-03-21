import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  width?: number;
  height?: number;
  className?: string;
  linkClassName?: string;
  asLink?: boolean;
}

export default function Logo({
  href = "/",
  width = 72,
  height = 72,
  className = "w-auto h-12",
  linkClassName = "shrink-0",
  asLink = true,
}: LogoProps) {
  const image = (
    <Image
      src="/rps-logo-main.svg"
      alt="Logo RPS"
      width={width}
      height={height}
      className={className}
    />
  );

  if (!asLink) return image;

  return (
    <Link href={href} aria-label="RPS — Accueil" className={linkClassName}>
      {image}
    </Link>
  );
}
