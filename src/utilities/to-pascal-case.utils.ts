export const toPascalCase = (text: string) => {
    let firstChar = text.charAt(0).toUpperCase();
    let finalText = text.substring(1, text.length).toLowerCase();
    return firstChar.concat(finalText);
}