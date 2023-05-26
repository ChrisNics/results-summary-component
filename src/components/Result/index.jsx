import Circle from './Circle';
import Description from './Description';

const Result = () => {
  return (
    <div className="gradient-bg flex w-full flex-col items-center justify-center gap-y-5 rounded-b-3xl p-10 text-center xl:w-1/2">
      <h3 className="text-neutral-pale-blue">Your Result</h3>
      <Circle />
      <Description />
    </div>
  );
};

export default Result;
