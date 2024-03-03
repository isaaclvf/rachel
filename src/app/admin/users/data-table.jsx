"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function DataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="mx-auto my-0 w-full max-w-[120ch]">
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Buscar usuário..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-[#F5F5F5]"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto bg-[#F5F5F5] w-1/2">
              Colunas
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize "
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="ml-auto bg-[#F5F5F5] w-1/2">
              <PlusCircledIcon className="mr-2 h-4 w-4" /> Cadastrar novo
              usuário
            </Button>
          </DialogTrigger>
          <DialogContent className="flex h-4/5 w-3/4 flex-col overflow-scroll">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">
                Cadastro de usuário
              </DialogTitle>
              <DialogDescription>Preencha todos os campos.</DialogDescription>
            </DialogHeader>
            <form method="post">
              <fieldset>
                <legend legend className="font-serif text-lg font-bold">
                  Dados Pessoais
                </legend>
                <ul>
                  <li>
                    <label for="name">Nome:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                  <span className="mt-2 flex gap-2">
                    <li className="flex w-full flex-col">
                      <label for="birthdate">Data de nascimento:</label>
                      <input
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        className="h-8 rounded-md border border-input p-1"
                      />
                    </li>
                    <li className="flex w-full flex-col">
                      <label for="gender">Gênero:</label>
                      <select
                        name="gender"
                        id="gender"
                        className="h-8 rounded-md border border-input p-1"
                      >
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                        <option value="other">Outro</option>
                      </select>
                    </li>
                  </span>
                  <li className="mt-2">
                    <label for="cpf">CPF:</label>
                    <input
                      type="number"
                      id="cpf"
                      name="cpf"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                </ul>
              </fieldset>
              <fieldset className="mt-4">
                <legend legend className="font-serif text-lg font-bold">
                  Dados de acesso
                </legend>
                <ul>
                  <li>
                    <label for="name">Matrícula:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="mt-2">
                    <label for="birthdate">Senha:</label>
                    <input
                      type="password"
                      id="birthdate"
                      name="birthdate"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="mt-2">
                    <label for="birthdate">Confirmação de senha:</label>
                    <input
                      type="password"
                      id="birthdate"
                      name="birthdate"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                </ul>
              </fieldset>
              <fieldset className="mt-4">
                <legend legend className="font-serif text-lg font-bold">
                  Endereço
                </legend>
                <ul>
                  <li>
                    <label for="adress-street">Logradouro:</label>
                    <input
                      type="text"
                      id="adress-street"
                      name="adress-street"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="flex w-full flex-col mt-2">
                    <label for="adress-number">Número:</label>
                    <input
                      type="number"
                      id="adress-number"
                      name="adress-number"
                      className="h-8 rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="flex w-full flex-col mt-2">
                    <label for="adress-district">Bairro:</label>
                    <input
                      type="text"
                      id="adress-district"
                      name="adress-district"
                      className="h-8 rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="mt-2">
                    <label for="adress-complement">Complemento:</label>
                    <input
                      type="text"
                      id="adress-complement"
                      name="adress-complement"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="mt-2">
                    <label for="adress-city">Cidade:</label>
                    <input
                      type="text"
                      id="adress-city"
                      name="adress-city"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                </ul>
              </fieldset>
              <fieldset className="mt-4">
                <legend legend className="font-serif text-lg font-bold">
                  Contato
                </legend>
                <ul>
                  <li>
                    <label for="email">E-mail:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="flex w-full flex-col">
                    <label for="phone">Telefone:</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="h-8 w-full rounded-md border border-input p-1"
                    />
                  </li>
                </ul>
              </fieldset>
              <Button className="mt-6 bg-[#113535] w-full">Salvar cadastro</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border bg-[#F5F5F5] ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 ">
        <Button
          variant="outline"
          size="sm"
          className="bg-[#F5F5F5]"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-[#F5F5F5]"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}
