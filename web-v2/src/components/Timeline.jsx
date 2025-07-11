import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    year: '2021',
    title: 'Started Learning Web Dev',
    description: 'HTML, CSS, JavaScript... the basics.',
  },
  {
    year: '2022',
    title: 'Built First Projects',
    description: 'Launched personal projects & learned React.',
  },
  {
    year: '2023',
    title: 'Freelance & Teamwork',
    description: 'Worked with clients and joined a startup team.',
  },
  {
    year: '2024',
    title: 'Going Big',
    description: 'Scaling projects, building SaaS products.',
  },
];

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-4xl py-24 px-4">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2" />

      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}
