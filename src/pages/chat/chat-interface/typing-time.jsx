export const TypingTime = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-muted rounded-lg px-4 py-2">
        <div className="flex space-x-1">
          <div
            className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
            style={{ animationDelay: "0ms" }}></div>
          <div
            className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
            style={{ animationDelay: "150ms" }}></div>
          <div
            className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
            style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
};
