import AdminHeaderBar from "@/components/admin-header-bar";
import { useForm } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";


export default function LoansAdminPage() {
  const form = useForm();
  const tempoEmprestimo = 30;

  const manipularEnvio = (data) => {
    console.log({data, tempoEmprestimo });
  };

  return (
    <>
      <AdminHeaderBar />
      <main>
        <h1>Empréstimos Admin</h1>
        <form onSubmit={form.handleSubmit(manipularEnvio)}>
        <FormField
            control={form.control}
            name="livro"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Livro</FormLabel>
                <FormControl>
                  <Input placeholder="Livro" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />
            <FormField>
            control={form.control}
            name="usuario"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário</FormLabel>
                <FormControl>
                  <Input placeholder="Usuário" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            </FormField>
            <FormItem>
            <Button type="submit">Cadastrar Empréstimo</Button>
            </FormItem>
            <table>
            <TableCaption>Lista de Empréstimos</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">livro</TableHead>
      <TableHead>Usuario</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">{form.getValues("livro")}</TableCell>
      <TableCell>{form.getValues("usuario")}</TableCell>
    </TableRow>
  </TableBody>
            </table>
        </form>
      </main>
    </>
  );
}
