import { type FC } from "react";
import { initData, useSignal } from "@telegram-apps/sdk-react";

import { Page } from "@/components/Page.tsx";

export const IndexPage: FC = () => {
  const initDataState = useSignal(initData.state);

  console.log("initDataState", initDataState);

  return (
    <Page back={false}>
      <div>
        <p>Hello</p>
      </div>
    </Page>
  );
};
