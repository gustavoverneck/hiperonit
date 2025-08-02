'use client';

import { useUser } from '../hooks/useUser';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '../supabaseClient';
import ProtectedRoute from '../components/ProtectedRoute';
import DashboardMenu from '../components/DashboardMenu';
import DashboardHome from '../components/dashboard/DashboardHome';
import DashboardProfile from '../components/dashboard/DashboardProfile';
import DashboardSettings from '../components/dashboard/DashboardSettings';
import DashboardReports from '../components/dashboard/DashboardReports';

function DashboardContent() {
  const { user, email } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get('section') || 'home';

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push('/login');
    }
  };

  const renderContent = () => {
    switch (section) {
      case 'profile':
        return <DashboardProfile />;
      case 'settings':
        return <DashboardSettings />;
      case 'reports':
        return <DashboardReports />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen">
      <DashboardMenu onLogout={handleLogout} />
      
      {/* Main content with margin-left to account for sidebar */}
      <main className="md:ml-64 min-h-screen">
        <div className="p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}