const SoftwareBlock = ({ icon, text }) => {
  return (
    <div className="rounded-square">
      {icon && (
        <div className="rounded-square-icon-container">
          <img className="rounded-square-icon" src={icon} alt="" />
        </div>
      )}
      <div className="rounded-square-text">{text}</div>
    </div>
  )
}

export default SoftwareBlock