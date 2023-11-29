export interface TabsProps {
  options: string[]
  components: { [key in string]: JSX.Element }
}