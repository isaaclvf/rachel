const loans = [
  {
    title: "Dom Casmurro, Machado de Assis",
    dueDate: "12/03/2024",
    renewals: 0,
    partialFine: "0,00",
  },
  {
    title: "O Alienista, Machado de Assis",
    dueDate: "13/03/2024",
    renewals: 0,
    partialFine: "0,00",
  },
  {
    title: "Quincas Borba, Machado de Assis",
    dueDate: "14/03/2024",
    renewals: 2,
    partialFine: "0,00",
  },
  {
    title: "Memórias Póstumas de Brás Cubas, Machado de Assis",
    dueDate: "12/03/2024",
    renewals: 1,
    partialFine: "0,00",
  },
  {
    title: "Helena, Machado de Assis",
    dueDate: "12/03/2024",
    renewals: 0,
    partialFine: "0,00",
  },
  {
    title: "A Cartomante, Machado de Assis",
    dueDate: "13/03/2024",
    renewals: 8,
    partialFine: "0,00",
  },
  {
    title: "Esaú e Jacó, Machado de Assis",
    dueDate: "14/03/2024",
    renewals: 9,
    partialFine: "0,00",
  },
];

const catSrc =
  "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";

const books = [
  {
    title: "Dom Casmurro",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "O Alienista",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "indisponível"
  },
  {
    title: "Quincas Borba",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "indisponível"
  },
  {
    title: "Helena",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "A Cartomante",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "Esaú e Jacó",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "indisponível"
  },
  {
    title: "Dom Casmurro",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "O Alienista",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "indisponível"
  },
  {
    title: "Quincas Borba",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "indisponível"
  },
  {
    title: "Helena",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "A Cartomante",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "Esaú e Jacó",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "indisponível"
  },
  {
    title: "Dom Casmurro",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "O Alienista",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "indisponível"
  },
  {
    title: "Quincas Borba",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "indisponível"
  },
  {
    title: "Helena",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "A Cartomante",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "disponível"
  },
  {
    title: "Esaú e Jacó",
    author: "Machado de Assis",
    edition: "2",
    isbn: "123456",
    status: "indisponível"
  },
];

const users = [
  {
    tuition: "2000101010",
    name: "Leonardo Pereira Silva",
  },
  {
    tuition: "2000101011",
    name: "Riquelme Jatay Ribeiro Scarcela Bezerra",
  },
  {
    tuition: "2000101012",
    name: "Isaac Alves",
  },
  {
    tuition: "2000101013",
    name: "Rafael Cunha",
  }
];

const currentLoans = [
  {
    username: "Rafael Cunha",
    userId: "2000101013",
    bookTitle: "O Alienista, Machado de Assis",
    bookId: "1",
    dueDate: "2024-03-13",
    partialFine: 0,
    renewals: 0,
  },
  {
    username: "Isaac Alves",
    userId: "2000101012",
    bookTitle: "Macunaíma, Mário de Andrade",
    bookId: "2",
    dueDate: "2024-02-20",
    partialFine: 5.35,
    renewals: 0,
  },
  {
    username: "Riquelme Jatay Ribeiro Scarcela Bezerra",
    userId: "2000101011",
    bookTitle: "IT A Coisa, Stephen King",
    bookId: "3",
    dueDate: "2024-03-16",
    partialFine: 0,
    renewals: 3,
  },
  {
    username: "Leonardo Pereira Silva",
    userId: "2000101010",
    bookTitle: "O Pequeno Príncipe, Antoine de Saint-Exupéry",
    bookId: "4",
    dueDate: "2024-03-03",
    partialFine: 0,
    renewals: 1,
  },
]

export { loans, catSrc, books, users, currentLoans };
