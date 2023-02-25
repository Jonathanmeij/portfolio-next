interface DividerProps {
    className?: string;
}

export default function Divider({ className }: DividerProps) {
    return <div className={`h-[1px] w-full bg-gray-800 ${className}`}></div>;
}
