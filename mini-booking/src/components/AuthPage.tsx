import {useState} from "react";

export default function AuthPage({onAuth}: { onAuth: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md relative overflow-hidden"
           style={{minHeight: "350px"}}>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <div
          style={{
            transition: "opacity 0.3s ease",
            opacity: isLogin ? 1 : 0,
            position: isLogin ? "static" : "absolute",
            width: "100%",
          }}
          aria-hidden={!isLogin}
        >
          {/* Login Form */}
          <LoginForm onAuth={onAuth}/>
        </div>

        <div
          style={{
            transition: "opacity 0.3s ease",
            opacity: isLogin ? 0 : 1,
            position: isLogin ? "absolute" : "static",
            width: "100%",
          }}
          aria-hidden={isLogin}
        >
          {/* Register Form */}
          <RegisterForm onAuth={onAuth}/>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-900 font-semibold hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

function LoginForm({onAuth}: { onAuth: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAuth();
      }}
      className="space-y-4"
    >
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
      />
      <input
        type="password"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
      />
      <button
        type="submit"
        className="w-full py-3 bg-green-900 text-white rounded-md hover:bg-green-800 transition"
      >
        Login
      </button>
    </form>
  );
}

function RegisterForm({onAuth}: { onAuth: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAuth();
      }}
      className="space-y-4"
    >
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
      />
      <input
        type="password"
        required
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
      />
      <input
        type="password"
        required
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-900"
      />
      <button
        type="submit"
        className="w-full py-3 bg-green-900 text-white rounded-md hover:bg-green-800 transition"
      >
        Register
      </button>
    </form>
  );
}
