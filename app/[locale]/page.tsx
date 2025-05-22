"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaBullhorn,
  FaUserShield,
  FaClock,
  FaHandsHelping,
  FaBullseye,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";
import { useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  console.log(locale);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 text-base text-foreground">
      <header className="text-center space-y-6 max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          611 {t("site.title")} | dev
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          本项目由 <span className="font-semibold">$Li币团队</span>{" "}
          运营，灵感源自 996.ICU，致力于为被压榨的中国学生发声。
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary cursor-pointer animate-fade-in"
          tabIndex={0}
          aria-label="核心理念卡片"
        >
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaUserShield className="text-blue-500 bg-blue-100 dark:bg-blue-900 rounded-full p-1 w-6 h-6" /> 核心理念
          </h2>
          <p>
            <strong>$LI</strong> 希望建设一个{" "}
            <span className="text-primary font-medium">独一无二的社区</span>
            ，在中国这样的极权环境中，
            <strong>捍卫人权、新闻自由与言论自由</strong>。 随着 $LI
            社区的壮大，我们希望凝聚共识，共同推动这些核心价值的实现。
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer animate-fade-in">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaClock className="text-yellow-500" /> 什么是 611 学制？
          </h2>
          <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
            “611Study” 指的是“早6点上学，晚11点放学，生病
            ICU”。这已成为中国中学的普遍现象。
          </blockquote>
          <p>
            学生每周在校学习 <strong>超过 102 小时</strong>
            ，心理与身体健康遭受严重侵蚀。这一模式，
            <span className="text-destructive font-semibold">连监狱都不如</span>
            。
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer animate-fade-in">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaHandsHelping className="text-green-600" /> 我们能做什么？
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              填写 <strong>超时学习学校登记问卷</strong>，更新全国{" "}
              <span className="text-red-500">耻辱名单</span>
            </li>
            <li>互助式向异地教育局、市长热线举报上榜学校</li>
            <li>参与社区，提出新的议题与解决方案</li>
            <li>
              <span className="font-medium">下午6点钟放学回家 🕕</span> ——
              这是应有的权利
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer md:col-span-2 lg:col-span-1 animate-fade-in">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaBullseye className="text-pink-500" /> 原则与愿景
          </h2>
          <p>
            611Study.ICU
            是一场学生自下而上的呐喊，我们鼓励来自不同地区、不同领域的人士加入讨论。
            本社区提倡 <strong>成熟、负责任、有建设性的发言</strong>
            ，共同探索解决之道。
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer md:col-span-2 animate-fade-in">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaHeart className="text-rose-500" /> 我们的灵感来源
          </h2>
          <p>
            特别鸣谢 <span className="font-semibold">996.ICU</span>{" "}
            的启发与开源项目框架。我们将其精神延续到学生维权领域，
            为中国孩子争取应有的成长环境。
          </p>
          <p className="text-muted-foreground text-sm">
            请自由发挥你的力量，
            <span className="font-medium">但无需盲目扩展翻译版本</span>。
          </p>
        </div>
      </section>

      <section className="mt-24 text-center bg-gradient-to-br from-muted/60 to-muted/40 dark:from-muted/40 dark:to-muted/20 rounded-2xl p-12 shadow-xl space-y-6 animate-fade-in">
        <h3 className="text-3xl font-extrabold tracking-tight">加入我们，一起推动改变</h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          通过填写问卷、参与社区，我们共同为学生争取应有的权利。
        </p>
        <Link
          href={`/${locale}/submit`}
          className="
                inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-gradient-to-r from-blue-600 to-blue-500
                text-white font-semibold
                shadow-lg
                hover:brightness-110
                focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2
                transition
                dark:from-blue-400 dark:to-blue-300
              "
        >
          立即参与 <FaArrowRight className="ml-1" />
        </Link>
      </section>

      <footer className="text-center border-t pt-6 text-sm text-muted-foreground">
        <p>&copy; 2025 611Study.ICU. All rights reserved.</p>
      </footer>
    </div>
  );
}
