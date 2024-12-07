import { type FC } from "react";
import { initData, useSignal } from "@telegram-apps/sdk-react";

import { Page } from "@/components/Page.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";

export const IndexPage: FC = () => {
  const { user } = useSignal(initData.state);
  return (
    <Page back={false}>
      <div className="w-full leading-3 h-screen flex items-center justify-center flex-col gap-3 p-4">
        <p className="font-medium">
          Привет {user.lastName} {user.firstName}!
        </p>
        <Badge>{user.username}</Badge>
        <p className="text-sm">Ваш ID: {user.id}</p>
        <Button>Shadcn UI Button</Button>
      </div>
    </Page>
  );
};
