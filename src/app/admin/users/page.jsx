import HeaderBar from "@/components/header-bar";
import { users } from "@/data/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AdminHeaderBar from "@/components/admin-header-bar";
import Footer from "@/components/footer";



export default function UserPage() {
  return (
    <>
      <AdminHeaderBar></AdminHeaderBar>
      <main className="container mx-auto flex flex-col items-center justify-center py-10">
        <DataTable columns={columns} data={users} />
      </main>
      <Footer/>
    </>
  );
}
