"use client";
import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// const COLORS = [
//   "#8884d8",
//   "#82ca9d",
//   "#ffc658",
//   "#ff8042",
//   "#8dd1e1",
//   "#d0ed57",
//   "#a4de6c",
// ];

const COLORS = [
  "#4B6C8C", // 深蓝灰
  "#82A3B1", // 浅蓝灰
  "#A3B18A", // 柔和绿
  "#D9BF77", // 暖米色
  "#6B7B8C", // 中灰蓝
  "#A7B0AA", // 浅灰绿
  "#C2B89B", // 米灰色
];

export default function ChartsPage() {
  const [gradeData, setGradeData] = useState([]);
  const [weeklyHoursData, setWeeklyHoursData] = useState([]);
  const [startTimeData, setStartTimeData] = useState([]);
  const [endTimeData, setEndTimeData] = useState([]);
  const [provinceData, setProvinceData] = useState([]);
  useEffect(() => {
    fetch("/api/charts/grades")
      .then((res) => res.json())
      .then(setGradeData);

    fetch("/api/charts/weekly-hours")
      .then((res) => res.json())
      .then(setWeeklyHoursData);

    fetch("/api/charts/start-time")
      .then((res) => res.json())
      .then(setStartTimeData);

    fetch("/api/charts/end-time")
      .then((res) => res.json())
      .then(setEndTimeData);

    fetch("/api/charts/province")
      .then((res) => res.json())
      .then(setProvinceData);
  }, []);

  return (
    <div className="w-full min-h-screen py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-700 mb-10">可视化分析</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 年级分布图 */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              年级分布
            </h2>
            <div className="w-full h-[300px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={gradeData}
                    dataKey="count"
                    nameKey="grade"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {gradeData.map((entry, index) => (
                      <Cell
                        key={`grade-cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f0f4f8",
                      borderRadius: 8,
                      border: "none",
                      boxShadow: "0 2px 8px rgba(75, 108, 140, 0.2)",
                    }}
                    itemStyle={{ color: "#4B6C8C" }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    wrapperStyle={{ fontSize: 12, color: "#4B6C8C" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 每周学习小时数分布 */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              每周学习小时数分布
            </h2>
            <div className="w-full h-[300px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={weeklyHoursData}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {weeklyHoursData.map((entry, index) => (
                      <Cell
                        key={`hour-cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f0f4f8",
                      borderRadius: 8,
                      border: "none",
                      boxShadow: "0 2px 8px rgba(75, 108, 140, 0.2)",
                    }}
                    itemStyle={{ color: "#4B6C8C" }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    wrapperStyle={{ fontSize: 12, color: "#4B6C8C" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 上学时间分布 */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              上学时间分布
            </h2>
            <div className="w-full h-[300px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={startTimeData}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {startTimeData.map((entry, index) => (
                      <Cell
                        key={`start-time-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f0f4f8",
                      borderRadius: 8,
                      border: "none",
                      boxShadow: "0 2px 8px rgba(75, 108, 140, 0.2)",
                    }}
                    itemStyle={{ color: "#4B6C8C" }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    wrapperStyle={{ fontSize: 12, color: "#4B6C8C" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 放学时间分布 */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              放学时间分布（含晚自习）
            </h2>
            <div className="w-full h-[300px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={endTimeData}
                    dataKey="count"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {endTimeData.map((entry, index) => (
                      <Cell
                        key={`end-time-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f0f4f8",
                      borderRadius: 8,
                      border: "none",
                      boxShadow: "0 2px 8px rgba(75, 108, 140, 0.2)",
                    }}
                    itemStyle={{ color: "#4B6C8C" }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    wrapperStyle={{ fontSize: 12, color: "#4B6C8C" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* 省份分布 - 柱状图 */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 w-full">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            各省份数据分布
          </h2>
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={provinceData}
                margin={{ top: 10, right: 20, left: 10, bottom: 60 }}
              >
                <XAxis
                  dataKey="province"
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  height={70}
                  tick={{ fill: "#6B7B8C", fontSize: 12 }}
                  axisLine={{ stroke: "#C2B89B" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#6B7B8C", fontSize: 12 }}
                  axisLine={{ stroke: "#C2B89B" }}
                  tickLine={false}
                />
                <Tooltip />
                <Bar dataKey="count" fill="#4B6C8C" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
