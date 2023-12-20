import { RefObject, createContext } from "react";

export const NavContext = createContext<{
	work?: RefObject<HTMLElement>;
	experience?: RefObject<HTMLElement>;
	projects?: RefObject<HTMLElement>;
	contact?: RefObject<HTMLElement>;
}>({});
