import { ShippingStyles } from './styles/Shipping'

export default function Shipping() {
  return (
    <ShippingStyles>
      <div className="content">
        <h1>Shipping Policy</h1>
        <p>
          We offer free shipping to all our customers. At this time we only ship within the United
          States. All orders are shipped within 3 business days pending credit card verification.
          All items are shipped via USPS and enclosed in padded packaging.
        </p>
      </div>
    </ShippingStyles>
  )
}
