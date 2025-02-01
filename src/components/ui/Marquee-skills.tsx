import Image from 'next/image';
import { InfiniteSlider } from "./infinite-slider-skills";

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider durationOnHover={75} gap={24}>
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        alt='Python'
        width={60}
        height={60}
      />
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        alt='JavaScript'
        width={60}
        height={60}
      />
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        alt='TypeScript'
        width={60}
        height={60}
      />
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        alt='React'
        width={60}
        height={60}
      />
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        alt='Next.js'
        width={60}
        height={60}
      />
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        alt='Node.js'
        width={60}
        height={60}
      />
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        alt='Docker'
        width={60}
        height={60}
      />
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
        alt='Kubernetes'
        width={60}
        height={60}
      />
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        alt='PostgreSQL'
        width={60}
        height={60}
      />
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        alt='MongoDB'
        width={60}
        height={60}
      />
    </InfiniteSlider>
  );
}
