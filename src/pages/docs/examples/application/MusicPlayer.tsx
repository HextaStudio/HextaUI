import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";

import { FaShuffle, FaVolumeHigh } from "react-icons/fa6";
import { RxLoop } from "react-icons/rx";
import { MdPlayArrow, MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const MusicPlayer = () => {
  return (
    <>
      <div className="h-full w-full relative bg-zinc-950 bg-opacity-10">
        <div className="w-full h-[calc(100%-5rem)] flex items-center justify-center flex-col ">
          <div className="w-[15rem] h-[15rem] rounded-md bg-zinc-950 [background-image:url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] [background-size:15rem_15rem] m-6" />
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-2 opacity-80">
              <div className="w-2 h-8 bg-white rounded-full" />
              <div className="w-2 h-4 bg-white rounded-full" />
              <div className="w-2 h-12 bg-white rounded-full" />
            </div>
            <div className="w-2 h-5 bg-white rounded-full" />
          </div>
          <div className="absolute bottom-0 w-full bg-zinc-950 rounded-t-xl bg-opacity-60 border-t border-t-white border-opacity-10 flex items-center justify-between  backdrop-blur-xl p-6 gap-3 max-[748px]:hidden">
            <div className="flex items-center justify-center flex-1 gap-3">
              <div className="[background-image:url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] [background-size:3rem_3rem] w-[3rem] h-[3rem] rounded-md" />
              <div>
                <p className="text-white font-bold leading-4">Go away</p>
                <p className="text-white text-xs opacity-70">by Akun</p>
              </div>
            </div>
            <div className="max-w-[20rem] w-full justify-center flex items-center flex-col gap-3 flex-1">
              <div className="flex items-center gap-2">
                <MdSkipPrevious
                  size={30}
                  className="cursor-pointer opacity-80 hover:opacity-100 transition-all"
                />
                <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full">
                  <MdPlayArrow
                    fill="black"
                    size={28}
                    className="cursor-pointer shadow-[0_0_10px_rgba(255,_255,_255,_0.5)] transition-all"
                  />
                </div>
                <MdSkipNext
                  size={30}
                  className="cursor-pointer opacity-80 hover:opacity-100 transition-all"
                />
              </div>
              <div className="h-[4px] z-[999] w-[90%]  bg-zinc-900 relative rounded-full">
                <span className="w-[4rem] bg-white h-[4px] z-[99999] absolute rounded-full"></span>
              </div>
            </div>
            <div className="flex items-center gap-3  flex-1 justify-center">
              <FaShuffle className="opacity-80 cursor-pointer hover:opacity-100" />
              <RxLoop className="opacity-80 cursor-pointer hover:opacity-100" />
              <FaVolumeHigh className="opacity-80 cursor-pointer hover:opacity-100" />
            </div>
          </div>
          <div className="absolute bottom-0 w-full bg-zinc-950 rounded-t-xl bg-opacity-60 border-t border-t-white border-opacity-10  items-center justify-between  backdrop-blur-xl p-6 gap-6    max-[748px]:flex hidden flex-col">
            <div className="flex items-center justify-between w-full max-[300px]:gap-0 gap-3">
              <div className="flex items-center justify-start">
                <div className="[background-image:url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] [background-size:3rem_3rem] w-[3rem] h-[3rem] rounded-md max-[300px]:hidden" />
              </div>
              <div className="max-w-[20rem] w-full justify-end flex items-center flex-col gap-3">
                <div className="flex items-center gap-2">
                  <FaShuffle
                    size={13}
                    className="opacity-80 cursor-pointer hover:opacity-100"
                  />
                  <MdSkipPrevious
                    size={30}
                    className="cursor-pointer opacity-80 hover:opacity-100 transition-all"
                  />
                  <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full">
                    <MdPlayArrow
                      fill="black"
                      size={28}
                      className="cursor-pointer shadow-[0_0_10px_rgba(255,_255,_255,_0.5)] transition-all"
                    />
                  </div>
                  <MdSkipNext
                    size={30}
                    className="cursor-pointer opacity-80 hover:opacity-100 transition-all"
                  />
                  <RxLoop
                    size={13}
                    className="opacity-80 cursor-pointer hover:opacity-100"
                  />
                </div>
                <div className="h-[4px] z-[999] w-[90%]  bg-zinc-900 relative rounded-full">
                  <span className="w-[4rem] bg-white h-[4px] z-[99999] absolute rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const musicplayer = () => {
  return (
    <>
      <DocsSEO
        title="Music Player"
        description="A simple yet modern music player component."
        image="https://i.imgur.com/ZSzr16k.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Music Player"
            description="A simple yet modern music player component."
          />
          <DocsPreview className="h-[40rem]">
            <MusicPlayer />
          </DocsPreview>
          <CodeBlock
            free
            lang="tsx"
            filename="tsx"
            code={`import { FaShuffle, FaVolumeHigh } from "react-icons/fa6";
import { RxLoop } from "react-icons/rx";
import { MdPlayArrow, MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";

const MusicPlayer = () => {
  return (
    <>
      <div className="h-full w-full relative bg-zinc-950 bg-opacity-10">
        <div className="w-full h-[calc(100%-5rem)] flex items-center justify-center flex-col ">
          <div className="w-[15rem] h-[15rem] rounded-md bg-zinc-950 [background-image:url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] [background-size:15rem_15rem] m-6" />
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-2 opacity-80">
              <div className="w-2 h-8 bg-white rounded-full" />
              <div className="w-2 h-4 bg-white rounded-full" />
              <div className="w-2 h-12 bg-white rounded-full" />
            </div>
            <div className="w-2 h-5 bg-white rounded-full" />
          </div>
          <div className="absolute bottom-0 w-full bg-zinc-950 rounded-t-xl bg-opacity-60 border-t border-t-white border-opacity-10 flex items-center justify-between  backdrop-blur-xl p-6 gap-3 max-[748px]:hidden">
            <div className="flex items-center justify-center flex-1 gap-3">
              <div className="[background-image:url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] [background-size:3rem_3rem] w-[3rem] h-[3rem] rounded-md" />
              <div>
                <p className="text-white font-bold leading-4">Go away</p>
                <p className="text-white text-xs opacity-70">by Akun</p>
              </div>
            </div>
            <div className="max-w-[20rem] w-full justify-center flex items-center flex-col gap-3 flex-1">
              <div className="flex items-center gap-2">
                <MdSkipPrevious
                  size={30}
                  className="cursor-pointer opacity-80 hover:opacity-100 transition-all"
                />
                <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full">
                  <MdPlayArrow
                    fill="black"
                    size={28}
                    className="cursor-pointer shadow-[0_0_10px_rgba(255,_255,_255,_0.5)] transition-all"
                  />
                </div>
                <MdSkipNext
                  size={30}
                  className="cursor-pointer opacity-80 hover:opacity-100 transition-all"
                />
              </div>
              <div className="h-[4px] z-[999] w-[90%]  bg-zinc-900 relative rounded-full">
                <span className="w-[4rem] bg-white h-[4px] z-[99999] absolute rounded-full"></span>
              </div>
            </div>
            <div className="flex items-center gap-3  flex-1 justify-center">
              <FaShuffle className="opacity-80 cursor-pointer hover:opacity-100" />
              <RxLoop className="opacity-80 cursor-pointer hover:opacity-100" />
              <FaVolumeHigh className="opacity-80 cursor-pointer hover:opacity-100" />
            </div>
          </div>
          <div className="absolute bottom-0 w-full bg-zinc-950 rounded-t-xl bg-opacity-60 border-t border-t-white border-opacity-10  items-center justify-between  backdrop-blur-xl p-6 gap-6    max-[748px]:flex hidden flex-col">
            <div className="flex items-center justify-between w-full max-[300px]:gap-0 gap-3">
              <div className="flex items-center justify-start">
                <div className="[background-image:url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] [background-size:3rem_3rem] w-[3rem] h-[3rem] rounded-md max-[300px]:hidden" />
              </div>
              <div className="max-w-[20rem] w-full justify-end flex items-center flex-col gap-3">
                <div className="flex items-center gap-2">
                  <FaShuffle
                    size={13}
                    className="opacity-80 cursor-pointer hover:opacity-100"
                  />
                  <MdSkipPrevious
                    size={30}
                    className="cursor-pointer opacity-80 hover:opacity-100 transition-all"
                  />
                  <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full">
                    <MdPlayArrow
                      fill="black"
                      size={28}
                      className="cursor-pointer shadow-[0_0_10px_rgba(255,_255,_255,_0.5)] transition-all"
                    />
                  </div>
                  <MdSkipNext
                    size={30}
                    className="cursor-pointer opacity-80 hover:opacity-100 transition-all"
                  />
                  <RxLoop
                    size={13}
                    className="opacity-80 cursor-pointer hover:opacity-100"
                  />
                </div>
                <div className="h-[4px] z-[999] w-[90%]  bg-zinc-900 relative rounded-full">
                  <span className="w-[4rem] bg-white h-[4px] z-[99999] absolute rounded-full"></span>
                </div>
              </div>
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

export default musicplayer;
