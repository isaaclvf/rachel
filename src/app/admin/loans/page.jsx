import AdminHeaderBar from "@/components/admin-header-bar";
import { currentLoans } from "@/data/data";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Footer from "@/components/footer";

export const metadata = {
  title: "Empréstimos - Rachel",
};

export default function LoansAdminPage() {
  return (
    <>
      <AdminHeaderBar />
      <main className="container mx-auto py-10">
        <DataTable columns={columns} data={currentLoans} />
      </main>
      <Footer />
    </>
  );
}
