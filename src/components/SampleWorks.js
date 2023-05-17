import getBeforeAndAfterImages from "../getBeforeAndAfterImages"
import getIllustrationImages from "../getIllustrationImages"
import getPresentationImages from "../getPresentationImages"
import getWebDesignImages from "../getWebDesignImages"
import ImageGrid from "./ImageGrid"

const SampleWorks = ({
  presentationRef,
  beforeAfterRef,
  illustrationsRef,
  webDesignRef,
  presentationRef2,
  beforeAfterRef2,
  illustrationsRef2,
  webDesignRef2,
}) => {
  const beforeAndAfterImages = getBeforeAndAfterImages()
  const illustrationImages = getIllustrationImages()
  const presentationImages = getPresentationImages()
  const webDesignImages = getWebDesignImages()

  return (
    <div className="flex-center">
      <ImageGrid
        triggerRef={presentationRef}
        triggerRef2={presentationRef2}
        id="PresentationSamples"
        title="Presentation Samples"
        imagesArray={presentationImages}
      />
      {/* <Divider /> */}
      <ImageGrid
        triggerRef={beforeAfterRef}
        triggerRef2={beforeAfterRef2}
        id="PresentationBeforeAndAfter"
        title="Before and After"
        imagesArray={beforeAndAfterImages}
        subtitle="Comparison of the input slide (from the client) to the final product"
      />
      {/* <Divider /> */}
      <ImageGrid
        triggerRef={illustrationsRef}
        triggerRef2={illustrationsRef2}
        id="Illustrations"
        title="Illustrations"
        imagesArray={illustrationImages}
      />
      {/* <Divider /> */}
      <ImageGrid
        triggerRef={webDesignRef}
        triggerRef2={webDesignRef2}
        id="WebDesign"
        title="Web Design"
        imagesArray={webDesignImages}
        imageClasses="grid-image grid-image-webdesign"
      />
    </div>
  )
}

export default SampleWorks
