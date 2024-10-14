import { BarChart, FileText, Star, Users } from "lucide-react";
import StatCard from "../StatCard";

type UserRole =
  | "customer"
  | "consultingStaff"
  | "designStaff"
  | "constructionStaff"
  | "manager";

interface Stat {
  icon: any;
  title: string;
  value: string;
}

const HomePage = ({ userRole }: { userRole: UserRole }) => {
  const commonStats: Stat[] = [
    { icon: FileText, title: "Đơn hàng mới", value: "8,282" },
    { icon: Users, title: "Khách hàng", value: "200,521" },
    { icon: Star, title: "Đánh giá", value: "215,542" },
  ];

  const roleSpecificStats = {
    customer: [{ icon: BarChart, title: "Tiến độ dự án", value: "75%" }],
    consultingStaff: [
      { icon: Users, title: "Khách hàng tiềm năng", value: "50" },
    ],
    designStaff: [{ icon: FileText, title: "Thiết kế chờ duyệt", value: "15" }],
    constructionStaff: [
      { icon: BarChart, title: "Dự án đang thi công", value: "8" },
    ],
    manager: [{ icon: BarChart, title: "Doanh thu tháng", value: "500M VND" }],
  };

  const stats = [...commonStats, ...(roleSpecificStats[userRole] || [])];

  return (
    <div className="mt-4">
      <div className="flex flex-wrap -mx-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
