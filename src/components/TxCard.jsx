/*
  A clean card for one transaction.
  Expects:  tx.summary   (string)
            tx.timestamp_utc (ISO string)
*/

import { Clock3 } from 'lucide-react';   // tiny icon for time (lucide-react is 2 kB)


export default function TxCard({ tx }) {
  const { summary, timestamp_utc } = tx;

  // prettify date → “22 May 2025 – 19:51 UTC”
  const date = new Date(timestamp_utc);
  const fmt  = date.toLocaleString('en‑GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC',
  });

  /* optional: highlight the asset ticker in the summary */
  const highlight = (text) =>
    text.replace(
      /(BTC|ETH|USDT|USDC|SOL|DOGE|LINK|XRP)/g,
      (m) => `<span class="text-indigo-600 font-semibold">${m}</span>`
    );

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-5 transition">
      <p
        className={clsx('text-sm leading-6 text-gray-800')}
        dangerouslySetInnerHTML={{ __html: highlight(summary) }}
      />
      <div className="flex items-center gap-1 text-xs text-gray-500 mt-4">
        <Clock3 className="w-4 h-4" />
        <span>{fmt} UTC</span>
      </div>
    </div>
  );
}
