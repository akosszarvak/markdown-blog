import React from "react";
import Link from "next/link";
function Header() {
  return (
    <header>
      <div className="container"></div>
      <Link href="/">
        <h2>Dev Blog</h2>
      </Link>
    </header>
  );
}

export default Header;
