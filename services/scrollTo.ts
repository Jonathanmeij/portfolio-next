export const handleScroll = (element: any, block: string) => {
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: block });
    }
};
