import FeaturedCollection from './FeaturedCollection';
import RecommendedProducts from './RecommendedProducts';

function index({
  data,
}: {
  data: {featuredCollection: any; recommendedProducts: any};
}) {
  return (
    <>
      <FeaturedCollection collection={data.featuredCollection} />
      <RecommendedProducts products={data.recommendedProducts} />
    </>
  );
}

export default index;
