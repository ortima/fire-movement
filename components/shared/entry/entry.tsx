import { CalculatorT, EntryT } from "@/app/types/calculator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/lib/redux/hooks";
import { changeEntryValue } from "@/lib/redux/slices/calculator";

interface EntryProps {
  entry: EntryT;
}

export const Entry = ({ entry }: EntryProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={entry.id}>{entry.name}</Label>
      <Input
        type="number"
        id={entry.id}
        value={entry.value}
        onChange={(e) => {
          const newValue = parseFloat(e.target.value);
          if (!isNaN(newValue)) {
            dispatch(
              changeEntryValue({
                category: entry.type as keyof CalculatorT,
                id: entry.id,
                value: newValue,
              }),
            );
          }
        }}
      />
    </div>
  );
};
