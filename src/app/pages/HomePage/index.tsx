import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Table } from './components/Table';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <Table />
      </div>
    </>
  );
}
