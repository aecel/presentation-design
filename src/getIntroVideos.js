const getIntroVideos = () => {
  const videos = [
    {
      id: "zz8xoddehl",
      title: "FTP Server App Presentation Slides",
    },
    {
      id: "ooxjsfgjwz",
      title: "Program Roadmap for a Digital Project Presentation Slides",
    },
    {
      id: "4yjouuonvg",
      title: "Dashboard Application Presentation Slides",
    },
  ]

  return videos

  //   How to Use
  {
    videos.map((video) => (
      <section key={video.id}>
        <h2>{video.title}</h2>
        <WistiaEmbed mediaId={video.id} aspect={16 / 9} />
      </section>
    ))
  }
}
