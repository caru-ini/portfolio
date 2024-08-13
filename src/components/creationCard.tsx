type CreationCardProps = {
  title: string;
  links: { href: string; icon: React.ReactNode }[];
  children: React.ReactNode;
};

export const CreationCard: React.FC<CreationCardProps> = ({ title, children, links }) => (
  <div className='h-full space-y-4'>
    <h3 className='w-fit rounded-md bg-slate-300 px-2 font-mono text-xl font-semibold  dark:bg-slate-900'>
      {title}
    </h3>
    <p className='text-muted-foreground'>{children}</p>
    <div className='flex items-center space-x-4'>
      {links.map(({ href, icon }, i) => (
        <a key={i} href={href} target='_blank' rel='noopener noreferrer'>
          {icon}
        </a>
      ))}
    </div>
  </div>
);
