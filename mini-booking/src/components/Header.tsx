import {useState} from "react";
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import {CircleDollarSign, Globe} from "lucide-react";
import SearchBar from "@/components/SearchBar.tsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-green-900 text-white pb-10 shadow-sm relative">
      <div className="max-w-6xl mx-auto px-4 py-5 space-y-4">
        {/* Row 1: Logo + Controls */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-4xl font-bold">MiniBooking</div>

          {/* Desktop controls */}
          <div className="hidden sm:flex items-center gap-6">
            {/* Language & Currency */}
            <div className="flex items-center gap-5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-green-900 hover:bg-transparent transition px-4 py-2 text-sm flex items-center">
                    <Globe className="w-4 h-4 mr-1"/>
                    EN
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white text-black">
                  <DropdownMenuItem>EN - English</DropdownMenuItem>
                  <DropdownMenuItem>DE - Deutsch</DropdownMenuItem>
                  <DropdownMenuItem>FR - Français</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="bg-green-900 hover:bg-transparent uppercase transition px-4 py-2 text-sm flex items-center">
                    <CircleDollarSign className="w-4 h-4 mr-1"/>
                    eur
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white text-black">
                  <DropdownMenuItem>EUR - Euro</DropdownMenuItem>
                  <DropdownMenuItem>USD - US Dollar</DropdownMenuItem>
                  <DropdownMenuItem>GBP - Pound Sterling</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Auth buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="rounded-full bg-white text-green-900 hover:bg-gray-100 transition px-5 py-2 text-sm inline-flex"
              >
                Log in
              </Button>
              <Button
                className="rounded-full bg-white text-green-900 hover:bg-gray-100 transition px-5 py-2 text-sm inline-flex"
              >
                Register
              </Button>
            </div>
          </div>

          {/* Hamburger button - only on small screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 rounded-md hover:bg-green-800 transition"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown (Login/Register inside) */}
        {menuOpen && (
          <div
            className="sm:hidden fixed top-16 right-4 w-40 bg-green-900 rounded-md p-4 shadow-lg z-50 flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full rounded-full bg-white text-green-900 hover:bg-gray-100 transition px-5 py-2 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </Button>
            <Button
              className="w-full rounded-full bg-white text-green-900 hover:bg-gray-100 transition px-5 py-2 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Button>
          </div>
        )}

        {/* Row 2: Centered Nav */}
        <nav className="flex overflow-x-auto justify-center sm:justify-start space-x-3 mt-8 scrollbar-hide">
          {["Stays", "Flights", "Car Rentals"].map((item) => (
            <Button
              key={item}
              variant="outline"
              className="rounded-full bg-white text-green-900 hover:bg-gray-100 transition px-5 py-2 text-sm sm:text-base inline-flex"
            >
              {item}
            </Button>
          ))}
        </nav>

        {/* Row 3: Header Text */}
        <div className="pt-6 text-center sm:text-left">
          <h2 className="text-3xl font-semibold mb-2">Find your next stay</h2>
          <p className="text-gray-100">
            Search deals on hotels, homes, and much more...
          </p>
        </div>
      </div>

      {/* SearchBar */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <SearchBar/>
      </div>
    </header>
  );
}
