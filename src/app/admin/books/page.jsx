import AdminHeaderBar from "@/components/admin-header-bar";
import { Button } from "@/components/ui/button";

export default function BooksAdminPage() {
  return (
    <>
      <AdminHeaderBar />
      <main>
        <Button>Adcionar Livro</Button>
        <h1>Livros Admin</h1>
      </main>
    </>
  );
}
