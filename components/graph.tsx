import { useEffect } from "react";
// import { DataSet, Timeline } from "vis-timeline";
import vis from "vis-timeline/dist/vis-timeline-graph2d.min.js";
import "vis-timeline/dist/vis-timeline-graph2d.min.css";

export function Graph() {
    useEffect(() => {
        // DOM element where the Timeline will be attached
        var container = document.getElementById("visualization");

        // Create a DataSet (allows two way data-binding)
        var items = new vis.DataSet([
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
        ]);

        // Configuration for the Timeline
        var options = {};

        // Create a Timeline
        var timeline = new vis.Timeline(container, items, options);
    }, []);

    return (
        <div className="container">
            <div id="visualization"></div>
            <style jsx>{`
                div.container {
                    border: solid 1px red;
                    width: 100%;
                }
            `}</style>
        </div>
    );
}

export default Graph;
