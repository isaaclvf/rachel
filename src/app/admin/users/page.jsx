import { users } from "@/data/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import AdminHeaderBar from "@/components/admin-header-bar";
import Footer from "@/components/footer";

export default function UserPage() {
  return (
    <>
      <AdminHeaderBar></AdminHeaderBar>
      <main className="container mx-auto flex flex-col items-center justify-center py-10">
        <DataTable columns={columns} data={users} />
      </main>
      <Footer />
    </>
  );
}
