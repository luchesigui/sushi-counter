import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface CounterProps {
  emoji: string;
  title: string;
  count: number;
  calories: number;
  description: string;
  showCalories: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function Counter({
  emoji,
  title,
  count,
  calories,
  description,
  showCalories,
  onIncrement,
  onDecrement,
}: CounterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const totalCalories = count * calories;

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{emoji}</span>
          <span className="text-lg font-medium">{title}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </Button>
      </div>
      {isExpanded && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            {description.split("Exemplos:")[0]}
          </p>
          <hr className="my-2 border-gray-200" />
          <p className="text-sm text-gray-600">
            <strong>Exemplos:</strong> {description.split("Exemplos:")[1]}
          </p>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={onDecrement}>
            -
          </Button>
          <span className="text-lg font-semibold w-8 text-center">{count}</span>
          <Button variant="outline" size="icon" onClick={onIncrement}>
            +
          </Button>
        </div>
        {showCalories && (
          <div className="text-sm text-gray-500">
            <p>{calories} kcal / item</p>
            {count > 0 && <p>Total: {totalCalories} kcal</p>}
          </div>
        )}
      </div>
    </div>
  );
}
