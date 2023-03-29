import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const twMerger = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default twMerger;
