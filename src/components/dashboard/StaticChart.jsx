"use client";

import { Bar, } from "react-chartjs-2";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const StaticChart = ({ chartData }) => {
  return (
    <ScrollArea>
      <section className="lg:w-[47rem] lg:h-[25rem] w-[40rem] bg-white mt-7 rounded-xl p-8 border border-gray-300 shadow-md">

        <h2 style={{ textAlign: "center" }}>Published Blogs Charts</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "published blogs on Every month's"
              }
            }
          }}
        />
        <ScrollBar orientation="horizontal" />
      </section>
    </ScrollArea>
  );
};

export default StaticChart;
