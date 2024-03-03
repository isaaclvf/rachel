import AdminHeaderBar from "@/components/admin-header-bar";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/app/search/data-table";
import { columns } from "@/app/search//columns";
import { books } from "@/data/data";

export default function BooksAdminPage() {
  return (
    <>
      <AdminHeaderBar />
      <main className="container mx-auto py-10">
      <DataTable columns={columns} data={books} />
        <Button>Adcionar Livro</Button>
      </main>
    </>
  );
}
