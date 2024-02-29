import HeaderBar from "@/components/header-bar";
import { books } from "@/data/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function SearchPage() {
  return (
    <>
      <HeaderBar />
      <main className="container mx-auto py-10">
        <DataTable columns={columns} data={books} />
      </main>
    </>
  );
}
