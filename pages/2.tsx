import React from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import Nav from "../components/nav";

/**
 * Have to have ssr: false since visjs touches global window object on module load
 */
const Graph = dynamic(() => import("../components/react-visjs-graph2d"), {
    ssr: false,
});

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
        </Head>

        <Nav />

        <div className="hero">
            <h1 className="title">
                Loading react-visjs-graph2d component with dynamic()!
            </h1>
            <div className="row">
                <Graph />
            </div>
        </div>

        <style jsx>{`
            .hero {
                width: 100%;
                color: #333;
            }
            .title {
                margin: 0;
                width: 100%;
                padding-top: 80px;
                line-height: 1.15;
                font-size: 48px;
            }
            .title,
            .description {
                text-align: center;
            }
            .row {
                max-width: 880px;
                margin: 80px auto 40px;
                display: flex;
                display: block;
                flex-direction: row;
                justify-content: space-around;
            }
            .card {
                padding: 18px 18px 24px;
                width: 220px;
                text-align: left;
                text-decoration: none;
                color: #434343;
                border: 1px solid #9b9b9b;
            }
            .card:hover {
                border-color: #067df7;
            }
            .card h3 {
                margin: 0;
                color: #067df7;
                font-size: 18px;
            }
            .card p {
                margin: 0;
                padding: 12px 0 0;
                font-size: 13px;
                color: #333;
            }
        `}</style>
    </div>
);

export default Home;
