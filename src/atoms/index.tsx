import { atom } from "jotai";
import User from "@/model/User";

export const isVisibleAtom = atom(false);

export const isSignupVisibleAtom = atom(false);

export const currentUserAtom = atom<User | null>(null);