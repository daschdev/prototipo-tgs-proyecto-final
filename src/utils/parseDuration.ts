import Duration from '@/interfaces/duration.interface';

type Fn = (duration: Duration) => string;

const parseDuration: Fn = ({ hours, minutes, seconds }) =>
  `${hours}h ${minutes}m ${seconds}s`;

export default parseDuration;
