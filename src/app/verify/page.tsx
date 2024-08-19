import Verify from "@/components/Verify";
import VerificationTokenController from "@/controller/VerificationTokenController";

const VerifyPage = async ({searchParams}: any) => {
    const data = await VerificationTokenController.verify(searchParams.token);
    
    return <Verify data={data} />
}

export default VerifyPage;