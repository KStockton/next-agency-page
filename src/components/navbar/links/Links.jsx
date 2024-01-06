"use client";
import { useCallback, useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
  {
    path: "/",
    title: "Homepage",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title}>
            {link.title}
          </NavLink>
        ))}
        {session ? (
          isAdmin && (
            <>
              <NavLink item={{ path: "/admin", title: "Admin" }} />
              <button className={styles.logout}>Logout</button>
            </>
          )
        ) : (
          <NavLink item={{ path: "/login", title: "Login" }}>Login</NavLink>
        )}
      </div>
      <button onClick={() => setOpen((open) => !open)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session ? (
            isAdmin && (
              <>
                <NavLink item={{ path: "/admin", title: "Admin" }} />
                <button className={styles.logout}>Logout</button>
              </>
            )
          ) : (
            <NavLink item={{ path: "/login", title: "Login" }}>Login</NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
