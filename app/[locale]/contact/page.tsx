"use client";

import { useTranslations } from "next-intl";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 text-base text-foreground">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700 dark:text-blue-400">
        {t("title")}
      </h1>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary cursor-pointer animate-fade-in">
          <h2 className="text-2xl font-semibold border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            {t("join.title")}
          </h2>
          <p className="text-lg leading-relaxed">
            {t.rich("join.content", {
              strong: (chunks) => <strong>{chunks}</strong>,
              a: (chunks) => (
                <a
                  href="https://t.me/whyyoutouzhele_memecoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2 transition-colors"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary cursor-pointer animate-fade-in">
          <h2 className="text-2xl font-semibold border-l-4 border-green-600 dark:border-green-400 pl-4">
            {t("committee.title")}
          </h2>
          <p className="text-lg leading-relaxed">
            {t.rich("committee.intro", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
          <ul className="list-disc list-inside space-y-3">
            {["visionary", "tech", "design", "rights"].map((key) => (
              <li key={key}>
                {t.rich(`committee.roles.${key}`, {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary cursor-pointer animate-fade-in">
          <h2 className="text-2xl font-semibold border-l-4 border-pink-600 dark:border-pink-400 pl-4">
            {t("why.title")}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {["mission", "freedom", "future"].map((key) => (
              <li key={key}>{t(`why.${key}`)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary cursor-pointer animate-fade-in">
          <h2 className="text-2xl font-semibold border-l-4 border-yellow-500 dark:border-yellow-400 pl-4">
            {t("how.title")}
          </h2>
          <p className="text-lg leading-relaxed">{t("how.intro")}</p>
          <ul className="space-y-3">
            <li>
              <strong>Telegram：</strong>{" "}
              <a
                href="https://t.me/whyyoutouzhele_memecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                {t("how.telegram")}
              </a>
            </li>
            <li>
              <strong>电子邮件：</strong>{" "}
              <a
                href="mailto:dev@lidao.pro"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                dev@lidao.pro
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary cursor-pointer animate-fade-in">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-600 dark:border-gray-400 pl-4 mb-4">
            {t("foundation.title")}
          </h2>
          <ul className="space-y-8">
            <li>
              <p className="font-semibold text-lg mb-2">
                {t("foundation.name")}
              </p>
              <p className="flex items-center gap-2 mb-1 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                <FaTwitter />
                <a
                  href="https://twitter.com/whyyoutouzhele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @whyyoutouzhele
                </a>
              </p>
              <p className="flex items-center gap-2 hover:text-green-700 dark:hover:text-green-300 transition-colors">
                <FaEnvelope />
                <a
                  href="mailto:lilaoshitougao@gmail.com"
                  className="hover:underline"
                >
                  lilaoshitougao@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </section> */}

      {/* <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary cursor-pointer animate-fade-in">
          <h2 className="text-2xl font-semibold border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
            {t("jiang.title")}
          </h2>
          <p className="italic text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed my-4">
            {t("jiang.bio")}
          </p>
          <ul className="flex flex-wrap gap-6">
            <li className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              <FaGlobe />
              <a
                href="https://chiangseeta.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                chiangseeta.org
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <FaEnvelope />
              <a
                href="mailto:chiangseeta@gmail.com"
                className="hover:underline"
              >
                chiangseeta@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section> */}

      {/* <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-2xl border bg-card p-6 shadow-md space-y-4 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary cursor-pointer animate-fade-in">
          <h2 className="text-2xl font-semibold border-l-4 border-gray-600 dark:border-gray-400 pl-4 mb-4">
            {t("tech.title")}
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              <FaTwitter />
              <a
                href="https://twitter.com/xROx8964"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @xROx8964
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaGithub />
              <a
                href="https://github.com/Li-DAO-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/Li-DAO-Dev
              </a>
            </li>
          </ul>
        </div>
      </section> */}
    </div>
  );
}
