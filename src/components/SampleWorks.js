// import getBeforeAndAfterImages from "../getBeforeAndAfterImages"
import getIllustrationImages from "../getIllustrationImages"
import getPresentationImages from "../getPresentationImages"
import getWebDesignImages from "../getWebDesignImages"
import BeforeSection from "./BeforeSection"
import ImageGrid from "./ImageGrid"
import SlickSlider from "./SlickSlider"

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
  // const beforeAndAfterImages = getBeforeAndAfterImages()
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
      <BeforeSection
        triggerRef={beforeAfterRef}
        triggerRef2={beforeAfterRef2}
        id="PresentationBeforeAndAfter"
        title="Before and After"
        subtitle="Comparison of the old slide (left) to the final slide (right). Drag the slider from right to left."
      />
      <SlickSlider />
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
