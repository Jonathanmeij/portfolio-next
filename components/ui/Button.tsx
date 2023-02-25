import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva("rounded-lg font-medium text-center border-1", {
    variants: {
        color: {
            primary: " bg-blue-600 text-white border-0  hover:bg-blue-700",
            secondary: " bg-gray-800 text-white border-gray-700 hover:bg-gray-700 ",
            secondaryLigher: " bg-gray-700 text-white border-gray-700 hover:bg-gray-600 ",
            none: "bg-transparent hover:bg-gray-900 border-0",
            danger: " bg-red-600 text-white hover:bg-red-700 border-red-500",
        },
        padding: {
            none: "p-0",
            normal: "py-2 px-6",
            small: "p-2",
        },
        fullWidth: {
            true: "w-full",
            false: "w-auto",
        },
    },
    defaultVariants: {
        color: "none",
        padding: "normal",
        fullWidth: false,
    },
});

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
    className?: string;
    onClick?: () => void;
    onMouseOver?: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    to?: string;
    padding?: "none" | "small" | "normal";
}

function Button({
    color,
    onClick,
    type,
    children,
    to,
    padding,
    fullWidth,
    onMouseOver,
    className,
}: ButtonProps) {
    // return to ? (
    //         <button onClick={onClick} type={type} onMouseOver={onMouseOver}>
    //             {children}
    //         </button>
    // ) : (
    // );
    return (
        <button
            className={`${buttonStyles({ color, padding, fullWidth })} ${className}`}
            onClick={onClick}
            type={type}
            onMouseOver={onMouseOver}
        >
            {children}
        </button>
    );
}

export default Button;
