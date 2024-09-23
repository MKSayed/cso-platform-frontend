import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from 'react';

type props = {
  children: ReactNode
}
export function PageContent({children}: props) {
  return (
    <Card className="rounded-lg border-none mt-5 shadow-[0px_0px_2px_1px_rgba(0,0,0,0.15)]">
      <CardContent className="p-6">
        {/* Add - 48px or more if you need to add a footer*/}
        <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-22px)]">
          <div className="flex flex-col">
            {children}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
