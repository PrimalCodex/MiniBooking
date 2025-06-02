import {Routes, Route, Navigate} from "react-router-dom";
import LoginForm from "@/components/LoginForm.tsx";
import RegisterForm from "@/components/RegisterForm.tsx";

export default function AuthPage({onAuth}: { onAuth: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Routes>
        <Route path="/" element={<LoginForm onLogin={onAuth}/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </div>
  );
}
