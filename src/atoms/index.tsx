import { atom } from "jotai";
import User from "@/model/User";

export const currentUserAtom = atom<User | null>(null);