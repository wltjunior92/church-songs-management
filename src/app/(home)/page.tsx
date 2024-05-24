import { Calendar } from '@/components/calendar'

export default function Home() {
  return (
    <div className="w-full flex justify-center border">
      <main className="grid grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <h1>Home</h1>
        </div>
        <Calendar />
      </main>
    </div>
  )
}
