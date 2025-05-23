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
  const t = useTranslations();

  return (
    <div
      className="max-w-4xl mx-auto p-8 space-y-12
                    bg-white dark:bg-gray-900
                    text-gray-900 dark:text-gray-100"
    >
      <h1 className="text-4xl font-extrabold text-center mb-8">
        {t("contact.title") || "加入 $Li 社区"}
      </h1>

      {/* 加入 $Li 社区 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-l-4 border-blue-600 dark:border-blue-400 pl-4">
          加入 $Li 社区
        </h2>
        <p className="text-lg leading-relaxed">
          我们诚挚邀请您成为 <span className="font-semibold">$Li 社区</span>{" "}
          的一员。 这是一个致力于推动中国民主、言论自由和新闻自由的团体。
          加入我们的{" "}
          <a
            href="https://t.me/your_telegram_group"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Telegram 群组
          </a>
          ，与志同道合的伙伴交流，分享观点，共同推动积极变革。
        </p>
      </section>

      {/* 加入筹备委员会 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-l-4 border-green-600 dark:border-green-400 pl-4">
          加入筹备委员会
        </h2>
        <p className="text-lg leading-relaxed">
          您是否拥有创新想法或专业技能？ 我们正在组建筹备委员会，旨在引领 $Li
          社区向 <strong>DDAO（民主化去中心化自治组织）</strong> 方向发展。
          如果您认同我们的使命，且符合以下任一条件，欢迎加入我们：
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>独到见解的愿景者：</strong> 拥有与我们价值观契合的 DAO
            或创新项目理念。
          </li>
          <li>
            <strong>技术专家：</strong> 前端/后端开发经验；区块链开发，尤其是
            Rust 和 Solana 生态。
          </li>
          <li>
            <strong>创意设计师：</strong> 精通
            UI/UX、平面设计或其他创意领域，助力社区塑造独特形象。
          </li>
          <li>
            <strong>民主与人权倡导者：</strong>{" "}
            在民主、人权和言论自由领域具备专业知识和实践经验。
          </li>
        </ul>
      </section>

      {/* 为什么加入 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-l-4 border-pink-600 dark:border-pink-400 pl-4">
          为什么加入？
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>与志同道合且充满热情的伙伴携手共进。</li>
          <li>参与推动自由、人权及民主实验的伟大事业。</li>
          <li>在塑造 $Li 社区未来蓝图中发挥重要作用。</li>
        </ul>
      </section>

      {/* 如何申请 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-l-4 border-yellow-500 dark:border-yellow-400 pl-4">
          如何申请
        </h2>
        <p className="text-lg leading-relaxed">
          您可以通过以下方式与我们取得联系：
        </p>
        <ul className="space-y-3">
          <li>
            <strong>Telegram：</strong>{" "}
            <a
              href="https://t.me/your_telegram_group"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              点击加入我们的 Telegram 群组
            </a>
          </li>
          <li>
            <strong>电子邮件：</strong>{" "}
            <a
              href="mailto:dev@lidao.pro"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              dev@lidao.pro
            </a>
          </li>
        </ul>
      </section>

      {/* 项目推动人 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-l-4 border-gray-600 dark:border-gray-400 pl-4 mb-4">
          雪花基金会管理团队
        </h2>
        <ul className="space-y-8 text-gray-700 dark:text-gray-300">
          <li>
            <p className="font-semibold text-lg mb-2">李老师不是你老师</p>
            <p className="flex items-center gap-2 mb-1">
              <FaTwitter className="text-blue-500 dark:text-blue-400" />
              <a
                href="https://twitter.com/whyyoutouzhele"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @whyyoutouzhele
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-green-600 dark:text-green-400" />
              <a
                href="mailto:lilaoshitougao@gmail.com"
                className="hover:underline"
              >
                lilaoshitougao@gmail.com
              </a>
            </p>
          </li>

          <li>
            <p className="font-semibold text-lg mb-2">多伦多方脸</p>
            <p className="flex items-center gap-2 mb-1">
              <FaTwitter className="text-blue-500 dark:text-blue-400" />
              <a
                href="https://twitter.com/torontobigface"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @torontobigface
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-green-600 dark:text-green-400" />
              <a
                href="mailto:Torontosquareface@gmail.com"
                className="hover:underline"
              >
                Torontosquareface@gmail.com
              </a>
            </p>
          </li>

          <li>
            <p className="font-semibold text-lg mb-2">说真话的徐某人</p>
            <p className="flex items-center gap-2 mb-1">
              <FaTwitter className="text-blue-500 dark:text-blue-400" />
              <a
                href="https://twitter.com/xumouren_yt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @xumouren_yt
              </a>
            </p>
            <p className="flex items-center gap-2 mb-1">
              <FaYoutube className="text-red-600 dark:text-red-400" />
              <a
                href="https://www.youtube.com/@xumouren"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @xumouren
              </a>
            </p>
          </li>
        </ul>
      </section>

      {/* 独立项目负责人 */}
      <section className="space-y-4 border-t border-gray-300 dark:border-gray-700 pt-8">
        <h2 className="text-2xl font-semibold border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
          611 Study ICU项目负责人-蒋不
        </h2>
        <p className="italic text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed my-4">
          蒋不 — 反賊，藝術家，情境主義者。生活在巴黎。
          拍過紀錄片，當過選片人，開過出租車，進過派出所。
        </p>
        <ul className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-400 cursor-pointer">
            <FaYoutube className="text-xl" />
            <a
              href="https://www.youtube.com/@chiangseeta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @chiangseeta
            </a>
          </li>
          <li className="flex items-center gap-2 hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer">
            <FaInstagram className="text-xl" />
            <a
              href="https://instagram.com/chiangseeta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @chiangseeta
            </a>
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 cursor-pointer">
            <FaGlobe className="text-xl" />
            <a
              href="https://chiangseeta.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              chiangseeta.org
            </a>
          </li>
          <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer">
            <FaEnvelope className="text-xl" />
            <a href="mailto:chiangseeta@gmail.com" className="hover:underline">
              chiangseeta@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2 text-gray-500 cursor-default select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12a12 12 0 0024 0c0-6.627-5.372-12-12-12zm0 22a10 10 0 110-20 10 10 0 010 20zm1.5-15h-3v8h3v-8zm-1.5 10.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
            </svg>
            <span>@chiangseeta (Matters)</span>
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-l-4 border-gray-600 dark:border-gray-400 pl-4 mb-4">
          技术支持 - xROx
        </h2>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-2">
            <FaTwitter className="text-blue-500 dark:text-blue-400" />
            <a
              href="https://twitter.com/xROx8964"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @xROx8964
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub className="text-gray-800 dark:text-gray-200" />
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
      </section>
    </div>
  );
}
