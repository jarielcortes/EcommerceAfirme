import React from "react";
import { ResponsivePie } from "@nivo/pie";
import "./RenewalsChart.css";

export function RenewalsChart({ data }) {
  return (
    <div
      data-testid="renewals-chart-widget"
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Renovaciones</h2>
      <div className="h-40">
        <ResponsivePie
          data={data}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: "nivo" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabel={(d) => d.label}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: "color" }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
        />
      </div>
    </div>
  );
}

export default RenewalsChart;
