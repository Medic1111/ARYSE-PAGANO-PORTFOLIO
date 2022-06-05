import { lazy, Suspense } from "react";
import Loading from "../../components/UI/Loading/Loading";

const SpecificProject = lazy(() =>
  import("../../components/ProjectsComps/SpecificProjects/SpecificProject")
);

const Specific = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="divBox">
        <SpecificProject />
      </div>
    </Suspense>
  );
};
export default Specific;
