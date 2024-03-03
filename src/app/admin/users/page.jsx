import HeaderBar from "@/components/header-bar";
import { users } from "@/data/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";



export default function SearchPage() {
  return (
    <>
      <HeaderBar />
      <main className="container mx-auto flex flex-col items-center justify-center py-10">
        <Button className="text-md w-full lg:w-2/5">
          <PlusCircledIcon className="mr-2 h-4 w-4" /> Cadastrar novo usuário
        </Button>
        <DataTable columns={columns} data={users} />

      </main>
    </>
  );
}
