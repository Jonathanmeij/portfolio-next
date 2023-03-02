import { cva, VariantProps } from "class-variance-authority";

const tagStyles = cva(" bg-gray-700 rounded-full px-3 py-1 text-white text-sm w-max");

export interface TagProps extends VariantProps<typeof tagStyles> {
    children: React.ReactNode;
    className?: string;
}

export default function Tag({ children, className }: TagProps) {
    return (
        <div className={tagStyles()}>
            <p className="text-sm">{children}</p>
        </div>
    );
}
