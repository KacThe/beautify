import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function RevenueChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value) => `Przychód: ${value} zł`} />
        <Bar dataKey="revenue" fill="#f43f5e" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default RevenueChart;
