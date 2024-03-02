import HeaderBar from "@/components/header-bar";
import WishlistComponet from "./wishlist";


export default function WishlistPage() {
  return (
    <>
      <HeaderBar />
      <main className="flex min-h-screen flex-col items-center gap-4 py-24">
        <WishlistComponet></WishlistComponet>
      </main>
    </>
  );
}
