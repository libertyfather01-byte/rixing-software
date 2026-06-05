"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { 
  LayoutDashboard, Users, Briefcase, FileText, 
  MessageSquare, Settings, LogOut, FileImage, 
  Menu, X, BookOpen, UserCircle, LifeBuoy
} from "lucide-react";
import { useState } from "react";
import styles from "./layout.module.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Clients", href: "/admin/clients", icon: UserCircle },
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Portfolio", href: "/admin/portfolio", icon: FileImage },
    { name: "Blog", href: "/admin/blog", icon: BookOpen },
    { name: "Careers", href: "/admin/careers", icon: FileText },
    { name: "Contact Requests", href: "/admin/contacts", icon: MessageSquare },
    { name: "Support Tickets", href: "/admin/tickets", icon: LifeBuoy },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className={styles.adminLayout}>
      {/* Mobile Sidebar Toggle */}
      <div className={styles.mobileHeader}>
        <span className={styles.brand}>Admin Panel</span>
        <button className={styles.toggleBtn} onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
        <div className={styles.sidebarHeader}>
          <h2>Rixing Admin</h2>
          <p className={styles.userRole}>{session?.user?.role || "Admin"}</p>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className={styles.sidebarFooter}>
          <button onClick={() => signOut({ callbackUrl: "/login" })} className={styles.logoutBtn}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {children}
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}
