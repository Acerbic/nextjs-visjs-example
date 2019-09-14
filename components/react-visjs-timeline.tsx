import dynamic from "next/dynamic";
import moment from "moment";
const Timeline: any = dynamic(() => import("react-visjs-timeline"), {
    ssr: false,
});

// http://visjs.org/docs/timeline/#Configuration_Options

const example_zero = {
    options: {
        width: "100%",
        height: "380px",
        showMajorLabels: true,
        showCurrentTime: true,
        zoomMin: 1000000,
        format: {
            minorLabels: {
                minute: "h:mma",
                hour: "ha",
            },
        },
    },
    items: [
        { id: 1, content: "item 1", start: "2014-04-20" },
        { id: 2, content: "item 2", start: "2014-04-14" },
        { id: 3, content: "item 3", start: "2014-04-18" },
        {
            id: 4,
            content: "item 4",
            start: "2014-04-16",
            end: "2014-04-19",
        },
        { id: 5, content: "item 5", start: "2014-04-25" },
        {
            id: 6,
            content: "item 6",
            start: "2014-04-27",
            type: "point",
        },
    ],
};

export default () => (
    <>
        <Timeline {...example_zero} />
    </>
);
