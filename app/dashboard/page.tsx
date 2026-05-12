import { TutorialVideoModal } from "@/components/dashboard/tutorial-video-modal";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f9f7f3] text-[#211b17]">
      <header className="border-b border-[rgba(40,30,20,0.1)] bg-white/90 shadow-sm backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-semibold tracking-[0.04em] sm:text-2xl">Dashboard</h1>
          <div className="flex flex-wrap items-center justify-end gap-3">
            <TutorialVideoModal />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-[#211b17] bg-[#211b17] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#3a312b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#211b17]/50 focus-visible:ring-offset-2"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>
    </main>
  );
}
