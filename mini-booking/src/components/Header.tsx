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
  return (
    <header className="w-full bg-green-900 text-white pb-10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-5 space-y-4">
        {/* Row 1: Logo + Right Side Controls */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-0">
          <div className="text-4xl font-bold">MiniBooking</div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto justify-between">
            {/* Left side: Language & Currency */}
            <div
              className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center sm:justify-start w-full sm:w-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="rounded-full border-white text-white hover:bg-white hover:text-green-900 transition px-4 py-2 text-sm sm:text-base flex items-center">
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
                    className="uppercase rounded-full border-white text-white hover:bg-white hover:text-green-900 transition px-4 py-2 text-sm sm:text-base flex items-center">
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

            {/* Right side: Auth */}
            <div className="flex gap-3 sm:gap-5 justify-center sm:justify-start w-full sm:w-auto">
              <Button
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white hover:text-green-900 transition px-5 py-2 text-sm sm:text-base inline-flex"
              >
                Log in
              </Button>
              <Button
                className="rounded-full bg-white text-green-900 hover:bg-gray-100 transition px-5 py-2 text-sm sm:text-base inline-flex"
              >
                Register
              </Button>
            </div>
          </div>
        </div>

        {/* Row 2: Centered Nav - horizontally scrollable on small */}
        <nav className="flex overflow-x-auto justify-center sm:justify-start space-x-3 mt-8 scrollbar-hide">
          {["Stays", "Flights", "Car Rentals"].map((item) => (
            <Button
              key={item}
              variant="outline"
              className="px-6 py-5 text-lg rounded-full border-white text-white hover:bg-white hover:text-green-900 transition whitespace-nowrap flex-shrink-0"
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
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <SearchBar/>
      </div>
    </header>
  );
}
