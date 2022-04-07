export const required = (value: string) => {
    return !value ? 'Text is required' : undefined
}
export const maxLength = (count: number) => (value: string) => {
    return (value.length > count) ? `Max length should be ${count}` : undefined
}