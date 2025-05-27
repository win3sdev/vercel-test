"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

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

type GradeItem = {
  grade: string;
  count: number;
};

export default function ChartsPage() {
  const t = useTranslations("charts");

  // const [gradeData, setGradeData] = useState([]);
  const [gradeData, setGradeData] = useState<GradeItem[]>([]);
  // const [gradeData, setGradeData] = useState<{ grade: string; count: number }[]>([]);
  const [weeklyHoursData, setWeeklyHoursData] = useState([]);
  const [startTimeData, setStartTimeData] = useState([]);
  const [endTimeData, setEndTimeData] = useState([]);
  const [provinceData, setProvinceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [gradeRes, weeklyRes, startRes, endRes, provinceRes] =
          await Promise.all([
            fetch("/api/charts/grades"),
            fetch("/api/charts/weekly-hours"),
            fetch("/api/charts/start-time"),
            fetch("/api/charts/end-time"),
            fetch("/api/charts/province"),
          ]);

        const [gradeRaw, weeklyData, startData, endData, provinceData] =
          await Promise.all([
            gradeRes.json(),
            weeklyRes.json(),
            startRes.json(),
            endRes.json(),
            provinceRes.json(),
          ]);

        // 合并年级为阶段
        const grouped: Record<string, number> = {};
        const mapGradeToStage = (grade: string) => {
          if (
            [
              "一年级",
              "二年级",
              "三年级",
              "四年级",
              "五年级",
              "六年级",
            ].includes(grade)
          ) {
            return "小学";
          } else if (["初一", "初二", "初三"].includes(grade)) {
            return "初中";
          } else if (["高一", "高二", "高三"].includes(grade)) {
            return "高中";
          } else {
            return "其他";
          }
        };

        gradeRaw.forEach((item: GradeItem) => {
          const stage = mapGradeToStage(item.grade);
          grouped[stage] = (grouped[stage] || 0) + item.count;
        });

        const mergedGradeData = Object.entries(grouped).map(
          ([grade, count]) => ({
            grade,
            count,
          })
        );

        // 设置状态
        setGradeData(mergedGradeData);
        setWeeklyHoursData(weeklyData);
        setStartTimeData(startData);
        setEndTimeData(endData);
        setProvinceData(provinceData);
        setHasError(false);
      } catch (err) {
        console.error("获取图表数据失败:", err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold dark:text-white  mb-10">
          {t("title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 年级分布图 */}
          <div className="rounded-2xl shadow-md p-6 bg-card text-foreground">
            <h2 className="text-xl font-semibold mb-4 ">
              {t("gradeDistribution")}
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
          <div className="rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {t("weeklyStudyHoursDistribution")}
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
          <div className="rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 ">
              {t("schoolStartTime")}
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
          <div className="rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 ">
              {t("schoolEndTime")}
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
        <div className="rounded-2xl shadow-md p-6 mb-8 w-full">
          <h2 className="text-xl font-semibold mb-4 ">
            {t("provinceDataDistribution")}
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
