import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Search Engines", "Direct Click", "Bookmarks Click"],
    datasets: [
      {
        data: [30, 30, 40],
        backgroundColor: (context) => {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return; // اگر آماده نبود، هیچی نشون نده

          // تعریف گرادیان‌های مختلف
          const gradient1 = ctx.createLinearGradient(0, 0, chartArea.right, 0);
          gradient1.addColorStop(0, "#fe7096");
          gradient1.addColorStop(1, "#ffbf96");

          const gradient2 = ctx.createLinearGradient(0, 0, chartArea.right, 0);
          gradient2.addColorStop(0, "#07cdae");
          gradient2.addColorStop(1, "#84d9d2");

          const gradient3 = ctx.createLinearGradient(0, 0, chartArea.right, 0);
          gradient3.addColorStop(0, "#047edf");
          gradient3.addColorStop(1, "#90caf9");

          return [gradient3, gradient2, gradient1]; // به ترتیب داده‌ها
        },
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "50%", // برای ایجاد ظاهر دوناتی
    plugins: {
      legend: {
        display: false, // لیبل‌ها را خودت با HTML می‌سازی
      },
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Doughnut data={data} options={options} style={{margin: "0 100px"}} />
      <div className="donut-chart-description" style={{ width: "100%" }}>
        <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
          <li><div><span className="dot dot1"></span> Search Engines </div> <span style={{ float: "right" }}>30%</span></li>
          <li><div><span className="dot dot2"></span> Direct Click </div> <span style={{ float: "right" }}>30%</span></li>
          <li><div><span className="dot dot3"></span> Bookmarks Click </div> <span style={{ float: "right" }}>40%</span></li>
        </ul>
      </div>
    </div>
  );
};

export default DonutChart;
