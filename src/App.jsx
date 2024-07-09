import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";



function App() {
  return (
    <>
      <div className="bg-gray-950 h-screen flex flex-col gap-2 items-center">
      <div className="w-10 h-10"></div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Type name of movie or series" />
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </>
  );
}

export default App;
