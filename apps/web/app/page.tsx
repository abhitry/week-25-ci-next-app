import {client} from "@repo/db/client2";


export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <p>Username: {user?.username}</p>
      <p>Password: {user?.password}</p>
    </div>
  );
}