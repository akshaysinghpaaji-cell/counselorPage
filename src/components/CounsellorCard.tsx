import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CounsellorCardProps {
  counsellor: {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    specialization: string;
    university: string;
    hours: string;
    students: string;
    price: number;
  };
}

const CounsellorCard = ({ counsellor }: CounsellorCardProps) => {
  const { name, image, rating, reviews, specialization, university, hours, students, price } = counsellor;
  return (
    <div className="counselor-card bg-white rounded-2xl p-6 shadow-[var(--card-shadow)] hover:shadow-lg transition-shadow duration-300">
      {/* Profile Section */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={image}
          alt={`${name} profile`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-card-foreground mb-1">{name}</h3>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={`filled-${i}`}
                className="w-4 h-4 fill-star-color text-star-color"
              />
            ))}
            {[...Array(5 - rating)].map((_, i) => (
              <Star
                key={`empty-${i}`}
                className="w-4 h-4 fill-transparent stroke-current stroke-2 text-star-color"
              />
            ))}
            <span className="text-card-foreground font-medium ml-1">({reviews})</span>
          </div>
        </div>
      </div>

      {/* Specialization */}
      <div className="text-center mb-3">
        <p className="text-card-foreground font-medium">Specializaion : {specialization} Counselling</p>
        <p className="text-text-muted text-sm">Working at : {university}</p>
      </div>

      {/* Stats */}
      <div className="text-center mb-6">
        <p className="text-text-muted text-sm">
          Exp of {hours} | Counseled  {students} | ₹{price}/hr
        </p>
      </div>

      {/* Book Now Button */}
      <Button className="w-full py-3 text-base font-semibold bg-button-primary hover:bg-button-primary-hover text-button-primary-foreground rounded-xl transition-colors duration-200">
        Book Now
      </Button>
    </div>
  );
};

export default CounsellorCard;
