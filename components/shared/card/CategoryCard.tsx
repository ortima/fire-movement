import { CategoryT, EntryT } from "@/app/types/calculator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddEntryModal } from "../addEntryModal/addEntryModal";
import { Entry } from "../entry/Entry";

interface CategoryCardProps {
  category: CategoryT;
  entries: EntryT[] | EntryT;
}

export const CategoryCard = ({ category, entries }: CategoryCardProps) => {
  const entriesArray = Array.isArray(entries) ? entries : [entries];

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{category}</CardTitle>
        <CardDescription>
          {category === "remaining"
            ? "This is the remaining amount after all expenses."
            : `List of entries in the ${category} category:`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {entriesArray.length > 0 ? (
          entriesArray.map((entry) => <Entry key={entry.id} entry={entry} />)
        ) : (
          <p>No entries available.</p>
        )}
      </CardContent>
      <CardFooter>
        <AddEntryModal category={category} />
      </CardFooter>
    </Card>
  );
};
