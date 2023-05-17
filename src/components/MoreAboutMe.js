const yearNow = new Date().getFullYear()
const numOfYears = yearNow - 2017

const MoreAboutMe = () => {
  return (
    <div
      className="flex-center"
      style={{
        alignSelf: "center",
        maxWidth: "600px",
        gap: "50px",
        textAlign: "left",
        zIndex: "1",
        lineHeight: "3",
        margin: "20px",
      }}
    >
      <h1 className="grid-title">Welcome!</h1>
      <div>
        Hello and welcome to my portfolio website! My name is Aecel and I am a
        graphic designer and presentation specialist with a passion for creating
        impactful visual designs. With {numOfYears} years of experience in the
        field, I have worked with a variety of clients ranging from startups to
        Fortune 500 companies, helping them to communicate their ideas and
        messages through compelling visual storytelling.
      </div>
      <div>
        Throughout my career, I have gained expertise in various design software
        such as Adobe's Creative Suite, PowerPoint, Keynote, and Google Slides.
        I specialize in creating custom pitch decks, corporate presentations,
        infographics, and other visual materials that help clients win over new
        business.
      </div>
      <div>
        In this portfolio, you will find a selection of my best work, showcasing
        my ability to turn complex ideas into clear and concise visual designs.
        Each project presented here reflects my commitment to quality, attention
        to detail, and ability to think creatively to solve design problems.
      </div>
      {/* <div>
        Thank you for taking the time to visit my portfolio website. Please feel
        free to reach out to me for any inquiries or potential design
        opportunities.
      </div> */}
    </div>
  )
}

export default MoreAboutMe
