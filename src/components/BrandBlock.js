const BrandBlock = ({ icon, text }) => {
  return (
    <div className="rounded-square">
      {icon && (
        <div className="rounded-square-icon-container-two">
          <img className="rounded-square-icon" src={icon} alt={text} title={text} />
        </div>
      )}
    </div>
  )
}

export default BrandBlock
