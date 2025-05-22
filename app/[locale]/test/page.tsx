import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslations } from "next-intl";

export default function SchoolForm() {
  const t = useTranslations("Form");
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    province: "",
    city: "",
    district: "",
    schoolName: "",
    grade: "",
    schoolStartTime: "",
    schoolEndTime: "",
    weeklyStudyHours: "",
    monthlyHolidays: "",
    suicideCases: "",
    studentComments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });
      if (!res.ok) throw new Error();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const provinces = ["北京", "上海", "广东", "浙江", "江苏"];

  return (
    <div className="container py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold mb-2 text-center dark:text-white">
          {t("title")}
        </h1>
        <p className="text-center text-neutral-600 dark:text-neutral-400">
          {t("description")}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
          {/* 基本信息 */}
          <Card>
            <CardHeader>
              <CardTitle>{t("section.basic")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="province" className="block text-sm font-medium mb-1">
                  {t("province.label")}
                </label>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">{t("province.placeholder")}</option>
                  {provinces.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-1">
                    {t("city.label")}
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder={t("city.placeholder")}
                    className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                  />
                </div>
                <div>
                  <label htmlFor="district" className="block text-sm font-medium mb-1">
                    {t("district.label")}
                  </label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                    placeholder={t("district.placeholder")}
                    className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium mb-1">
                  {t("schoolName.label")}
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                  placeholder={t("schoolName.placeholder")}
                  className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                />
              </div>

              <div>
                <label htmlFor="grade" className="block text-sm font-medium mb-1">
                  {t("grade.label")}
                </label>
                <input
                  type="text"
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  placeholder={t("grade.placeholder")}
                  className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                />
              </div>
            </CardContent>
          </Card>

          {/* 学习情况 */}
          <Card>
            <CardHeader>
              <CardTitle>{t("section.study")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="schoolStartTime" className="block text-sm font-medium mb-1">
                    {t("schoolStartTime.label")}
                  </label>
                  <input
                    type="time"
                    id="schoolStartTime"
                    name="schoolStartTime"
                    value={formData.schoolStartTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                  />
                </div>
                <div>
                  <label htmlFor="schoolEndTime" className="block text-sm font-medium mb-1">
                    {t("schoolEndTime.label")}
                  </label>
                  <input
                    type="time"
                    id="schoolEndTime"
                    name="schoolEndTime"
                    value={formData.schoolEndTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="weeklyStudyHours" className="block text-sm font-medium mb-1">
                    {t("weeklyStudyHours.label")}
                  </label>
                  <input
                    type="number"
                    id="weeklyStudyHours"
                    name="weeklyStudyHours"
                    value={formData.weeklyStudyHours}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                  />
                </div>
                <div>
                  <label htmlFor="monthlyHolidays" className="block text-sm font-medium mb-1">
                    {t("monthlyHolidays.label")}
                  </label>
                  <input
                    type="number"
                    id="monthlyHolidays"
                    name="monthlyHolidays"
                    value={formData.monthlyHolidays}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 反馈信息 */}
          <Card>
            <CardHeader>
              <CardTitle>{t("section.feedback")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="suicideCases" className="block text-sm font-medium mb-1">
                  {t("suicideCases.label")}
                </label>
                <input
                  type="number"
                  id="suicideCases"
                  name="suicideCases"
                  value={formData.suicideCases}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                />
              </div>
              <div>
                <label htmlFor="studentComments" className="block text-sm font-medium mb-1">
                  {t("studentComments.label")}
                </label>
                <textarea
                  id="studentComments"
                  name="studentComments"
                  value={formData.studentComments}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={t("studentComments.placeholder")}
                  className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
                />
              </div>
            </CardContent>
          </Card>

          {/* 验证码 */}
          <div className="pt-2">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              ref={recaptchaRef}
              onChange={onRecaptchaChange}
            />
          </div>

          {/* 提交按钮 */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? t("submitting") : t("submit")}
            </Button>
          </div>

          {/* 状态反馈 */}
          {submitStatus === "success" && (
            <Alert variant="default" className="text-green-600">
              <AlertTitle>{t("success")}</AlertTitle>
              <AlertDescription>{t("successDesc")}</AlertDescription>
            </Alert>
          )}
          {submitStatus === "error" && (
            <Alert variant="destructive">
              <AlertTitle>{t("error")}</AlertTitle>
              <AlertDescription>{t("errorDesc")}</AlertDescription>
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
}
