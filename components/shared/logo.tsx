import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        fetchPriority="high"
        decoding="async"
        priority
        draggable={false}
        src="/impetus-logo.png"
        alt="Impetus Home Services"
        width={150}
        height={80}
        className="h-8 w-auto sm:h-10"
      />
    </Link>
  );
};
