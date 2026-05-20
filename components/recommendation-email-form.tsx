"use client"

import { FormEvent, useState } from "react"
import { Send } from "lucide-react"

type RecommendationEmailFormProps = {
  recipients: string[]
}

export function RecommendationEmailForm({
  recipients,
}: RecommendationEmailFormProps) {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [recommendation, setRecommendation] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const resolvedSubject =
      subject.trim() || "Course recommendation for CodeWithPurpose"
    const body = [
      "Hi CodeWithPurpose team,",
      "",
      `My name: ${name.trim() || "Not provided"}`,
      "",
      "Recommendation:",
      recommendation.trim() || "No recommendation provided.",
      "",
      "Sent from the CodeWithPurpose programs page.",
    ].join("\n")

    const href = `mailto:${recipients.join(",")}?subject=${encodeURIComponent(
      resolvedSubject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = href
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-cream/72">
          Your name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Optional"
            className="h-12 rounded-2xl border border-white/12 bg-white/[0.07] px-4 text-sm text-cream outline-none placeholder:text-cream/35 focus-visible:ring-2 focus-visible:ring-white/30"
          />
        </label>
        <label className="grid gap-2 text-sm text-cream/72">
          Subject
          <input
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder="Course recommendation for CodeWithPurpose"
            className="h-12 rounded-2xl border border-white/12 bg-white/[0.07] px-4 text-sm text-cream outline-none placeholder:text-cream/35 focus-visible:ring-2 focus-visible:ring-white/30"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-cream/72">
        Recommendation
        <textarea
          value={recommendation}
          onChange={(event) => setRecommendation(event.target.value)}
          placeholder="Share a course idea, improvement suggestion, or partnership recommendation."
          required
          rows={6}
          className="rounded-[1.4rem] border border-white/12 bg-white/[0.07] px-4 py-4 text-sm leading-relaxed text-cream outline-none placeholder:text-cream/35 focus-visible:ring-2 focus-visible:ring-white/30"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-cream/56">
          This opens your mail app with all three recipients, the subject, and your
          recommendation prefilled.
        </p>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cream px-6 text-sm font-semibold text-navy transition-colors hover:bg-white"
        >
          Send recommendation
          <Send className="size-4" />
        </button>
      </div>
    </form>
  )
}
