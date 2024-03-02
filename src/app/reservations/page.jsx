import HeaderBar from "@/components/header-bar";

import Reservation from "./reservations";

export default function ReservationsPage() {
  return (
    <>
      <HeaderBar />
      <main className="flex min-h-screen flex-col items-center gap-4 py-24">
        <Reservation/>
      </main>
    </>
  );
}
