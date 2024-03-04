import HeaderBar from "@/components/header-bar";
import Wishlist from "@/components/wishlist";
import Footer from "@/components/footer";

export default function WishlistPage() {
  return (
    <>
      <HeaderBar />
      <main className="flex min-h-lvh flex-col items-center gap-4 py-24">
        <Wishlist />
      </main>
      <Footer />
    </>
  );
}
