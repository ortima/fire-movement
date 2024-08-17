"use client";

import { CalculatorT, Categories } from "@/app/types/calculator";
import { CategoryCard } from "@/components/shared/card/category-card";
import { useAppSelector } from "@/lib/redux/hooks";

const Home = () => {
  const calculator = useAppSelector((state) => state.calculator);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {(Object.keys(Categories) as Array<keyof CalculatorT>).map((category) => (
        <CategoryCard
          key={category}
          category={category}
          entries={calculator[category]}
        />
      ))}
    </div>
  );
};

export default Home;
