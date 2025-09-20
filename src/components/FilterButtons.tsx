import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const FilterButtons = ({ selectedSpecialization, setSelectedSpecialization, sortBy, setSortBy, specializations }) => {
  return (
    <div className="flex gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="px-8 py-3 text-base font-medium bg-gray-200 text-gray-800 border-0 rounded-xl shadow-sm hover:bg-gray-300"
          >
            Filters
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Filter by Specialization</DialogTitle>
          </DialogHeader>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setSelectedSpecialization("")}
              className={`px-4 py-2 rounded-full border-0 ${!selectedSpecialization ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'}`}
            >
              All
            </Button>
            {specializations.map((spec) => (
              <Button
                key={spec}
                onClick={() => setSelectedSpecialization(spec)}
                className={`px-4 py-2 rounded-full border-0 ${selectedSpecialization === spec ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'}`}
              >
                {spec}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="px-8 py-3 text-base font-medium bg-gray-200 text-gray-800 border-0 rounded-xl shadow-sm hover:bg-gray-300"
          >
            Sort By
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sort by</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => setSortBy("rating")}
              className={`px-4 py-2 rounded-lg text-left w-full border-0 ${sortBy === "rating" ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'}`}
            >
              Rating (High to Low)
            </Button>
            <Button
              onClick={() => setSortBy("price_low_to_high")}
              className={`px-4 py-2 rounded-lg text-left w-full border-0 ${sortBy === "price_low_to_high" ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'}`}
            >
              Price (Low to High)
            </Button>
            <Button
              onClick={() => setSortBy("price_high_to_low")}
              className={`px-4 py-2 rounded-lg text-left w-full border-0 ${sortBy === "price_high_to_low" ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-800'}`}
            >
              Price (High to Low)
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FilterButtons;
