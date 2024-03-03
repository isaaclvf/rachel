import AdminHeaderBar from "@/components/admin-header-bar";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { books } from "@/data/data";


export default function BooksAdminPage() {
  return (
    <>
      <AdminHeaderBar />
      <main className="container mx-auto py-10 ">
      <DataTable columns={columns} data={books} />
      
      </main>
    </>
  );
}
