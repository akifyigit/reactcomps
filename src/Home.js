import Spinner from "./components/Spinner";
import BlogList from "./BlogList";
import Tooltip from "./components/Tooltip";
import useFetch from "./useFetch";
import RangeSlider from "./components/RangeSlider";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
    <div className="home bg-red-500 h-48">
      {error && <div>{error}</div>}
      {isPending && <div className="text-center font-bold">Loading...  <Spinner /> </div>}
      {blogs && <BlogList blogs={blogs} />}
      { <Tooltip textForTip="HoverDeneme" location="bottom" tooltipClassname="" >
        <button className="bg-gray-300 text-gray-700 px-4 py-4 rounded relative h-16">
          Buttondeneme     
        </button>
      </Tooltip> }
      <RangeSlider
          initialMin={2500}
          initialMax={7500}
          min={0}
          max={10000}
          step={100}
          priceCap={1000}
        /> 
      </div>

    </>
  );
};

export default Home;
