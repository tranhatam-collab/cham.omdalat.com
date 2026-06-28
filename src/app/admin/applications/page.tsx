import { FileText } from "lucide-react";
import * as fs from "fs";
import * as path from "path";

const DATA_FILE = path.join(process.cwd(), "src", "data", "applications.json");

interface Application {
  applicationId: string;
  full_name: string;
  email: string;
  current_role?: string;
  createdAt: string;
  [key: string]: unknown;
}

function getApplications(): Application[] {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export default function AdminApplicationsPage() {
  const applications = getApplications();

  return (
    <div className="min-h-screen bg-[--color-om-bg]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="h-6 w-6 text-[--color-om-green-700]" />
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[--color-om-green-700]">
            Applications
          </h1>
          <span className="text-sm text-[--color-om-muted]">
            ({applications.length} total)
          </span>
        </div>

        {applications.length === 0 ? (
          <div className="p-12 rounded-[--radius-om] border border-dashed border-[rgba(21,49,38,0.12)] bg-[rgba(255,255,255,0.4)] text-center">
            <p className="text-[--color-om-muted]">
              No applications yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[rgba(21,49,38,0.12)]">
                  <th className="text-left py-3 px-4 font-medium text-[--color-om-text]">ID</th>
                  <th className="text-left py-3 px-4 font-medium text-[--color-om-text]">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-[--color-om-text]">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-[--color-om-text]">Role</th>
                  <th className="text-left py-3 px-4 font-medium text-[--color-om-text]">Date</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr
                    key={app.applicationId}
                    className="border-b border-[rgba(21,49,38,0.06)] hover:bg-[rgba(255,255,255,0.4)] transition-colors"
                  >
                    <td className="py-3 px-4 font-mono text-xs text-[--color-om-green-700]">
                      {app.applicationId}
                    </td>
                    <td className="py-3 px-4 text-[--color-om-text]">{app.full_name}</td>
                    <td className="py-3 px-4 text-[--color-om-muted]">{app.email}</td>
                    <td className="py-3 px-4 text-[--color-om-muted]">{app.current_role || "—"}</td>
                    <td className="py-3 px-4 text-[--color-om-muted]">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
