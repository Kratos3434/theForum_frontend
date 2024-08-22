import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server";

export const GET = async () => {
    revalidatePath("/");

    return NextResponse.json({status: true, msg: "Current user fetched again"}, {status: 200});
}