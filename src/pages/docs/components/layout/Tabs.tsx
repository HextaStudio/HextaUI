import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";

import React from "react";

import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";

import { Button } from "@/components/hexta-ui/Button";
import { Input } from "@/components/hexta-ui/Input";
import { Table } from "@/components/hexta-ui/Table";
import {
  TabProvider,
  Tab,
  TabHeader,
  TabContent,
} from "@/components/hexta-ui/Tabs";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

import { useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const columns = [
  {
    label: "Prop Name",
    key: "propName",
  },
  {
    label: "Prop Type",
    key: "propType",
  },
  {
    label: "Default Value",
    key: "defaultValue",
  },
  {
    label: "Description",
    key: "description",
  },
];

const data = [
  {
    propName: "defaultActiveTab",
    propType: "string",
    defaultValue: "null",
    description: "Default active tab id.",
  },
  {
    propName: "id",
    propType: "string",
    defaultValue: "null",
    description: "Tab id.",
  },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [warning, setWarning] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email || !password) {
      setWarning(true);
    } else {
      console.log(email);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl">Login</h2>
          <p className="text-[14px] opacity-70">
            Enter your email and password to login to your account.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-[5px]">
            <span className="text-[15px] opacity-80">Email*</span>
            <Input
              type="email"
              className={`m-0 py-3 ${
                warning &&
                "border border-opacity-70 border-red-500 focus:border-white focus:border-opacity-100"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
            />
          </label>
          <label className="flex flex-col gap-[5px] relative">
            <span className="text-[15px] opacity-80">Password*</span>
            <div className="relative">
              <Input
                type={`${isPasswordVisible ? "text" : "password"}`}
                className={`m-0 py-3 ${
                  warning &&
                  "border border-opacity-70 border-red-500 focus:border-white focus:border-opacity-100"
                } `}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="A strong password"
              />
            </div>
            <button
              className="absolute top-[58%] right-3"
              onClick={togglePasswordVisibility}
            >
              {!isPasswordVisible ? <IoEye /> : <IoEyeOff />}
            </button>
          </label>
        </div>
        <div>
          <Button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="grow text-center w-full flex items-center justify-center"
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [warning, setWarning] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email || !password) {
      setWarning(true);
    } else {
      console.log({
        email,
        password,
        username,
      });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl">Sign Up</h2>
          <p className="text-[14px] opacity-70">Create a new account.</p>
        </div>
        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-[5px]">
            <span className="text-[15px] opacity-80">Username*</span>
            <Input
              type="text"
              className={`m-0 py-3 ${
                warning &&
                "border border-opacity-70 border-red-500 focus:border-white focus:border-opacity-100"
              }`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="John Weak"
            />
          </label>
          <label className="flex flex-col gap-[5px]">
            <span className="text-[15px] opacity-80">Email*</span>
            <Input
              type="email"
              className={`m-0 py-3 ${
                warning &&
                "border border-opacity-70 border-red-500 focus:border-white focus:border-opacity-100"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
            />
          </label>
          <label className="flex flex-col gap-[5px] relative">
            <span className="text-[15px] opacity-80">Password*</span>
            <div className="relative">
              <Input
                type={`${isPasswordVisible ? "text" : "password"}`}
                className={`m-0 py-3 ${
                  warning &&
                  "border border-opacity-70 border-red-500 focus:border-white focus:border-opacity-100"
                } `}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="A strong password"
              />
            </div>
            <button
              className="absolute top-[58%] right-3"
              onClick={togglePasswordVisibility}
            >
              {!isPasswordVisible ? <IoEye /> : <IoEyeOff />}
            </button>
          </label>
        </div>
        <div>
          <Button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="grow text-center w-full flex items-center justify-center"
          >
            Create Account
          </Button>
        </div>
      </div>
    </>
  );
};

const tabs = () => {
  return (
    <>
      <DocsSEO
        title="Tabs - HextaUI ✨"
        description="Tabs allows users to navigate between different sections of a component"
        image="https://i.imgur.com/GCHQpRl.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Tabs"
            description="Tabs allows users to navigate between different sections of a component"
          />
          <DocsPreview className="p-4">
            <div className="max-w-[20rem] min-w-[20rem]">
              <TabProvider defaultActiveTab="1">
                <div className="flex flex-col space-y-4">
                  <div className="flex gap-1 bg-zinc-950  rounded-md p-1">
                    <TabHeader id="1">Login</TabHeader>
                    <TabHeader id="2">SignUp</TabHeader>
                  </div>
                  <Tab>
                    <TabContent id="1">
                      <Login />
                    </TabContent>
                    <TabContent id="2">
                      <SignUp />
                    </TabContent>
                  </Tab>
                </div>
              </TabProvider>
            </div>
          </DocsPreview>

          <InstallationSteps
            component="Tabs"
            imports={["Tab, TabProvider, TabHeader, TabContent"]}
          />
          <CodeBlock
            title="Usage"
            lang="tsx"
            filename="Home.tsx"
            code={`<TabProvider defaultActiveTab="1">
  <div className="flex flex-col space-y-4">
    <div className="flex gap-1 bg-zinc-950  rounded-md p-1">
      <TabHeader id="1">Tab 1</TabHeader>
      <TabHeader id="2">Tab 2</TabHeader>
    </div>
    <Tab>
      <TabContent id="1">
        <p>This is the content for Tab 1.</p>
      </TabContent>
      <TabContent id="2">
        <p>This is the content for Tab 2.</p>
      </TabContent>
    </Tab>
  </div>
</TabProvider>`}
          />
          <Table data={data} columns={columns} tableTitle="Props Information" />
        </main>
      </DocsLayout>
    </>
  );
};

export default tabs;
