import { Button } from "@/components/ui/button";
import { LuUndo2 } from "react-icons/lu";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary via-primarymild to-orange-200/80">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl mt-4">Some things went wrong!</p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <Link to="/">
            <Button className="btn btn-primary btn-lg">
              <span>Back to Home</span> <LuUndo2 />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
