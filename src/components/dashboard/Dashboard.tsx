import { useSelector } from 'react-redux'
import type { RootState } from '../../stores'

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

function Dashboard() {
  const todos = useSelector((state: RootState) => state.todos);
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const remaining = total - completed;

  const pieData = [
    { name: 'Hoàn thành', value: completed },
    { name: 'Chưa hoàn thành', value: remaining },
  ];

  const barData = [
    { name: 'Tổng công việc', value: total },
    { name: 'Hoàn thành', value: completed },
    { name: 'Chưa hoàn thành', value: remaining },
  ];

  const COLORS = ['#00C49F', '#FF8042'];

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

      <div style={{ display: 'flex',flexDirection: 'column',  justifyContent: 'center',alignItems: 'center',
 padding: '0 20px' }}>
        
        <PieChart width={800} height={250}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={80} 
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

       
        <div style={{ marginTop: '20px' }}>
          <BarChart width={800} height={350} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#b8a88f" barSize={60} />
          </BarChart>
        </div>
      </div>

      
      <div style={{ marginTop: 30, textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <p><strong>Tổng công việc:</strong> {total}</p>
        <p><strong>Đã hoàn thành:</strong> {completed}</p>
        <p><strong>Chưa hoàn thành:</strong> {remaining}</p>
      </div>
    </div>

  );
}

export default Dashboard;
