import FunnelGraph from "funnel-graph-js";
import "funnel-graph-js/dist/css/main.css";
import "funnel-graph-js/dist/css/theme.css";
import { useEffect } from "react";

import "./theme.css";
export default function FunnelGraphComponent() {
  useEffect(() => {
    let graph = new FunnelGraph({
      container: ".funnelGraphComponent",
      gradientDirection: "horizontal",
      displayPercent: "false",
      data: {
        labels: ["February","January", "December", "November"],
        subLabels: ['Insights'],
        colors: ["blue", "lightblue"],
        values: [75000, 73000, 24000, 5718]
      },
      // displayPercent: true,
      direction: "horizontal",
      color: "red"
    });

    graph.draw();
  }, []);

  return (
    <div
      className="funnelGraphComponent"
      style={{
        marginTop: "1rem",
        width: "90%",
        height: "10rem",
        marginLeft: "2rem",
        marginRight: "2rem",
        color: "black"
      }}
    ></div>
  );
}
