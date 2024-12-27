import { cookies } from "next/headers";
import { BackToHome } from "@/components/backToHome/backToHome";

const UserAgentRoot = () => {
  const userAgent = cookies().get("userAgent")?.value;

  return (
    <div>
      <BackToHome />
      {userAgent && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>

          <div className="border p-2">{userAgent}</div>
        </div>
      )}

      {!userAgent && <div>No user agent</div>}
    </div>
  );
};

export default UserAgentRoot;
