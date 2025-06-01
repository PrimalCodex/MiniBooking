import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {Calendar} from "@/components/ui/calendar";
import {format} from "date-fns";
import type {DateRange} from "react-day-picker";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "./ui/dropdown-menu";

export default function SearchBar() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const handleCountChange = (
    type: "adults" | "children" | "rooms",
    operation: "inc" | "dec"
  ) => {
    let value: number;
    let setValue: React.Dispatch<React.SetStateAction<number>>;
    let min: number;

    if (type === "adults") {
      value = adults;
      setValue = setAdults;
      min = 1;
    } else if (type === "children") {
      value = children;
      setValue = setChildren;
      min = 0;
    } else {
      value = rooms;
      setValue = setRooms;
      min = 1;
    }

    const newValue = operation === "inc" ? value + 1 : Math.max(min, value - 1);
    setValue(newValue);
  };

  const guestSummary = `${adults} adult${adults !== 1 ? "s" : ""} · ${
    children
  } child${children !== 1 ? "ren" : ""} · ${rooms} room${rooms !== 1 ? "s" : ""}`;

  const handleDateSelect = (range: DateRange | undefined) => {
    setDateRange(range)
  };

  const formattedDateRange =
    dateRange?.from && dateRange?.to
      ? `${format(dateRange.from, "MMM dd")} - ${format(dateRange.to, "MMM dd")}`
      : "Select dates";

  return (
    <div
      className="
    max-w-6xl mx-auto bg-white rounded-xl shadow-md
    flex flex-col gap-3 sm:flex-row sm:items-center
    p-4
  "
    >
      {/* Location Input */}
      <Input
        placeholder="Where are you going?"
        className="
      w-full sm:flex-1 px-4 py-3 text-base text-gray-900
      border border-gray-300 rounded-md sm:rounded-none
    "
      />

      {/* Date Picker */}
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="
          w-full sm:w-auto sm:flex-1 px-4 py-3 text-base text-left
          text-gray-900 bg-white border border-gray-300
          rounded-md sm:rounded-none hover:bg-gray-100
        "
          >
            {formattedDateRange}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-white p-0" align="center">
          <Calendar
            key={`${dateRange?.from?.toISOString() || ""}-${dateRange?.to?.toISOString() || ""}`}
            mode="range"
            selected={dateRange}
            onSelect={handleDateSelect}
            modifiersClassNames={{
              selected: "bg-green-900 text-white rounded-none",
              range_start: "bg-green-700 text-white rounded-l-full",
              range_end: "bg-green-700 text-white rounded-r-full",
              range_middle: "bg-green-800 text-white",
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Guest Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="
          w-full sm:w-auto px-4 py-3 text-base text-left
          text-gray-900 bg-white border border-gray-300
          rounded-md sm:rounded-none hover:bg-gray-100
        "
          >
            {guestSummary}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white p-4 space-y-4 w-64" align="end">
          {[
            {label: "Adults", value: adults, key: "adults", min: 1},
            {label: "Children", value: children, key: "children", min: 0},
            {label: "Rooms", value: rooms, key: "rooms", min: 1},
          ].map(({label, value, key, min}) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-gray-900">{label}</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCountChange(key as any, "dec")}
                  disabled={value <= min}
                >
                  −
                </Button>
                <span className="w-6 text-center">{value}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCountChange(key as any, "inc")}
                >
                  +
                </Button>
              </div>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Search Button */}
      <Button
        className="
      w-full sm:w-auto px-6 py-3 text-base font-medium
      bg-green-900 text-white rounded-md sm:rounded-none
      hover:bg-green-800
    "
      >
        Search
      </Button>
    </div>

  );
}
