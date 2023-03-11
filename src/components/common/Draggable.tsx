import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const DraggableComponent: React.FC<Props> = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const dx = event.clientX - dragRef.current!.offsetLeft;
      setPosition({ x: dx, y: position.y });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, position.y]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={dragRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
    >
      oi
      {children}
    </div>
  );
};

export default DraggableComponent;
