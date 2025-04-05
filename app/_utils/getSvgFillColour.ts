export const getSvgFillColour = (
  colour: "lime" | "salmon" | "purple" | "burgundy"
) => {
  switch (colour) {
    case "lime":
      return "oklch(0.9297 0.182 129.21)"
    case "salmon":
      return "oklch(0.7044 0.187 23.19)"
    case "purple":
      return "oklch(69.64% 0.202 305.54)"
    case "burgundy":
      return "oklch(32.44% 0.133 354.41)"
    default:
      return "oklch(0.9297 0.182 129.21)"
  }
}
