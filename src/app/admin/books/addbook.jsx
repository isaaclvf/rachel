import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function AddBook() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="ml-auto w-1/2 bg-[#F5F5F5]">
            <PlusCircledIcon className="mr-1 h-4 w-4" />
            <p className="hidden md:inline">Adicionar livro</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="flex h-4/5 w-3/4 flex-col overflow-scroll">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              Cadastro de Livro
            </DialogTitle>
            <DialogDescription>Preencha todos os campos.</DialogDescription>
          </DialogHeader>
          <form method="post">
            <fieldset>
              <legend legend className="font-serif text-lg font-bold">
                Dados do livro
              </legend>
              <ul>
                <li>
                  <label for="name">Título:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="h-8 w-full rounded-md border border-input p-1"
                  />
                </li>
                <li>
                  <label for="name">Autor:</label>
                  <input
                    type="text"
                    id="autor"
                    name="autor"
                    className="h-8 w-full rounded-md border border-input p-1"
                  />
                </li>
                <li>
                  <label for="name">Editora:</label>
                  <input
                    type="text"
                    id="editora"
                    name="editora"
                    className="h-8 w-full rounded-md border border-input p-1"
                  />
                </li>

                <span className="mt-2 flex gap-2">
                  <li className="flex w-full flex-col">
                    <label for="gender">Estado:</label>
                    <select
                      name="gender"
                      id="gender"
                      className="h-8 rounded-md border border-input p-1"
                    >
                      <option value="other">Novo</option>
                      <option value="other">Desgastado</option>
                      <option value="other">Seminovo</option>
                    </select>
                  </li>
                  <li className="flex w-full flex-col">
                    <label for="number">Edição:</label>
                    <input
                      type="number"
                      id="edic"
                      name="edic"
                      className="h-8 rounded-md border border-input p-1"
                    />
                  </li>
                </span>
                <span className="mt-2 flex gap-2">
                  <li className="flex w-full flex-col">
                    <label for="birthdate">Data de lançamento:</label>
                    <input
                      type="date"
                      id="birthdate"
                      name="birthdate"
                      className="h-8 rounded-md border border-input p-1"
                    />
                  </li>
                  <li className="flex w-full flex-col">
                    <label for="number">Páginas:</label>
                    <input
                      type="number"
                      id="paginas"
                      name="paginas"
                      className="h-8 rounded-md border border-input p-1"
                    />
                  </li>
                </span>
                <li className="mt-2">
                  <label for="gender">Gênero:</label>
                  <select
                    name="gender"
                    id="gender"
                    className="h-8 w-full rounded-md border border-input p-1"
                  >
                    <option value="other">Outro</option>
                  </select>
                </li>
                <li className="mt-2">
                  <label for="isbn">ISBN:</label>
                  <input
                    type="number"
                    id="isbn"
                    name="isbn"
                    className="h-8 w-full rounded-md border border-input p-1"
                  />
                </li>

                <li className="flex w-full flex-col">
                  <label for="gender">Idioma:</label>
                  <select
                    name="gender"
                    id="gender"
                    className="h-8 rounded-md border border-input p-1"
                  >
                    <option value="male">Português</option>
                    <option value="male">Inglês</option>
                    <option value="female">Espanhol</option>
                    <option value="other">Outro</option>
                  </select>
                </li>
              </ul>
            </fieldset>
            <Button className="mt-6 w-full bg-[#113535]">
              Salvar cadastro
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
