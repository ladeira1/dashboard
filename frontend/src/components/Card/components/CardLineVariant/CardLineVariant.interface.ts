export interface CardLineVariantProps {
  series: {
    name: string;
    data: number[];
    color: string;
  }[];
  categories?: string[]
}