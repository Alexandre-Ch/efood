import { SyncLoader } from "react-spinners";
import { cores } from "../../styles/cores";
import { LoadingDiv } from "./styles";

export function Loading() {
  return (
    <>
      <div className="container">
        <LoadingDiv>
          <SyncLoader color={cores.vermelho} size={32} />
        </LoadingDiv>
      </div>
    </>
  );
}
