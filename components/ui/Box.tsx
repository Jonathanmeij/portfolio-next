interface BoxProps {
    className?: string;
    children: React.ReactNode;
}

export default function Box({ children, className }: BoxProps) {
    return <div className={className + " h-full p-4"}>{children}</div>;
}
