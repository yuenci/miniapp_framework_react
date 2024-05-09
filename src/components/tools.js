export function capitalizeAllFirstLetters(str) {
    str = str.replace(/-/g, " ").replace(/_/g, " ");
    console.log(str)
    return str.replace(/\b\w/g, char => char.toUpperCase());
}