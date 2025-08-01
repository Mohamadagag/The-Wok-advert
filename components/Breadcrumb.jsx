import Link from "next/link";
import React from "react";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-gray-600 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={index}>
            {!isLast ? (
              <Link href={item.href} className="hover:text-[#970000]">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-[#191819]">{item.label}</span>
            )}
            {!isLast && <span className="mx-2">|</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
