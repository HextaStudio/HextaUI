import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

import { Avatar } from "@/components/hexta-ui/Avatar";
import { Menu, MenuItem } from "@/components/hexta-ui/Menu";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

import Image from "next/legacy/image";
import { useState } from "react";
import { InstallationSteps } from "@/components/DocsPage/InstallationSteps";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import Link from "next/link";

export const PostCard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    // your post like logic
    setLiked(!liked);
  };

  const handleBookmark = () => {
    // your post bookmark logic
    setBookmarked(!bookmarked);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="p-4 rounded-2xl border border-white border-opacity-10 bg-zinc-950 w-full flex flex-col gap-6 max-w-[30rem] m-4">
        <div className="flex items-center gap-4 card-header  justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Avatar
                avatarUrl="/hexta-studio.svg"
                size={40}
                className="w-[40px]"
              />
            </div>
            <div>
              <h3>
                HextaStudio
                <div className="flex gap-2 items-center justify-center opacity-70">
                  <small>@HextaStudio</small>
                  <span>·</span>
                  <small>7h</small>
                </div>
              </h3>
            </div>
          </div>
          <div className="relative">
            <button
              className="p-[1px] hover:bg-white hover:bg-opacity-10 flex items-center justify-center transition-all rounded-full"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
                />
              </svg>
            </button>
            <Menu onOpen={toggleMenu} onClose={toggleMenu} isOpen={menuOpen}>
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaRegPaperPlane /> Share Post
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="whitespace-pre-wrap">
            HextaUI - Gorgeous web components without any efforts! ✨<br />
            <br />
            🚀 HextaStudio launched their new product HextaUI which is a
            collection of beautiful web components. <br />
            <br />
            🥳 Check it out now!
          </p>
          <Image
            width={1920}
            height={1080}
            src="https://i.imgur.com/zU3m0eC.png"
            alt="HextaUI"
            className="w-full auto max-w-full object-cover rounded-lg mt-4"
          />
        </div>
        <div className="flex justify-evenly">
          <button
            onClick={handleLike}
            className="flex items-center px-4 grow justify-center py-2 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-5 gap-3"
          >
            {liked ? <FaHeart color="red" /> : <FaRegHeart />}
            <span className="max-[488px]:hidden opacity-90 hover:opacity-100 transition-all text-[14px]">
              {liked ? "Liked" : "Like"}
            </span>
          </button>
          <button
            onClick={handleBookmark}
            className="flex items-center px-4 grow justify-center py-2 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-5 gap-3"
          >
            {bookmarked ? <FaBookmark color="#00bfff" /> : <FaRegBookmark />}
            <span className="max-[488px]:hidden opacity-90 hover:opacity-100 transition-all text-[14px]">
              {bookmarked ? "Saved" : "Save"}
            </span>
          </button>
          <button className="flex items-center px-4 grow justify-center py-2 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-5 gap-3">
            <FaRegPaperPlane />{" "}
            <span className="max-[488px]:hidden opacity-90 hover:opacity-100 transition-all text-[14px]">
              Share
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

const postcard = () => {
  return (
    <>
      <DocsSEO
        title="Post Card - hextastudio/ui"
        description="An Example card component of social media post."
        image="https://i.imgur.com/EWt5cSf.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Post Card"
            description="An Example card
            component of social media post."
          />
          <DocsPreview>
            <PostCard />
          </DocsPreview>
          <InstallationSteps
            title="Complete Code"
            component={["Avatar", "Menu"]}
            imports={["Avatar", "Menu, MenuItem"]}
          />
          <CodeBlock
            filename="PostCard.tsx"
            lang="tsx"
            code={`import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
            
import Image from "next/legacy/image";
import { useState } from "react";
import Link from "next/link";

export const PostCard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    // your post like logic
    setLiked(!liked);
  };

  const handleBookmark = () => {
    // your post bookmark logic
    setBookmarked(!bookmarked);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="p-4 rounded-2xl border border-white border-opacity-10 bg-zinc-950 w-full flex flex-col gap-6 max-w-[30rem] m-4">
        <div className="flex items-center gap-4 card-header  justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Avatar
                avatarUrl="/hexta-studio.svg"
                size={40}
                className="w-[40px]"
              />
            </div>
            <div>
              <h3>
                HextaStudio
                <div className="flex gap-2 items-center justify-center opacity-70">
                  <small>@HextaStudio</small>
                  <span>·</span>
                  <small>7h</small>
                </div>
              </h3>
            </div>
          </div>
          <div className="relative">
            <button
              className="p-[1px] hover:bg-white hover:bg-opacity-10 flex items-center justify-center transition-all rounded-full"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
                />
              </svg>
            </button>
            <Menu onOpen={toggleMenu} onClose={toggleMenu} isOpen={menuOpen}>
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaRegPaperPlane /> Share Post
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="whitespace-pre-wrap">
            HextaUI - Gorgeous web components without any efforts! ✨<br />
            <br />
            🚀 HextaStudio launched their new product HextaUI which is a
            collection of beautiful web components. <br />
            <br />
            🥳 Check it out now!
          </p>
          <Image
            width={1920}
            height={1080}
            src="https://i.imgur.com/zU3m0eC.png"
            alt="HextaUI"
            className="w-full auto max-w-full object-cover rounded-lg mt-4"
          />
        </div>
        <div className="flex justify-evenly">
          <button
            onClick={handleLike}
            className="flex items-center px-4 grow justify-center py-2 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-5 gap-3"
          >
            {liked ? <FaHeart color="red" /> : <FaRegHeart />}
            <span className="max-[488px]:hidden opacity-90 hover:opacity-100 transition-all text-[14px]">
              {liked ? "Liked" : "Like"}
            </span>
          </button>
          <button
            onClick={handleBookmark}
            className="flex items-center px-4 grow justify-center py-2 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-5 gap-3"
          >
            {bookmarked ? <FaBookmark color="#00bfff" /> : <FaRegBookmark />}
            <span className="max-[488px]:hidden opacity-90 hover:opacity-100 transition-all text-[14px]">
              {bookmarked ? "Saved" : "Save"}
            </span>
          </button>
          <button className="flex items-center px-4 grow justify-center py-2 rounded transition-all duration-300 hover:bg-white hover:bg-opacity-5 gap-3">
            <FaRegPaperPlane />{" "}
            <span className="max-[488px]:hidden opacity-90 hover:opacity-100 transition-all text-[14px]">
              Share
            </span>
          </button>
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

export default postcard;
