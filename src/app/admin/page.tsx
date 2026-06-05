import prisma from "@/lib/prisma";
import { 
  Users, Briefcase, FileText, LifeBuoy, 
  DollarSign, Activity, TrendingUp, Target
} from "lucide-react";
import styles from "./page.module.css";

export const dynamic = 'force-dynamic';

export default async function AdminOverview() {
  // Fetch stats concurrently
  const [
    totalClients,
    totalProjects,
    activeProjects,
    totalLeads,
    blogCount,
    supportTickets,
    openTickets,
    invoices
  ] = await Promise.all([
    prisma.client.count(),
    prisma.project.count(),
    prisma.project.count({ where: { status: { in: ["PLANNING", "IN_PROGRESS", "REVIEW"] } } }),
    prisma.lead.count(),
    prisma.blogPost.count(),
    prisma.supportTicket.count(),
    prisma.supportTicket.count({ where: { status: "OPEN" } }),
    prisma.invoice.findMany({ select: { amount: true, status: true } })
  ]);

  const totalRevenue = invoices
    .filter(i => i.status === "PAID")
    .reduce((sum, i) => sum + i.amount, 0);

  const pendingRevenue = invoices
    .filter(i => i.status === "UNPAID")
    .reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard Overview</h1>
        <p className={styles.subtitle}>Analytics and summary of operations</p>
      </div>

      <div className={styles.statsGrid}>
        
        {/* Revenue */}
        <div className={`glass-card ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>Total Revenue</span>
            <DollarSign className={styles.statIcon} size={20} />
          </div>
          <div className={styles.statValue}>${totalRevenue.toLocaleString()}</div>
          <div className={styles.statTrend}>
            <TrendingUp size={14} className={styles.trendUp} />
            <span className={styles.trendText}>+12% from last month</span>
          </div>
        </div>

        {/* Pending Revenue */}
        <div className={`glass-card ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>Pending Revenue</span>
            <Activity className={styles.statIcon} size={20} />
          </div>
          <div className={styles.statValue}>${pendingRevenue.toLocaleString()}</div>
          <div className={styles.statTrend}>Unpaid Invoices</div>
        </div>

        {/* Projects */}
        <div className={`glass-card ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>Active Projects</span>
            <Briefcase className={styles.statIcon} size={20} />
          </div>
          <div className={styles.statValue}>{activeProjects}</div>
          <div className={styles.statTrend}>Out of {totalProjects} total projects</div>
        </div>

        {/* Clients */}
        <div className={`glass-card ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>Total Clients</span>
            <Users className={styles.statIcon} size={20} />
          </div>
          <div className={styles.statValue}>{totalClients}</div>
        </div>

        {/* Leads */}
        <div className={`glass-card ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>New Leads</span>
            <Target className={styles.statIcon} size={20} />
          </div>
          <div className={styles.statValue}>{totalLeads}</div>
        </div>

        {/* Tickets */}
        <div className={`glass-card ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>Open Tickets</span>
            <LifeBuoy className={styles.statIcon} size={20} />
          </div>
          <div className={styles.statValue}>{openTickets}</div>
          <div className={styles.statTrend}>Out of {supportTickets} total tickets</div>
        </div>

        {/* Blogs */}
        <div className={`glass-card ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>Blog Posts</span>
            <FileText className={styles.statIcon} size={20} />
          </div>
          <div className={styles.statValue}>{blogCount}</div>
        </div>

      </div>

      <div className={styles.dashboardBody}>
        {/* We can add recent activity feeds or charts here later */}
        <div className={`glass-card ${styles.activityFeed}`}>
          <h3>Recent Activity</h3>
          <p className="text-muted">No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
}
