import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

const buttonStyles = cva("rounded-lg text-center ", {
    variants: {
        color: {
            primary: " bg-blue-600 text-white hover:bg-blue-700 border border-blue-500",
            secondary:
                " bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 ",
            secondaryLigher:
                " bg-gray-700 text-white  hover:bg-gray-600 border  border-gray-600 ",
            none: "bg-transparent hover:bg-gray-800 ",
            danger: " bg-red-600 text-white hover:bg-red-700 border-red-500",
            noneNoHover: "bg-transparent",
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
        font: {
            medium: "font-medium",
            semiBold: "font-semibold",
            bold: "font-bold",
        },
    },
    defaultVariants: {
        color: "none",
        padding: "normal",
        fullWidth: false,
        font: "medium",
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
    font,
}: ButtonProps) {
    return (
        <>
            {to ? (
                <Link href={to}>
                    <button
                        className={`${buttonStyles({
                            color,
                            padding,
                            fullWidth,
                            font,
                        })} ${className}`}
                        type={type}
                        onMouseOver={onMouseOver}
                    >
                        {children}
                    </button>
                </Link>
            ) : (
                <button
                    className={`${buttonStyles({
                        color,
                        padding,
                        fullWidth,
                        font,
                    })} ${className}`}
                    onClick={onClick}
                    type={type}
                    onMouseOver={onMouseOver}
                >
                    {children}
                </button>
            )}
        </>
    );
}

export default Button;
