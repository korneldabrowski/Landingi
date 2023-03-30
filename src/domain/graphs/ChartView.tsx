import { Controller } from './controller';

export function PriceChart() {
  return (
    <div className=" max-w-screen-2xl w-screen relative flex mx-auto flex-col justify-center">
      <Controller />
      <p className="text-center mb-6 text-xl">choose cart to view the data.</p>
    </div>
  );
}
