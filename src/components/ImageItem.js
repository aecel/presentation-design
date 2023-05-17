import { Item } from "react-photoswipe-gallery"

const ImageItem = ({ image, imageClasses }) => {
  return (
    <Item
      original={image.src}
      thumbnail={image.thumbnail ? image.thumbnail : image.src}
      width={image.width}
      height={image.height}
    >
      {({ ref, open }) => (
        <img
          className={imageClasses ? `${imageClasses}` : "grid-image"}
          ref={ref}
          onClick={open}
          src={image.src}
          alt={image.name}
        />
      )}
    </Item>
  )
}

export default ImageItem
