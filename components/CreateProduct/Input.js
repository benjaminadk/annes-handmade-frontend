import { InputStyles } from './styles/Input'
import formatText from '../../lib/formatText'

export default function Input({ type, label, name, value, options, rows, onChange }) {
  return (
    <InputStyles htmlFor={name}>
      <strong>{label}</strong>
      {type === 'select' ? (
        <select name={name} value={value} onChange={onChange}>
          {options.map((el, i) => (
            <option key={el} value={el}>
              {formatText(el)}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea name={name} value={value} rows={rows} spellCheck={false} onChange={onChange} />
      ) : (
        <input type={type} name={name} value={value} spellCheck={false} onChange={onChange} />
      )}
    </InputStyles>
  )
}
