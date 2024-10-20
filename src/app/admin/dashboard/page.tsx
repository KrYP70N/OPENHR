import DashboardCard from "./components/card";
import PeiChart from "./components/pie-chart";

export default function Dashboard() {
  return (
    <section className='grid grid-cols-3 gap-4'>
      <DashboardCard link="/" icon="/img/attendance-dashboard.png">
        <h2 className="font-semibold mb-2">Attendance</h2>
        <p className="font-light text-sm">Review and manage attendance.</p>
      </DashboardCard>
      <DashboardCard link="/" icon="/img/leave-dashboard.png">
        <h2 className="font-semibold mb-2">Leave</h2>
        <p className="font-light text-sm">Review, assign and manage leave.</p>
      </DashboardCard>
      <DashboardCard link="/" icon="/img/overtime-dashboard.png">
        <h2 className="font-semibold mb-2">Overtime</h2>
        <p className="font-light text-sm">Control overtime.</p>
      </DashboardCard>

      <PeiChart name="Attendent Overview" />
      <PeiChart name="Leave Overview" />
      <PeiChart name="Overtime Overview" />
    </section>
  )
}
