"use client";

import { supabaseBrowserClient } from "@/lib/supabaseBrowserClient";
import { useParams } from "next/navigation";

export default async function UserProfile() {
  const { user_id } = useParams();

  let { data: users } = await supabaseBrowserClient
    .from("users")
    .select("*")
    .eq("user_id", user_id);

  return (
    <div>
      {users.map((user, index) => {
        return (
          <div>
            <p id={index}>{user.username}</p>
            <details className="dropdown items-center">
              <summary className="btn m-1">{user.goal}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <a>TypeScript</a>
                </li>
                <li>
                  <a>Next.js</a>
                </li>
              </ul>
            </details>
          </div>
        );
      })}
    </div>
  );
}
