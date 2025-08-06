import { employees } from "@/mockData/employees";
import StatsCard from "./stats-card";
import {
  Users,
  BarChart2,
  BuildingIcon,
  DollarSign,
  BriefcaseBusinessIcon,
} from "lucide-react";

function Stats() {
  const stats = {
    totalEmployees: employees.length,
    activeEmployees: employees.filter((e) => e.isActive).length,
    totalProjects: employees.reduce((acc, e) => acc + e.projectsCompleted, 0),
    averageSalary:
      employees.reduce((acc, e) => acc + e.salary, 0) / employees.length,
    totalDepartments: new Set(employees.map((e) => e.department)).size,
    totalPositions: new Set(employees.map((e) => e.position)).size,
  };
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Employee Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-3">
        <StatsCard
          title="Total Employees"
          description={stats.totalEmployees}
          icon={Users}
        />
        <StatsCard
          title="Active Employees"
          description={stats.activeEmployees}
          icon={Users}
        />
        <StatsCard
          title="Total Projects"
          description={stats.totalProjects}
          icon={BriefcaseBusinessIcon}
        />
        <StatsCard
          title="Average Salary"
          description={stats.averageSalary}
          icon={DollarSign}
        />
        <StatsCard
          title="Total Departments"
          description={stats.totalDepartments}
          icon={BuildingIcon}
        />
        <StatsCard
          title="Total Positions"
          description={stats.totalPositions}
          icon={BarChart2}
        />
      </div>
    </div>
  );
}

export default Stats;
