import { TabsTrigger } from '@/components/ui/tabs.tsx';
import { cn } from '@/lib/utils.ts';
import { ReactNode } from 'react';


export function StyledTabTrigger({ children, value, className }: { children: ReactNode; value: string; className?: string }) {
  return (
    <TabsTrigger
      className={cn(
        'h-[32px] min-w-28 text-sm font-medium data-[state=active]:bg-[#0B0367] data-[state=active]:text-white',
        className,
      )}
      value={value}
    >
      {children}
    </TabsTrigger>
  )
}