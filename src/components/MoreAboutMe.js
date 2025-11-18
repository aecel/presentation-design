const yearNow = new Date().getFullYear()
const numOfYears = yearNow - 2017

const MoreAboutMe = () => {
  return (
    <div className="more-about-me-section">
      <div className="flex-center">
        <h1
          style={{
            fontSize: "3rem",
            color: "var(--color-theme)",
            maxWidth: "800px",
            marginTop: "100px",
            textAlign: "left",
          }}
        >
          Hi, I’m Ace — Your Executive Presentation Designer
        </h1>
        <div className="more-about-me-text">
          <div>
            Welcome! If you’re looking for someone who truly gets what
            executives, VPs, and ambitious teams need from their presentations,
            you’re right where you should be.
          </div>
          <div>
            I’m Ace, and for the past {numOfYears} years, I’ve helped everyone
            from fast-growing startups to Fortune 500 companies create
            presentations that get results. From custom pitch decks and
            executive briefings to attention-grabbing infographics, I turn
            complex ideas into visual stories that stick.
          </div>
          <div>
            PowerPoint is usually my go-to (because that’s where business
            happens), but I’m also at home in Keynote, Google Slides, Prezi,
            Adobe Creative Suite, and Affinity Suite. And with {numOfYears + 3}{" "}
            years of illustration experience, I bring a creative edge to every
            project so your slides won’t just look polished, they’ll make a real
            impact.
          </div>
          <div>What sets me apart?</div>
          <li>
            Executive-level insight: I know what decision-makers want, how to
            craft messages for boardrooms, and how to win buy-in at the highest
            level.
          </li>
          <li>
            Data visualization expertise: I turn analytics, KPIs, and complex
            strategies into visuals that are easy to understand and hard to
            forget.
          </li>
          <li>
            Pitch deck mastery: Whether you need funding, support, or a yes from
            the C-suite, I know how to build decks that persuade.
          </li>
          <li>
            Dependable partnership: Clients count on me for fast turnarounds,
            confidentiality, and worry-free collaboration, no matter how high
            the stakes.
          </li>
          <div>
            What really drives me is helping leaders communicate clearly, spark
            confidence, and move people to action. Check out my portfolio to see
            the difference that great presentation design can make. Every
            project is a blend of creativity, strategy, and attention to detail.
          </div>
          <div>
            Ready to make your next executive presentation, pitch deck, or
            business report impossible to ignore? Let’s connect and make it
            happen.
          </div>
        </div>
        {/* <div>
        Thank you for taking the time to visit my portfolio website. Please feel
        free to reach out to me for any inquiries or potential design
        opportunities.
      </div> */}
      </div>
    </div>
  )
}

export default MoreAboutMe
