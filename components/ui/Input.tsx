interface InputProps {
    className?: string;
    placeholder?: string;
    name: string;
    error?: string;
    type?: string;
    register: any;
    options?: any;
    fullWidth?: boolean;
    defaultValue?: string;
    rows?: number;
}

export function Input({
    className,
    placeholder,
    error,
    type,
    register,
    name,
    options,
    fullWidth,
    defaultValue,
}: InputProps) {
    return (
        <div className="flex flex-col w-full ">
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">
                {name}
            </label>
            <input
                id={name}
                defaultValue={defaultValue}
                type={type}
                {...register(name, {
                    ...options,
                })}
                placeholder={placeholder}
                className={`text-sm rounded-lg border border-gray-850 block w-full  p-2.5 bg-gray-800  placeholder-gray-400 text-white focus:ring-1 focus:ring-blue-600 ${className} ${
                    fullWidth ? "w-full" : ""
                }
                ${error ? "border-red-400 " : ""}
                `}
            />
            {error && <span className="w-full text-sm text-red-400">{error}</span>}
        </div>
    );
}

export function TextArea({
    className,
    placeholder,
    error,
    type,
    register,
    name,
    options,
    fullWidth,
    defaultValue,
    rows,
}: InputProps) {
    return (
        <div className="flex flex-col w-full ">
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">
                {name}
            </label>
            <textarea
                id={name}
                defaultValue={defaultValue}
                rows={rows}
                {...register(name, {
                    ...options,
                })}
                placeholder={placeholder}
                className={`text-sm rounded-lg border border-gray-850 block w-full  p-2.5 bg-gray-800  placeholder-gray-400 text-white focus:ring-1 focus:ring-blue-600 ${className} ${
                    fullWidth ? "w-full" : ""
                }
                ${error ? "border-red-400 " : ""}
                `}
            />
            {error && <span className="w-full text-sm text-red-400">{error}</span>}
        </div>
    );
}
