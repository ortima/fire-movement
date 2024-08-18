import { useState } from "react";
import { CategoryT } from "@/app/types/calculator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addEntry } from "@/lib/redux/slices/calculator";
import { PlusCircleIcon } from "lucide-react";

interface AddEntryModalProps {
  category: CategoryT;
}

export const AddEntryModal = ({ category }: AddEntryModalProps) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [value, setValue] = useState<number | "">("");
  const [open, setOpen] = useState(false);

  const handleAddEntry = () => {
    if (name && value !== "") {
      dispatch(
        addEntry({
          category,
          entry: {
            name,
            value: Number(value),
            type: category,
          },
        }),
      );
      setName("");
      setValue("");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          <PlusCircleIcon className="mr-2" />
          Add Entry
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Category {category}</DialogTitle>
          <DialogDescription>
            Fill in the details for the new entry
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Entry name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="value" className="text-right">
              Value
            </Label>
            <Input
              id="value"
              value={value}
              onChange={(e) => setValue(parseFloat(e.target.value))}
              placeholder="Entry value"
              type="number"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAddEntry} type="submit">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
