export default function ConfirmationPage() {
  return (
    <div className="max-w-xl mx-auto mt-16 text-center bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Booking Confirmed!</h1>
      <p className="text-gray-600 mb-4">
        This is a placeholder confirmation page. You can show user info, reservation details, etc.
      </p>
      <a href="/" className="text-blue-600 hover:underline">← Back to home</a>
    </div>
  );
}
