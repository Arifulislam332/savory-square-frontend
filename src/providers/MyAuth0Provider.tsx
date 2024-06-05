"use client";

import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const MyAuth0Provider = ({ children }: PropsWithChildren) => {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
  const callbackUri = process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URI;
  const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;

  const router = useRouter();

  if (!domain || !clientId || !callbackUri || !audience) {
    throw new Error("Unable to initialize auth0");
  }

  const onRedirectCallback = (appState?: AppState) => {
    router.push(appState?.returnTo || "/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: callbackUri,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default MyAuth0Provider;
