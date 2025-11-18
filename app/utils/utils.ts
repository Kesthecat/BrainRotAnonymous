export const formatList = (items: string[] | undefined) => {
    if (!items || items.length === 0) {
        return "Not specified";
    }
    return items.join(", ");
};

