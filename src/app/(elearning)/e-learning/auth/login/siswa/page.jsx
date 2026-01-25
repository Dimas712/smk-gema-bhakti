import LoginCard from "../../../../../../component/auth/LoginCard";

export default function LoginSiswaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 flex items-center justify-center px-4 mt-10 text-gray-700">
      
      <LoginCard
        title="Login Siswa"
        subtitle="E-Learning SMK Gema Bhakti 1 Jasinga"
        role="Siswa"
        buttonColor="bg-green-600"
      />

    </main>
  );
}
