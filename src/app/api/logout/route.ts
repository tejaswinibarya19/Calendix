import {session} from "@/libs/session";
export async function GET() {
    await.session().destroy();
    redirect('/?logged-out=1');
}