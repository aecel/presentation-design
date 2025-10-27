const BrandBlock = ({ icon }) => {
  return (
    <div className="rounded-square">
      {icon && (
        <div className="rounded-square-icon-container-two">
          <img className="rounded-square-icon" src={icon} alt="" />
        </div>
      )}
    </div>
  )
}

export default BrandBlock
