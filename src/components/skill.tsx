import React from 'react';
import Image from 'next/image';

export interface SkillProps {
  icon: string; // URL or path to the skill icon
  title: string; // Skill title
  description: string; // Skill description
}

const Skill: React.FC<SkillProps> = ({ icon, title, description }) => {
  return (
    <div className='flex h-[100px] w-[400px] items-center gap-y-2 rounded-md border border-border p-4 transition-all hover:shadow-lg dark:shadow-slate-800'>
      <Image src={icon} alt={title} width={64} height={64} />
      <div className='flex flex-col p-4'>
        <h2 className='text-xl'>{title}</h2>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
};

export default Skill;
