import { redirect } from "next/navigation";
import { getAdminSessionFromCookies } from "@/lib/admin-auth";

export default async function AdminPage() {
  const session = await getAdminSessionFromCookies();
  if (!session) {
    redirect("/admin/login");
  }
  redirect("/admin/applications");
}
