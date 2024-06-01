import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

import { FaBell, FaUser } from "react-icons/fa";

import { Toggle } from "@/components/hexta-ui/Toggle";
import { useState } from "react";

import { Avatar } from "@/components/hexta-ui/Avatar";
import { Menu, MenuItem } from "@/components/hexta-ui/Menu";
import { Button } from "@/components/hexta-ui/Button";
import { BsThreeDotsVertical } from "react-icons/bs";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const NotificationSettings = () => {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [directMessages, setDirectMessages] = useState(false);
  const [weeklyPerformanceStats, setWeeklyPerformanceStats] = useState(false);

  return (
    <>
      <div className="max-w-[40rem] w-[95%] flex flex-col gap-6 p-4 bg-zinc-950 rounded-xl border-b border-b-white border-opacity-10">
        <div className="header">
          <h2 className="flex items-center gap-2 font-semibold p-4 border-b border-b-white border-opacity-10">
            <FaBell /> Notifications
          </h2>
        </div>
        <div className="content px-2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="opacity-50 font-light text-sm">
              Push Notifications
            </h2>
            <div className="flex items-start gap-4 justify-between">
              <div>
                <p className="opacity-90">Push notifications</p>
                <small className="opacity-60">
                  Get push notifications to get notified about latest events.
                  You can turn them off anytime.
                </small>
              </div>
              <Toggle
                className="scale-[.65]"
                enabled={pushNotifications}
                onChange={setPushNotifications}
              />
            </div>
          </div>
          <hr className="opacity-10" />
          <div className="flex flex-col gap-2">
            <h2 className="opacity-50 font-light text-sm">
              Email Notifications
            </h2>
            <div className="flex items-start gap-4 justify-between">
              <div>
                <p className="opacity-90">New notifications</p>
              </div>
              <Toggle
                className="scale-[.65]"
                enabled={emailNotifications}
                onChange={setEmailNotifications}
              />
            </div>
            <div className="flex items-start gap-4 justify-between">
              <div>
                <p className="opacity-90">Direct Messages</p>
              </div>
              <Toggle
                className="scale-[.65]"
                enabled={directMessages}
                onChange={setDirectMessages}
              />
            </div>
            <div className="flex items-start gap-4 justify-between">
              <div>
                <p className="opacity-90">Weekly performance stats</p>
              </div>
              <Toggle
                className="scale-[.65]"
                enabled={weeklyPerformanceStats}
                onChange={setWeeklyPerformanceStats}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MembersSection = () => {
  const [menuOpen0, setMenuOpen0] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);

  return (
    <>
      <div className="max-w-[40rem] w-[95%] flex flex-col gap-6 p-4 bg-zinc-950 rounded-xl border-b border-b-white border-opacity-10">
        <div className="header  p-4  border-b border-b-white border-opacity-10">
          <h2 className="flex items-center gap-2 font-semibold">
            <FaUser /> Members
          </h2>
          <small className="opacity-50">
            Invite your team members to collaborate.
          </small>
        </div>
        <div className="content p-4 flex flex-col gap-7">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-4">
              <div>
                <Avatar
                  size={32}
                  avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <p className="font-medium  text-nowrap">John Deep</p>
                <small className="opacity-50">deep@jonny.com</small>
              </div>
            </div>
            <div>
              <Button
                variant="ghost"
                className="m-0"
                onClick={() => setMenuOpen0(true)}
              >
                <BsThreeDotsVertical />
              </Button>
              <Menu
                isOpen={menuOpen0}
                onOpen={() => setMenuOpen0(true)}
                onClose={() => setMenuOpen0(false)}
                className="w-fit px-2 "
              >
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="ghost"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Manage
                  </Button>
                </MenuItem>
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="fail"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Remove
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-4">
              <div>
                <Avatar
                  size={32}
                  avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <p className="font-medium  text-nowrap">Doba John</p>
                <small className="opacity-50">doba@yahoo.com</small>
              </div>
            </div>
            <div>
              <Button
                variant="ghost"
                className="m-0"
                onClick={() => setMenuOpen1(true)}
              >
                <BsThreeDotsVertical />
              </Button>
              <Menu
                isOpen={menuOpen1}
                onOpen={() => setMenuOpen1(true)}
                onClose={() => setMenuOpen1(false)}
                className="w-fit px-2 "
              >
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="ghost"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Manage
                  </Button>
                </MenuItem>
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="fail"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Remove
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-4">
              <div>
                <Avatar
                  size={32}
                  avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <p className="font-medium  text-nowrap">Jethalal Gada</p>
                <small className="opacity-50">jethalal6996@gmail.com</small>
              </div>
            </div>
            <div>
              <Button
                variant="ghost"
                className="m-0"
                onClick={() => setMenuOpen2(true)}
              >
                <BsThreeDotsVertical />
              </Button>
              <Menu
                isOpen={menuOpen2}
                onOpen={() => setMenuOpen2(true)}
                onClose={() => setMenuOpen2(false)}
                className="w-fit px-2 "
              >
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="ghost"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Manage
                  </Button>
                </MenuItem>
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="fail"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Remove
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-4">
              <div>
                <Avatar
                  size={32}
                  avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <p className="font-medium  text-nowrap">Ramesuresh Debo</p>
                <small className="opacity-50">suresh@ramesdebo.com</small>
              </div>
            </div>
            <div>
              <Button
                variant="ghost"
                className="m-0"
                onClick={() => setMenuOpen3(true)}
              >
                <BsThreeDotsVertical />
              </Button>
              <Menu
                isOpen={menuOpen3}
                onOpen={() => setMenuOpen3(true)}
                onClose={() => setMenuOpen3(false)}
                className="w-fit px-2 "
              >
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="ghost"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Manage
                  </Button>
                </MenuItem>
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="fail"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Remove
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const settingssection = () => {
  return (
    <>
      <DocsSEO
        title="Settings Section - hextastudio/ui"
        description="A settings section with notification settings and members section."
        image="https://i.imgur.com/oZVxwtP.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Settings Section"
            description="A settings section with notification settings and members section."
          />
          <DocsPreview className="h-[40rem]">
            <NotificationSettings />
          </DocsPreview>
          <InstallationSteps imports={"Toggle"} component={"Toggle"} />
          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`import { useState } from "react";
import { FaBell } from "react-icons/fa";

const NotificationSettings = () => {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [directMessages, setDirectMessages] = useState(false);
  const [weeklyPerformanceStats, setWeeklyPerformanceStats] = useState(false);

  return (
    <>
      <div className="max-w-[40rem] w-[95%] flex flex-col gap-6 p-4 bg-zinc-950 rounded-xl border-b border-b-white border-opacity-10">
        <div className="header">
          <h2 className="flex items-center gap-2 font-semibold p-4 border-b border-b-white border-opacity-10">
            <FaBell /> Notifications
          </h2>
        </div>
        <div className="content px-2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="opacity-50 font-light text-sm">
              Push Notifications
            </h2>
            <div className="flex items-start gap-4 justify-between">
              <div>
                <p className="opacity-90">Push notifications</p>
                <small className="opacity-60">
                  Get push notifications to get notified about latest events.
                  You can turn them off anytime.
                </small>
              </div>
              <Toggle
                className="scale-[.65]"
                enabled={pushNotifications}
                onChange={setPushNotifications}
              />
            </div>
          </div>
          <hr className="opacity-10" />
          <div className="flex flex-col gap-2">
            <h2 className="opacity-50 font-light text-sm">
              Email Notifications
            </h2>
            <div className="flex items-start gap-4 justify-between">
              <div>
                <p className="opacity-90">New notifications</p>
              </div>
              <Toggle
                className="scale-[.65]"
                enabled={emailNotifications}
                onChange={setEmailNotifications}
              />
            </div>
            <div className="flex items-start gap-4 justify-between">
              <div>
                <p className="opacity-90">Direct Messages</p>
              </div>
              <Toggle
                className="scale-[.65]"
                enabled={directMessages}
                onChange={setDirectMessages}
              />
            </div>
            <div className="flex items-start gap-4 justify-between">
              <div>
                <p className="opacity-90">Weekly performance stats</p>
              </div>
              <Toggle
                className="scale-[.65]"
                enabled={weeklyPerformanceStats}
                onChange={setWeeklyPerformanceStats}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};`}
          />
          <DocsPreview className="h-[40rem]">
            <MembersSection />
          </DocsPreview>
          <InstallationSteps
            imports={["Avatar", "Button", "Menu, MenuItem"]}
            component={["Avatar", "Button", "Menu"]}
          />
          <CodeBlock
            free
            filename="tsx"
            lang="tsx"
            code={`import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";


const MembersSection = () => {
  const [menuOpen0, setMenuOpen0] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);

  return (
    <>
      <div className="max-w-[40rem] w-[95%] flex flex-col gap-6 p-4 bg-zinc-950 rounded-xl border-b border-b-white border-opacity-10">
        <div className="header  p-4  border-b border-b-white border-opacity-10">
          <h2 className="flex items-center gap-2 font-semibold">
            <FaUser /> Members
          </h2>
          <small className="opacity-50">
            Invite your team members to collaborate.
          </small>
        </div>
        <div className="content p-4 flex flex-col gap-7">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-4">
              <div>
                <Avatar
                  size={32}
                  avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <p className="font-medium  text-nowrap">John Deep</p>
                <small className="opacity-50">deep@jonny.com</small>
              </div>
            </div>
            <div>
              <Button
                variant="ghost"
                className="m-0"
                onClick={() => setMenuOpen0(true)}
              >
                <BsThreeDotsVertical />
              </Button>
              <Menu
                isOpen={menuOpen0}
                onOpen={() => setMenuOpen0(true)}
                onClose={() => setMenuOpen0(false)}
                className="w-fit px-2 "
              >
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="ghost"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Manage
                  </Button>
                </MenuItem>
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="fail"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Remove
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-4">
              <div>
                <Avatar
                  size={32}
                  avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <p className="font-medium  text-nowrap">Doba John</p>
                <small className="opacity-50">doba@yahoo.com</small>
              </div>
            </div>
            <div>
              <Button
                variant="ghost"
                className="m-0"
                onClick={() => setMenuOpen1(true)}
              >
                <BsThreeDotsVertical />
              </Button>
              <Menu
                isOpen={menuOpen1}
                onOpen={() => setMenuOpen1(true)}
                onClose={() => setMenuOpen1(false)}
                className="w-fit px-2 "
              >
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="ghost"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Manage
                  </Button>
                </MenuItem>
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="fail"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Remove
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-4">
              <div>
                <Avatar
                  size={32}
                  avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <p className="font-medium  text-nowrap">Jethalal Gada</p>
                <small className="opacity-50">jethalal6996@gmail.com</small>
              </div>
            </div>
            <div>
              <Button
                variant="ghost"
                className="m-0"
                onClick={() => setMenuOpen2(true)}
              >
                <BsThreeDotsVertical />
              </Button>
              <Menu
                isOpen={menuOpen2}
                onOpen={() => setMenuOpen2(true)}
                onClose={() => setMenuOpen2(false)}
                className="w-fit px-2 "
              >
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="ghost"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Manage
                  </Button>
                </MenuItem>
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="fail"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Remove
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-4">
              <div>
                <Avatar
                  size={32}
                  avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <p className="font-medium  text-nowrap">Ramesuresh Debo</p>
                <small className="opacity-50">suresh@ramesdebo.com</small>
              </div>
            </div>
            <div>
              <Button
                variant="ghost"
                className="m-0"
                onClick={() => setMenuOpen3(true)}
              >
                <BsThreeDotsVertical />
              </Button>
              <Menu
                isOpen={menuOpen3}
                onOpen={() => setMenuOpen3(true)}
                onClose={() => setMenuOpen3(false)}
                className="w-fit px-2 "
              >
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="ghost"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Manage
                  </Button>
                </MenuItem>
                <MenuItem className="p-0 rounded-md  m-0">
                  <Button
                    variant="fail"
                    className="m-0 w-full rounded-md text-sm"
                  >
                    Remove
                  </Button>
                </MenuItem>
              </Menu>
            </div>
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

export default settingssection;
