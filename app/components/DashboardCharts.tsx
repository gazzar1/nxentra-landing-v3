"use client";

import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";

/* ── Revenue vs Expenses ────────────────────────────── */
const revenueData = [
  { month: "Jan", revenue: 12400, expenses: 8200 },
  { month: "Feb", revenue: 15800, expenses: 9100 },
  { month: "Mar", revenue: 18200, expenses: 10400 },
  { month: "Apr", revenue: 22100, expenses: 11800 },
  { month: "May", revenue: 19600, expenses: 10200 },
  { month: "Jun", revenue: 25400, expenses: 12600 },
  { month: "Jul", revenue: 28900, expenses: 13400 },
  { month: "Aug", revenue: 31200, expenses: 14100 },
  { month: "Sep", revenue: 27800, expenses: 13800 },
  { month: "Oct", revenue: 34500, expenses: 15200 },
  { month: "Nov", revenue: 38200, expenses: 16800 },
  { month: "Dec", revenue: 42100, expenses: 18500 },
];

/* ── Balance by Type ────────────────────────────────── */
const balanceData = [
  { name: "Assets", value: 47, color: "#3b82f6" },
  { name: "Equity", value: 16, color: "#06b6d4" },
  { name: "Liabilities", value: 17, color: "#10b981" },
  { name: "Revenue", value: 11, color: "#f59e0b" },
  { name: "Expenses", value: 9, color: "#ef4444" },
];

/* ── Reconciliation Rate ────────────────────────────── */
const reconciliationData = [
  { month: "Jan", rate: 72 },
  { month: "Feb", rate: 78 },
  { month: "Mar", rate: 81 },
  { month: "Apr", rate: 85 },
  { month: "May", rate: 88 },
  { month: "Jun", rate: 91 },
  { month: "Jul", rate: 93 },
  { month: "Aug", rate: 95 },
  { month: "Sep", rate: 94 },
  { month: "Oct", rate: 96 },
  { month: "Nov", rate: 97 },
  { month: "Dec", rate: 98.8 },
];

/* ── Cash Flow ──────────────────────────────────────── */
const cashFlowData = [
  { month: "Jan", inflow: 14200, outflow: 9800 },
  { month: "Feb", inflow: 17600, outflow: 11200 },
  { month: "Mar", inflow: 21000, outflow: 13400 },
  { month: "Apr", inflow: 24800, outflow: 14600 },
  { month: "May", inflow: 22300, outflow: 13100 },
  { month: "Jun", inflow: 28700, outflow: 15900 },
  { month: "Jul", inflow: 32400, outflow: 17200 },
  { month: "Aug", inflow: 35100, outflow: 18800 },
  { month: "Sep", inflow: 30900, outflow: 16400 },
  { month: "Oct", inflow: 38200, outflow: 19600 },
  { month: "Nov", inflow: 41800, outflow: 21300 },
  { month: "Dec", inflow: 45600, outflow: 23100 },
];

const chartCard = "rounded-xl border border-white/10 bg-white/[0.03] p-5";
const chartTitle = "text-sm font-semibold text-slate-200 mb-4";

export default function DashboardCharts() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {/* Revenue vs Expenses */}
      <div className={chartCard}>
        <h3 className={chartTitle}>Revenue vs Expenses</h3>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="gRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gExp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{ background: "#1e293b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#f1f5f9", fontSize: 12 }}
              formatter={(value) => [`$${Number(value).toLocaleString()}`, ""]}
            />
            <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="url(#gRev)" strokeWidth={2} name="Revenue" />
            <Area type="monotone" dataKey="expenses" stroke="#ef4444" fill="url(#gExp)" strokeWidth={2} name="Expenses" />
            <Legend wrapperStyle={{ fontSize: 11, color: "#94a3b8" }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Balance by Type */}
      <div className={chartCard}>
        <h3 className={chartTitle}>Balance by Type</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={balanceData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {balanceData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: "#1e293b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#f1f5f9", fontSize: 12 }}
              formatter={(value) => [`${value}%`, ""]}
            />
            <Legend wrapperStyle={{ fontSize: 11, color: "#94a3b8" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Reconciliation Rate */}
      <div className={chartCard}>
        <h3 className={chartTitle}>
          Reconciliation Rate
          <span className="ml-2 text-emerald-400 text-xs font-normal">98.8% match rate</span>
        </h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={reconciliationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis domain={[60, 100]} tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
            <Tooltip
              contentStyle={{ background: "#1e293b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#f1f5f9", fontSize: 12 }}
              formatter={(value) => [`${value}%`, "Match Rate"]}
            />
            <Line type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={2.5} dot={{ r: 3, fill: "#10b981" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Cash Flow */}
      <div className={chartCard}>
        <h3 className={chartTitle}>Cash Flow</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={cashFlowData} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{ background: "#1e293b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#f1f5f9", fontSize: 12 }}
              formatter={(value) => [`$${Number(value).toLocaleString()}`, ""]}
            />
            <Bar dataKey="inflow" fill="#06b6d4" radius={[3, 3, 0, 0]} name="Inflow" />
            <Bar dataKey="outflow" fill="#8b5cf6" radius={[3, 3, 0, 0]} name="Outflow" />
            <Legend wrapperStyle={{ fontSize: 11, color: "#94a3b8" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
