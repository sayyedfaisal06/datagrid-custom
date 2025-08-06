import { EmployeeTable } from "./components/ag-table";
import Stats from "./components/stats/stats";

const App = () => {
  return (
    <div className="p-6 bg-slate-100">
      <h1 className="text-2xl font-bold mb-6">Employee Management</h1>
      <div className="flex flex-col gap-6">
        <Stats />
        <EmployeeTable />
      </div>
    </div>
  );
};

export default App;
