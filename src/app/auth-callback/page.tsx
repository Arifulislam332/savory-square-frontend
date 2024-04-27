"use client";

import Loading from "@/components/Loading";
import { useCreateUser } from "@/hooks/useCreateUser";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const { createUser } = useCreateUser();
  const router = useRouter();

  const userHasBeenCreated = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !userHasBeenCreated.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      userHasBeenCreated.current = true;
    }

    router.push("/");
  }, [createUser, router, user]);

  return <Loading />;
};

export default AuthCallbackPage;
