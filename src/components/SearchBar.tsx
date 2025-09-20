import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full px-[8px]">
      <div className="relative">
        <Search className="absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Find your counsellor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-16 pr-6 py-4 text-lg bg-white rounded-3xl border-0 shadow-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
        />
      </div>
    </div>
  );
};

export default SearchBar;
