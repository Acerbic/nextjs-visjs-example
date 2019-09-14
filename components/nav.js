import React from "react";
import Link from "next/link";

const links = [
    { href: "/2", label: "react-visjs-graph2d" },
    { href: "/3", label: "react-visjs-timeline" },
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
});

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Raw Visjs</a>
                </Link>
            </li>
            {links.map(({ key, href, label }) => (
                <li key={key}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>

        <style jsx>{`
            :global(body) {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Avenir Next,
                    Avenir, Helvetica, sans-serif;
            }
            nav {
                text-align: center;
            }
            ul {
                display: flex;
                justify-content: space-between;
            }
            nav > ul {
                padding: 4px 16px;
            }
            li {
                display: flex;
                padding: 6px 8px;
            }
            a {
                color: #067df7;
                text-decoration: none;
                font-size: 13px;
            }
        `}</style>
    </nav>
);

export default Nav;
