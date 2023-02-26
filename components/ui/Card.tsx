import { useInView } from "react-intersection-observer";

export default function Card({
    children,
    hasAnimation,
    className,
}: {
    children: React.ReactNode;
    hasAnimation?: boolean;
    className?: string;
}) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    if (!hasAnimation) {
        <div
            className={`h-full overflow-hidden bg-gray-900 border shadow-lg border-gray-850 rounded-xl ${className}`}
        >
            {children}
        </div>;
    }

    return (
        <div
            ref={ref}
            className={`transition duration-500 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            } }`}
        >
            <div
                className={`h-full overflow-hidden bg-gray-900 border shadow-lg border-gray-850 rounded-xl ${className}`}
            >
                {children}
            </div>
        </div>
    );
}
