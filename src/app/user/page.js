import { supabaseBrowserClient } from "@/lib/supabaseBrowserClient";

export default async function users() {
  let { data: users } = await supabaseBrowserClient.from("users").select();

  return (
    <ul>
      {users.map((user) => {
        return <li>{user.username}</li>;
      })}
    </ul>
  );
}
