import { Alert } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { HiInformationCircle } from "react-icons/hi";

export default function InfoAlert() {
  const searchParams = useSearchParams();
  const hasError = searchParams.has("error");
  const hasSuccess = searchParams.has("success");

  return (
    <div>
      {hasError && (
        <div className="w-full">
          <Alert color="failure" icon={HiInformationCircle}>
            <span>
              <p>{searchParams.get("error").split(":")[1].trimStart()}</p>
            </span>
          </Alert>
        </div>
      )}
      {hasSuccess && (
        <div className="w-full">
          <Alert color="success" icon={HiInformationCircle}>
            <span>
              <p>{searchParams.get("success").split(":")[1].trimStart()}</p>
            </span>
          </Alert>
        </div>
      )}
    </div>
  );
}
