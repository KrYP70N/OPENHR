"use client";
import { trpc } from "@/server/client";

export default function Home() {
  const user = trpc.users.getUser.useQuery();
  return (
    <div>{JSON.stringify(user.data)}</div>  
  );
}
