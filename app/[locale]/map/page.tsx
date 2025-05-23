"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import * as echarts from "echarts/core";
import { useTranslations } from "next-intl";
import {
  GeoComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { MapChart, EffectScatterChart  } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import ReactECharts from "echarts-for-react";

echarts.use([
  MapChart,
  EffectScatterChart,
  GeoComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer,
]);

// 省份名 => 坐标映射
const provinceCoordMap: Record<string, [number, number]> = {
  北京: [116.4074, 39.9042],
  天津: [117.2000, 39.1333],
  上海: [121.4737, 31.2304],
  重庆: [106.5505, 29.5638],
  广东: [113.2665, 23.1322],
  江苏: [118.7969, 32.0603],
  浙江: [120.1536, 30.2655],
  福建: [119.2965, 26.0745],
  山东: [117.0009, 36.6758],
  河南: [113.6654, 34.7570],
  河北: [114.5300, 38.0371],
  湖南: [112.9388, 28.2282],
  湖北: [114.3054, 30.5931],
  四川: [104.0665, 30.5728],
  安徽: [117.2830, 31.8612],
  江西: [115.8579, 28.6829],
  广西: [108.3200, 22.8240],
  海南: [110.3492, 20.0174],
  山西: [112.5627, 37.8734],
  陕西: [108.9542, 34.2655],
  黑龙江: [126.6424, 45.7560],
  吉林: [125.3245, 43.8868],
  辽宁: [123.4291, 41.7968],
  贵州: [106.7074, 26.5982],
  云南: [102.7123, 25.0406],
  甘肃: [103.8343, 36.0611],
  青海: [101.7801, 36.6209],
  内蒙古: [111.7652, 40.8173],
  宁夏: [106.2782, 38.4664],
  新疆: [87.6177, 43.7928],
  西藏: [91.1322, 29.6604],
};

export default function MapPage() {
  const t = useTranslations();
  const [options, setOptions] = useState(null);

  useEffect(() => {
    fetch("/map/china.json")
      .then((res) => res.json())
      .then((geoJson) => {
        geoJson.features = geoJson.features.filter((feature) => {
          const name = feature.properties.name;
          return !["香港", "澳门", "台湾", "南海诸岛"].includes(name);
        });

        echarts.registerMap("china", geoJson);
        setOptions({
          tooltip: { trigger: "item", formatter: "{b}" },
          visualMap: {
            min: 0,
            max: 1000,
            left: "left",
            top: "bottom",
            text: ["高", "低"],
            inRange: { color: ["#e0f3f8", "#abd9e9", "#74add1", "#4575b4"] },
            show: true,
          },
          series: [
            {
              name: "地区数据",
              type: "map",
              map: "china",
              roam: true,
              zoom: 1.2,
              center: [105, 36],
              label: { show: true, fontSize: 10 },
              data: [
                { name: "北京", value: 100 },
                { name: "广东", value: 800 },
                {
                  name: "南海诸岛",
                  value: 0,
                  itemStyle: { opacity: 0 },
                  label: { show: false },
                },
              ],
            },
          ],
        });
      });
  }, []);

  return (
    <div className="w-full h-[calc(100vh-100px)] p-4">
      <h1 className="text-3xl font-bold mb-4">{t("navigation.map")}</h1>
      {options && (
        <ReactECharts
          option={options}
          notMerge
          lazyUpdate
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
