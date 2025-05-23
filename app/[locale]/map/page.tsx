"use client";

import React, { useEffect, useState } from "react";
import * as echarts from "echarts/core";
import ReactECharts from "echarts-for-react";
import {
  GeoComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { MapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { useTranslations } from "next-intl";

echarts.use([
  MapChart,
  GeoComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer,
]);

export default function MapPage() {
  const t = useTranslations();
  const [options, setOptions] = useState(null);

  useEffect(() => {
    fetch("/map/china.json")
      .then((res) => res.json())
      .then((geoJson) => {
  // 过滤港澳台南海
  geoJson.features = geoJson.features.filter(feature => {
    const name = feature.properties.name;
    return !["香港", "澳门", "台湾", "南海诸岛"].includes(name);
  });

  echarts.registerMap("china", geoJson);

  // 获取所有省份名字
  const allProvinces = geoJson.features.map(f => f.properties.name);

  // 实际数据
  const provinceDataMap = {
    北京: 100,
    广东: 800,
    上海: 300,
    江苏: 400,
    浙江: 350,
    山东: 600,
    河北: 200,
  };

  // 全部省份对应数据，默认0
  const provinceData = allProvinces.map(name => ({
    name,
    value: provinceDataMap[name] ?? 0,
  }));

  console.log("provinceData final:", provinceData);

  setOptions({
    tooltip: {
      trigger: "item",
      formatter: (params) => {
        return `${params.name}<br/>数值: ${params.data?.value ?? "无数据"}`;
      },
    },
    visualMap: {
      min: 0,
      max: 1000,
      left: "left",
      bottom: "bottom",
      text: ["高", "低"],
      calculable: true,
      inRange: {
        color: ["#e0f3f8", "#74add1", "#4575b4", "#08306b"],
      },
      show: true,
    },
    series: [
      {
        name: "省份排名",
        type: "map",
        map: "china",
        roam: true,
        label: {
          show: true,
          fontSize: 10,
          color: "#000",
        },
        itemStyle: {
          borderColor: "#555",
          borderWidth: 1,
          areaColor: "#f5f7fa",
        },
        emphasis: {
          label: {
            show: true,
            color: "#000",
            fontWeight: "bold",
          },
          itemStyle: {
            areaColor: "#a3c4f3",
          },
        },
        data: provinceData,
      },
    ],
  });
});

  }, []);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">{t("navigation.map")}</h1>
      {options ? (
        <ReactECharts
          option={options}
          style={{ height: "600px", width: "100%" }}
          notMerge={true}
          lazyUpdate={true}
        />
      ) : (
        <p>加载中...</p>
      )}
    </div>
  );
}
