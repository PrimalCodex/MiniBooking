import {useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Link} from "react-router-dom";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !username || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    // TODO: Add your registration logic here
    alert(`Registering ${username} with email ${email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-green-900">Register</h2>

      {error && (
        <p className="mb-4 text-red-600 font-medium text-sm">{error}</p>
      )}

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
        required
      />

      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4"
        required
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
        required
      />

      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="mb-6"
        required
      />

      <Button
        type="submit"
        className="w-full bg-green-900 hover:bg-green-800 text-white py-3 rounded-lg"
      >
        Register
      </Button>

      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <Link to="/" className="text-green-900 hover:underline">
          Log In
        </Link>
      </p>
    </form>
  );
}
