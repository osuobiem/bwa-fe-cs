import {Loader} from "../../components/Loader/Loader";
import {Error} from "../../components/Error/Error";

export const Search = () => {
  return (
    <>
      <Loader show={false} />
      <Error show={true} />
    </>
  );
};
