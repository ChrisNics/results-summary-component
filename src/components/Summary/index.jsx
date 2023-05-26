import Card from './Card';

const data = [
  {
    label: 'Reaction',
    score: 80,
    icon: '/icon-reaction.svg',
    gradient: 'red',
    color: 'text-primary-light-red',
    alt: 'reaction-icon'
  },
  {
    label: 'Memory',
    score: 92,
    icon: '/icon-memory.svg',
    gradient: 'yellow',
    color: 'text-primary-orange-yellow',
    alt: 'memory-icon'
  },
  {
    label: 'Verbal',
    score: 61,
    icon: '/icon-verbal.svg',
    gradient: 'green',
    color: 'text-primary-green-teal',
    alt: 'verbal-icon'
  },
  {
    label: 'Visual',
    score: 72,
    icon: '/icon-visual.svg',
    gradient: 'blue',
    color: 'text-primary-cobalt-blue',
    alt: 'visual-icon'
  }
];

const index = () => {
  return (
    <div className="flex flex-col gap-y-4 px-10 py-5 xl:w-1/2">
      <h3 className="text-neutral-dark-gray-blue">Summary</h3>
      <div className="flex flex-col gap-y-3">
        {data.map((d) => (
          <Card
            score={d.score}
            color={d.color}
            icon={d.icon}
            label={d.label}
            gradient={d.gradient}
          />
        ))}
      </div>
      <button className="bg-neutral-dark-gray-blue hover:bg-primary-cobalt-blue w-full rounded-3xl px-2 py-3 text-white transition-all duration-100">
        Continue
      </button>
    </div>
  );
};

export default index;
