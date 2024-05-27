import { auth } from "../../../firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/hexta-ui/AlertDialog";
import { useState } from "react";
import { FaGithub, FaGoogle, FaSignInAlt } from "react-icons/fa";
import { Button } from "../hexta-ui/Button";
import { FaXTwitter } from "react-icons/fa6";

export const Auth = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signInWithTwitter = async () => {
    const provider = new TwitterAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div>
      <Button
        className=" py-[0.45rem] text-nowrap gap-2"
        onClick={() => setShowDialog(true)}
      >
        <FaSignInAlt /> Sign In
      </Button>

      <AlertDialog className="gap-4" isOpen={showDialog}>
        <AlertDialogTitle className="text-center">
          Sign in with,
        </AlertDialogTitle>
        <AlertDialogContent>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap  grow gap-2">
              <Button
                variant="secondary"
                className=" gap-2 grow  rounded-md text-center flex items-center justify-center"
                onClick={signInWithGoogle}
              >
                <FaGoogle size={20} />
              </Button>
              <Button
                variant="secondary"
                className=" gap-2 grow  brightness-100 rounded-md text-center flex items-center justify-center"
                onClick={signInWithGithub}
              >
                <FaGithub size={20} />
              </Button>
              <Button
                variant="secondary"
                className=" gap-2 grow   rounded-md text-center flex items-center justify-center"
                onClick={signInWithTwitter}
              >
                <FaXTwitter size={20} />
              </Button>
            </div>
            <div>
              <Button
                onClick={handleCancel}
                variant="fail"
                className="w-full flex items-center justify-center"
              >
                Cancel
              </Button>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
