
export interface StacksProps {
    spacing: number
    direction?: "column" | "column-reverse" | "row" | "row-reverse",
    justify?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between"
    align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline"
    wrap?: "wrap" | "nowwrap" | "wrap-reverse"
}
