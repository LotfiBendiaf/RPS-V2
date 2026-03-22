import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface IconProps {
href?: string;
width?: number;
height?: number;
className?: string;
linkClassName?: string;
asLink?: boolean;
}
const Icon = ({
  href = "/",
  width = 36,
  height = 36,
  className = "w-auto h-12",
  linkClassName = "shrink-0",
  asLink = true,
}: IconProps) => {
   const image = (
    <Image
      src="/rps-icon.png"
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

export default Icon