import { Table } from '@mui/joy';
import React, { useEffect, useState } from 'react';

export interface Books {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: number;
}

export function GetBooks(): Books[] {
  return [
    {
      id: 1,
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      rating: 3,
      price: 9.99,
    },
    {
      id: 2,
      title: 'Frankenstein',
      author: 'Mary Wollstonecraft Shelley',
      rating: 5,
      price: 7.95,
    },
    {
      id: 3,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      rating: 4,
      price: 10.95,
    },
    { id: 4, title: 'Dracula', author: 'Bram Stoker', rating: 5, price: 14.99 },
    {
      id: 5,
      title: 'Pride and Prejudice',
      rating: 4,
      author: 'Jane Austen',
      price: 12.85,
    },
  ];
}

export function BookList() {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    const booksData = GetBooks();
    setBooks(booksData);
  }, []);

  return (
    <Table>
      <thead>
        <tr style={{ width: '40%' }}>
          <th>Book Name</th>
          <th>Author</th>
          <th>Rating</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td> {book.author}</td>
            <td>{book.rating}</td>
            <td>${book.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
