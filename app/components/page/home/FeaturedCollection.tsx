import {FeaturedCollectionFragment} from 'storefrontapi.generated';
import {Image, Money} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';

export default function FeaturedCollection({
  collection,
}: {
  collection: FeaturedCollectionFragment;
}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
      prefetch={'intent'}
    >
      {image ? (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      ) : (
        <div className="">NO Image</div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}
