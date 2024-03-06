'use client';

import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";
import { useState } from "react";

export default function Home() {

  const [clients, setClients] = useState<Client[]>([
    new Client('João', 20, 1),
    new Client('Maria', 25, 2),
    new Client('Pedro', 30, 3),
]);

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-600 to-blue-700 text-white">
      <Layout title="NextJS Client List">
        <Table clients={clients}/>
      </Layout>
    </div>
  );
}
