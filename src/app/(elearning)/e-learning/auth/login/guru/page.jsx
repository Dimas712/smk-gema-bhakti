"user client";

import LoginCard from "../../../../../../component/auth/LoginCard";

export default function LoginGuruPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center px-4 mt-10">
      <LoginCard
        title="Login Guru"
        subtitle="E-Learning SMK Gema Bhakti 1 Jasinga"
        role="guru"
        buttonColor="bg-blue-600"
        redirectTo="/e-learning/guru/dashboard-guru"
      />
    </main>
  );
}
