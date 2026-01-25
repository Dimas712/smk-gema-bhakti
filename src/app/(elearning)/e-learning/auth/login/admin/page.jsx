"use client";

import LoginCard from "../../../../../component/auth/LoginCard";

export default function LoginAdminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-200 via-white to-gray-300 flex items-center justify-center px-4 mt-10">
      <LoginCard
        title="Login Admin"
        subtitle="Manajemen E-Learning"
        role="admin"
        buttonColor="bg-gray-800"
        redirectTo="/e-learning/admin/dashboard-admin"
      />
    </main>
  );
}
