import React, { useState, useMemo } from 'react';
import CounsellorGrid from '../components/CounsellorGrid';
import SearchBar from '../components/SearchBar';
import FilterButtons from '../components/FilterButtons';
import GradientOrbs from '../components/GradientOrbs';

// Import image assets
import counsellor1 from '../assets/counsellor-1.jpg';
import counsellor2 from '../assets/counsellor-2.jpg';
import counsellor3 from '../assets/counsellor-3.jpg';
import counsellor4 from '../assets/counsellor-4.jpeg';
import counsellor5 from '../assets/counsellor-5.jpeg';
import counsellor6 from '../assets/counsellor-6.jpeg';
import counsellor7 from '../assets/counsellor-7.jpeg';
import counsellor8 from '../assets/counsellor-8.jpeg';
import counsellor9 from '../assets/counsellor-9.jpeg';
import { X } from 'lucide-react';


// Mapping for images to be used dynamically
const imageMap = {
  1: counsellor1,
  2: counsellor2,
  3: counsellor3,
  4: counsellor4,
  5: counsellor5,
  6: counsellor6,
  7: counsellor7,
  8: counsellor8,
  9: counsellor9,
};


const initialCounselors = [
  {
    id: 1,
    name: "Akshay Kapoor",
    image: imageMap[1],
    rating: 4,
    reviews: 271,
    specialization: "Anxiety & Depression",
    university: "Govt. University of J&K",
    hours: "900+ hours",
    students: "60+ students",
    price: 2000,
  },
  {
    id: 2,
    name: "Rajat Singh",
    image: imageMap[2],
    rating: 3,
    reviews: 178,
    specialization: "Relationship",
    university: "University of Jammu",
    hours: "600+ hours",
    students: "31+ students",
    price: 1700,
  },
  {
    id: 3,
    name: "Vansh Gupta",
    image: imageMap[3],
    rating: 5,
    reviews: 578,
    specialization: "Carrer",
    university: "University of Kashmir",
    hours: "1500+ hours",
    students: "100+ students",
    price: 0,
  },
  {
    id: 4,
    name: "Ajay Rajput",
    image: imageMap[4],
    rating: 4,
    reviews: 426,
    specialization: "Family",
    university: "Shri Mata Vaishno Devi University",
    hours: "720+ hours",
    students: "57+ students",
    price: 1400,
  },
  {
    id: 5,
    name: "Tanya Mehta",
    image: imageMap[5],
    rating: 3,
    reviews: 98,
    specialization: "Carrer",
    university: "Central University Of Jammu",
    hours: "50+ hours",
    students: "5+ students",
    price: 0,
  },
  {
    id: 6,
    name: "Kanika Kapoor",
    image: imageMap[6],
    rating: 4,
    reviews: 687,
    specialization: "Anxiety & Depression",
    university: "Central University of Kashmir",
    hours: "1000+ hours",
    students: "120+ students",
    price: 1600,
  },
  {
    id: 7,
    name: "Manav Mohite",
    image: imageMap[7],
    rating: 5,
    reviews: 784,
    specialization: "Carrer",
    university: "NIT Srinagar",
    hours: "900+ hours",
    students: "95+ students",
    price: 0,
  },
  {
    id: 8,
    name: "Ashwini Rane",
    image: imageMap[8],
    rating: 4,
    reviews: 441,
    specialization: "Family",
    university: "University of J&K",
    hours: "410+ hours",
    students: "55+ students",
    price: 1100,
  },
  {
    id: 9,
    name: "Gaurav Khanna",
    image: imageMap[9],
    rating: 5,
    reviews: 682,
    specialization: "Relationship",
    university: "NIT Srinagar",
    hours: "1200+ hours",
    students: "150+ students",
    price: 600,
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  // Filter and sort the counselors based on state
  const filteredAndSortedCounselors = useMemo(() => {
    let result = [...initialCounselors];

    if (searchTerm) {
      result = result.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.specialization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSpecialization) {
      result = result.filter(c => c.specialization === selectedSpecialization);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price_low_to_high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_high_to_low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchTerm, selectedSpecialization, sortBy]);

  const availableSpecializations = useMemo(() => {
    const specializations = initialCounselors.map(c => c.specialization);
    return [...new Set(specializations)];
  }, []);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'var(--background-gradient)' }}
    >
      <GradientOrbs />
      
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex flex-col items-center mb-8">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        
        <div className="flex justify-start mb-8">
          <FilterButtons
            selectedSpecialization={selectedSpecialization}
            setSelectedSpecialization={setSelectedSpecialization}
            sortBy={sortBy}
            setSortBy={setSortBy}
            specializations={availableSpecializations}
          />
        </div>
        
        <CounsellorGrid counselors={filteredAndSortedCounselors} />
      </div>
    </div>
  );
};

export default Index;
