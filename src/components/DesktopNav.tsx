"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserMenu from "./UserMenu";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <Button
          onClick={async () => loginWithRedirect()}
          variant="ghost"
          className="font-bold hover:text-pink-500 hover:bg-white"
        >
          Log In
        </Button>
      )}
    </div>
  );
};

export default DesktopNav;
