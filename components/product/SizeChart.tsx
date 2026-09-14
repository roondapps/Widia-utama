import { H3, Small } from "@/components/ui/Typography";

interface SizeChartProps {
  /** e.g. [{ size: "M", chest: "50 cm", length: "70 cm" }] — pass real
   * measurements only. Leave undefined/empty until confirmed. */
  rows?: { size: string; [measurement: string]: string }[];
  columns?: string[];
}

export function SizeChart({ rows = [], columns = [] }: SizeChartProps) {
  return (
    <div>
      <H3 as="h2" className="text-xl md:text-2xl">
        Size Chart
      </H3>
      <div className="mt-6">
        {rows.length === 0 ? (
          <div className="border border-ink-700 bg-ink-800/40 p-6 text-center">
            <Small className="text-paper-faint">
              [SIZE CHART — COMPANY DATA NEEDED]
            </Small>
          </div>
        ) : (
          <div className="overflow-x-auto border border-ink-700">
            <table className="w-full min-w-[420px] border-collapse text-left text-sm">
              <caption className="sr-only">Tabel ukuran produk</caption>
              <thead>
                <tr className="border-b border-ink-700">
                  <th scope="col" className="px-4 py-3 font-medium text-paper">
                    Size
                  </th>
                  {columns.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="px-4 py-3 font-medium text-paper"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.size}
                    className="border-b border-ink-700 last:border-b-0"
                  >
                    <th scope="row" className="px-4 py-3 font-medium text-paper">
                      {row.size}
                    </th>
                    {columns.map((col) => (
                      <td key={col} className="px-4 py-3 text-paper-muted">
                        {row[col] ?? "—"}
                      </td>
                    ))}
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
