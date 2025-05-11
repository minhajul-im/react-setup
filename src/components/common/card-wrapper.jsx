import { Card, CardContent, CardHeader } from "../ui/card";

export const CardWrapper = ({ title = "", children }) => {
  return (
    <Card className="w-full">
      {title && (
        <CardHeader>
          <h4 className="font-semibold text-xl">{title}</h4>
        </CardHeader>
      )}
      <CardContent className="w-full">{children}</CardContent>
    </Card>
  );
};
