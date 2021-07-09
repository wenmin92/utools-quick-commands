export function joinComment(comment) {
    let result = comment
        .replace(/\n?\s*\*\/\s*|^\s*\*\s*|\n\s*\*\s*/g, ' ')
        .replace(/^\s*\/\/\s*|\n\s*\/\/\s*/g, ' ');
    return result.trim();
}