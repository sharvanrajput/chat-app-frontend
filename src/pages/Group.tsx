import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Group() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <ArrowLeft /> Back
      </Button>

      group page 
    </div>
  );
}
