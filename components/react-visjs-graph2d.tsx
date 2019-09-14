import React, { Component } from "react";
import dynamic from "next/dynamic";

import moment from "moment";

const VisGraph2d: any = dynamic(() => import("react-visjs-graph2d"), {
    ssr: false,
});

const example_one = {
    options: {
        height: "380px",
    },
    items: [
        { x: moment(), y: 30, group: 0 },
        { x: moment().add(1, "days"), y: 10, group: 0 },
        { x: moment(), y: 15, group: 1 },
        { x: moment().add(1, "days"), y: 30, group: 1 },
        { x: moment().add(2, "days"), y: 10, group: 1 },
        { x: moment().add(3, "days"), y: 15, group: 1 },
    ],
    customTimes: {
        customTime1: moment().add(-1, "days"),
        customTime2: moment().add(4, "days"),
    },
    groups: [
        {
            id: 1,
            content: "Group0",
            options: {
                drawPoints: {
                    style: "circle",
                },
                shaded: {
                    orientation: "bottom",
                },
            },
        },
        {
            id: 0,
            content: "Group1",
            options: {
                style: "bar",
            },
        },
    ],
};

const example_two = {
    options: {
        height: "380px",
    },
    items: [
        { x: moment().add(-5, "days"), y: 13, group: 0 },
        { x: moment().add(-4, "days"), y: 12, group: 0 },
        { x: moment().add(-3, "days"), y: 11, group: 0 },
        { x: moment().add(-2, "days"), y: 10, group: 0 },
        { x: moment().add(-1, "days"), y: 9, group: 0 },
        { x: moment(), y: 8, group: 0 },
        { x: moment().add(1, "days"), y: 9, group: 0 },
        { x: moment().add(2, "days"), y: 10, group: 0 },
        { x: moment().add(3, "days"), y: 11, group: 0 },
        { x: moment().add(4, "days"), y: 12, group: 0 },
        { x: moment().add(5, "days"), y: 13, group: 0 },
    ],
    customTimes: {
        customTime1: moment().add(-6, "days"),
        customTime2: moment().add(6, "days"),
    },
    groups: [
        {
            id: 0,
            content: "Group1",
            options: {
                style: "bar",
            },
        },
    ],
};

class VisGraph2dContainer extends Component {
    log = e => console.log(e);

    render() {
        return (
            <>
                <VisGraph2d {...example_one} onClick={e => this.log(e)} />
                <VisGraph2d
                    {...example_two}
                    onRangechange={e => this.log(e)}
                    onContextmenu={e => this.log(e)}
                />
            </>
        );
    }
}

export default VisGraph2dContainer;
