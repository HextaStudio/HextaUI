import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Avatar } from "@/components/hexta-ui/Avatar";
import { Button } from "@/components/hexta-ui/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const DefaultNotification = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-3 m-2 relative p-4 bg-zinc-950 rounded-md border-b border-b-white border-opacity-10 max-w-[24rem]">
          <div className="flex items-center gap-3">
            <div className="max-[414px]:hidden">
              <Avatar avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D" />
            </div>
            <div className="flex flex-col">
              <p className="font-medium">You got message!</p>
              <small className="opacity-80 leading-4">
                Hextastudio/ui is worth the money!
              </small>
            </div>
            <div>
              <Button variant="ghost" className="p-2 opacity-80">
                <FaExternalLinkAlt />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationWithIconAndLink = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-3 m-2 relative p-4 px-6 bg-zinc-950 rounded-md border-b border-b-white border-opacity-10 max-w-[24rem]">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="font-medium flex items-center gap-1">
                  New Update available!
                </p>
                <small className="opacity-80 leading-4">
                  Please upgrade software for best experience.
                </small>
              </div>
              <div className="flex gap-2">
                <Button
                  className="p-0 py-1 font-medium text-sm underline"
                  variant="link"
                >
                  Skip
                </Button>
                <Button
                  className="p-0 px-2 py-1 rounded-sm font-medium text-sm"
                  variant="secondary"
                >
                  Update
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              className="absolute top-1 right-1 p-2 opacity-80"
            >
              <RxCross2 />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const notificationpage = () => {
  return (
    <>
      <DocsSEO
        title="Notification - hextastudio/ui"
        description="Notifications are used to inform users about a new event or message."
        image="https://i.imgur.com/qyi4Ne1.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Notification"
            description="Notifications are used to inform users about a new event or message."
          />
          <DocsPreview
            className="justify-start items-end"
            title="Default Notification"
          >
            <DefaultNotification />
          </DocsPreview>
          <InstallationSteps
            imports={["Avatar", "Button"]}
            component={["Avatar", "Button"]}
          />
          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`import { FaExternalLinkAlt } from "react-icons/fa";

const DefaultNotification = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-3 m-2 relative p-4 bg-zinc-950 rounded-md border-b border-b-white border-opacity-10 max-w-[24rem]">
          <div className="flex items-center gap-3">
            <div className="max-[414px]:hidden">
              <Avatar avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D" />
            </div>
            <div className="flex flex-col">
              <p className="font-medium">You got message!</p>
              <small className="opacity-80 leading-4">
                Hextastudio/ui is worth the money!
              </small>
            </div>
            <div>
              <Button variant="ghost" className="p-2 opacity-80">
                <FaExternalLinkAlt />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};`}
          />
          <DocsPreview
            className="justify-start items-end"
            title="Notification with Buttons"
          >
            <NotificationWithIconAndLink />
          </DocsPreview>
          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`import { RxCross2 } from "react-icons/rx";

const NotificationWithIconAndLink = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-3 m-2 relative p-4 px-6 bg-zinc-950 rounded-md border-b border-b-white border-opacity-10 max-w-[24rem]">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="font-medium flex items-center gap-1">
                  New Update available!
                </p>
                <small className="opacity-80 leading-4">
                  Please upgrade software for best experience.
                </small>
              </div>
              <div className="flex gap-2">
                <Button
                  className="p-0 py-1 font-medium text-sm underline"
                  variant="link"
                >
                  Skip
                </Button>
                <Button
                  className="p-0 px-2 py-1 rounded-sm font-medium text-sm"
                  variant="secondary"
                >
                  Update
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              className="absolute top-1 right-1 p-2 opacity-80"
            >
              <RxCross2 />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};`}
          />
        </main>
      </DocsLayout>
    </>
  );
};

export default notificationpage;
