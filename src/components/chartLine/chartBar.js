import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartExample = () => {
  const data = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
    datasets: [
      {
        label: "CHN",
        data: [15, 20, 25, 30, 35, 40, 45, 50], // داده‌های نمونه
        backgroundColor: (context) => {
          const chart = context.chart;
          const ctx = chart.ctx;
          const height = chart.canvas.height;
          const gradient = ctx.createLinearGradient(0, height, 0, 0);
          gradient.addColorStop(1, "#ffbf96"); // پایین (کم‌رنگ)
          gradient.addColorStop(0, "#fe7096"); // بالا (پررنگ)
          return gradient;
        },
        barPercentage: 0.6, // عرض هر بار
        categoryPercentage: 0.4, // فاصله بین گروه‌ها
      },
      {
        label: "USA",
        data: [40, 10, 15, 20, 25, 30, 35, 45], // داده‌های نمونه
        backgroundColor: (context) => {
          const chart = context.chart;
          const ctx = chart.ctx;
          const height = chart.canvas.height;
          const gradient = ctx.createLinearGradient(0, height, 0, 0);
          gradient.addColorStop(1, "#90caf9"); // پایین (کم‌رنگ)
          gradient.addColorStop(0, "#047edf"); // بالا (پررنگ)
          return gradient;
        },
        barPercentage: 0.6,
        categoryPercentage: 0.4,
      },
      {
        label: "UK",
        data: [25, 30, 35, 40, 45, 45, 20, 30], // داده‌های نمونه
        backgroundColor: (context) => {
          const chart = context.chart;
          const ctx = chart.ctx;
          const height = chart.canvas.height;
          const gradient = ctx.createLinearGradient(0, height, 0, 0);
          gradient.addColorStop(1, "#da8cff"); // پایین (کم‌رنگ)
          gradient.addColorStop(0, "#9a55ff"); // بالا (پررنگ)
          return gradient;
        },
        barPercentage: 0.6,
        categoryPercentage: 0.4,
      },
    ],
  };

  const options = {
    indexAxis: "x", // چارت عمودی
    responsive: true,
    maintainAspectRatio: false, // 💥 این کلید حل مشکله
    plugins: {
      title: {
        display: false,
        text: "Visit And Sales Statistics",
      },
      legend: {
        display: false, // لِجند غیرفعال (اگه می‌خوای فعال باشه، true کن)
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Month",
        },
        grid: {
          display: false, // خطوط عمودی شبکه حذف می‌شن
        },
        border: {
          display: false, // خط مرزی محور X حذف می‌شه
        },
        ticks: {
          color: "#9c9fa6", // 🎨 رنگ متن
          font: {
            size: 12,       // 🔠 اندازه فونت
            weight: "bold", // 💪 ضخامت
            family: "IRANSans, sans-serif", // 🅰 فونت دلخواه
            // style: "italic", // 📐 حالت فونت (اختیاری)
          },
          padding: 20, // فاصله بین تیک و محور
        },
      },

      y: {
        display: true, // محور Y فعاله برای گرید
        title: {
          display: false, // تایتل محور Y حذف می‌شه
        },
        ticks: {
          display: false, // مقادیر تیک‌ها نمایش داده نمی‌شن
          stepSize: (Math.max(...data.datasets.flatMap(d => d.data)) - 0) / 3, // ۴ خط
          max: Math.max(...data.datasets.flatMap(d => d.data)), // حداکثر مقدار داده‌ها
          min: 0, // حداقل مقدار (صفر)
        },
        grid: {
          display: true, // خطوط افقی گرید نمایش داده می‌شن
          drawTicks: false, // خطوط کوچک کنار محور حذف می‌شن
          drawBorder: false, // خط مرزی محور Y حذف می‌شه
          tickLength: 0, // طول خطوط کوچک کنار محور
        },
        border: {
          display: false, // خط مرزی کلی محور Y حذف می‌شه
        },
      },
    },
    layout: {
      padding: 0, // حذف هرگونه padding اضافی
    },
  };

  return <div style={{ height: "330px", width: "100%" }}>
  <Bar data={data} options={options} />
</div>


};

export default ChartExample;