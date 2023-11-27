export const handleClassNames = (classes: (string | undefined | false)[]) => {
  return classes.filter(i => !!i).join(" ")
}